import { Button } from '@/components/ui/button'
import Image from 'next/image'

export const Footer: React.FC = () => {
  return (
    <footer className='hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2'>
      <div className='max-w-screen-lg mx-auto flex items-center justify-evenly h-full'>
        <Button size='lg' variant='ghost' className='w-full'>
          <Image
            src='/de.svg'
            alt='Germany flag'
            width={32}
            height={32}
            className='mr-4 rounded-md'
          />
          German
        </Button>
        <Button size='lg' variant='ghost' className='w-full'>
          <Image
            src='/jp.svg'
            alt='Japanese flag'
            width={32}
            height={32}
            className='mr-4 rounded-md'
          />
          Japanese
        </Button>
        <Button size='lg' variant='ghost' className='w-full'>
          <Image
            src='/es.svg'
            alt='Spanish flag'
            width={32}
            height={32}
            className='mr-4 rounded-md'
          />
          Spanish
        </Button>
        <Button size='lg' variant='ghost' className='w-full'>
          <Image
            src='/fr.svg'
            alt='France flag'
            width={32}
            height={32}
            className='mr-4 rounded-md'
          />
          French
        </Button>
        <Button size='lg' variant='ghost' className='w-full'>
          <Image
            src='/it.svg'
            alt='Italian flag'
            width={32}
            height={32}
            className='mr-4 rounded-md'
          />
          Italian
        </Button>
      </div>
    </footer>
  )
}
