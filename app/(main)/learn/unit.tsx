import { LessonButton } from './lesson-button'
import { UnitBanner } from './unit-banner'

import { lessons, units } from '@/db/schema'

type Props = {
  id: number
  order: number
  title: string
  description: string
  lessons: (typeof lessons.$inferSelect & {
    completed: boolean
  })[]
  activeLesson:
    | (typeof lessons.$inferSelect & {
        unit: typeof units.$inferSelect
      })
    | undefined
  activeLessonPercentage: number
}

export const Unit: React.FC<Props> = ({
  activeLesson,
  activeLessonPercentage,
  description,
  id,
  lessons,
  order,
  title
}) => {
  return (
    <>
      <UnitBanner title={title} description={description} />
      <div className='flex items-center flex-col relative'>
        {lessons.map((lesson, idx) => {
          const isCurrent = lesson.id === activeLesson?.id
          const isLocked = !lesson.completed && !isCurrent
          return (
            <LessonButton
              key={lesson.id}
              id={lesson.id}
              index={idx}
              totalCount={lessons.length - 1}
              current={isCurrent}
              locked={isLocked}
              percentage={activeLessonPercentage}
            />
          )
        })}
      </div>
    </>
  )
}
