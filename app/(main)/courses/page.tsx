import { List } from './list'

import { getCourses, getUserProgress } from '@/db/queries'

type Props = {}

const CoursesPage: React.FC<Props> = async () => {
  const coursesPromise = getCourses()
  const userProgressPromise = getUserProgress()

  const [courses, userProgress] = await Promise.all([
    coursesPromise,
    userProgressPromise
  ])

  return (
    <div className='h-full max-w-[912px] px-3 mx-auto'>
      <h1 className='text-2xl font-bold text-neutral-700'>
        Language course title
      </h1>
      <List courses={courses} activeCourseId={userProgress?.activeCourseId} />
    </div>
  )
}

export default CoursesPage
