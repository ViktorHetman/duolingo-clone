'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

import { Card } from './card'

import { courses, userProgress } from '@/db/schema'
import { upsertUserProgress } from '@/actions/user-progress'

type Props = {
  courses: (typeof courses.$inferSelect)[]
  activeCourseId?: typeof userProgress.$inferSelect.activeCourseId
}

export const List: React.FC<Props> = ({ activeCourseId, courses }) => {
  const router = useRouter()
  const [pending, startTransition] = React.useTransition()

  const onClick = (id: number) => {
    if (pending) return

    if (id === activeCourseId) {
      return router.push('/learn')
    }

    startTransition(() => {
      upsertUserProgress(id)
    })
  }

  return (
    <div className='pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4'>
      {courses.map(course => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onClick={onClick}
          disabled={false}
          active={course.id === activeCourseId}
        />
      ))}
    </div>
  )
}
