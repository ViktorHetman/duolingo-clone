import { redirect } from 'next/navigation'

import { FeedWrapper } from '@/components/feed-wrapper'
import { StickyWrapper } from '@/components/sticky-wrapper'
import { UserProgress } from '@/components/user-progress'
import { Header } from './header'
import { Unit } from './unit'

import {
  getCourseProgress,
  getLessonPercentage,
  getUnits,
  getUserProgress
} from '@/db/queries'

const LearnPage: React.FC = async () => {
  const userProgressPromise = getUserProgress()
  const coursePogressPromise = getCourseProgress()
  const lessonPercentagePromise = getLessonPercentage()
  const unitsPromise = getUnits()

  const [userProgress, units, coursePogress, lessonPercentage] =
    await Promise.all([
      userProgressPromise,
      unitsPromise,
      coursePogressPromise,
      lessonPercentagePromise
    ])

  if (!userProgress || !userProgress.activeCourse) {
    redirect('/courses')
  }

  if (!coursePogress) {
    redirect('/courses')
  }

  return (
    <div className='flex flex-row-reverse gap-[48px] px-6'>
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title={userProgress.activeCourse.title} />
        {units.map(unit => (
          <div key={unit.id} className='mb-10'>
            <Unit
              id={unit.id}
              order={unit.order}
              description={unit.description}
              lessons={unit.lessons}
              title={unit.title}
              activeLesson={coursePogress?.activeLesson}
              activeLessonPercentage={lessonPercentage}
            />
          </div>
        ))}
      </FeedWrapper>
    </div>
  )
}

export default LearnPage
