import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { AlignJustify } from 'lucide-react';

  import Nav from './Nav';
  import Logo from './Logo';
  import Socials from './Socials';

  
const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <AlignJustify className="w-6 h-6 cursor-pointer" />
            </SheetTrigger>
            <SheetContent>
                <div className='flex flex-col items-center justify-between h-full py-8'>
                    <div className='flex flex-col items-center gap-y-20'>
                        <Logo />
                        <Nav containerStyles='flex flex-col items-center gap-y-6 grow' linkStyles='text-2xl' />
                    </div>
                        <Socials containerStyles='flex gap-x-4' iconsStyles='text-2xl' />
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;