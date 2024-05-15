import { redirect } from 'next/navigation'

import { FeedWrapper } from '@/components/feed-wrapper'
import { StickyWrapper } from '@/components/sticky-wrapper'
import { UserProgress } from '@/components/user-progress'
import { Header } from './header'

import { getUserProgress } from '@/db/queries'

const LearnPage: React.FC = async () => {
  const userProgressPromise = getUserProgress()

  const [userProgress] = await Promise.all([userProgressPromise])

  if (!userProgress || !userProgress.activeCourse) {
    redirect('/courses')
  }

  return (
    <div className='flex flex-row-reverse gap-[48px] px-6'>
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: 'Spanish', imgSrc: '/es.svg' }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title='Spanish' />
      </FeedWrapper>
    </div>
  )
}

export default LearnPage
