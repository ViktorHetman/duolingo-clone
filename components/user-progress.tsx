import Link from 'next/link'
import Image from 'next/image'
import { InfinityIcon } from 'lucide-react'

import { Button } from './ui/button'
import { courses } from '@/db/schema'

type Props = {
  activeCourse: typeof courses.$inferSelect
  hearts: number
  points: number
  hasActiveSubscription: boolean
}

export const UserProgress: React.FC<Props> = ({
  activeCourse,
  hasActiveSubscription,
  hearts,
  points
}) => {
  return (
    <div className='flex items-center justify-between gap-x-2 w-full'>
      <Link href='/courses'>
        <Button variant='ghost'>
          <Image
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            className='rounded-mb border'
            width={32}
            height={32}
          />
        </Button>
      </Link>
      <Link href='/shop'>
        <Button variant='ghost' className='text-orange-500'>
          <Image src='/points.svg' height={28} width={28} alt='Points' />
          {points}
        </Button>
      </Link>
      <Link href='/shop'>
        <Button variant='ghost' className='text-rose-500 gap-x-1'>
          <Image
            src='/heart.svg'
            height={22}
            width={22}
            alt='Hearts'
            className='h-4 w-4 stroke-[3]'
          />
          {hasActiveSubscription ? <InfinityIcon /> : hearts}
        </Button>
      </Link>
    </div>
  )
}
