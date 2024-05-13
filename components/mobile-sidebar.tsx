import { MenuIcon } from 'lucide-react'

import { Sheet, SheetTrigger, SheetContent } from './ui/sheet'
import { Sidebar } from './sidebar'

export const MobileSidebar: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon className='text-white' />
      </SheetTrigger>
      <SheetContent className='p-0 z-[100]' side='left'>
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}
