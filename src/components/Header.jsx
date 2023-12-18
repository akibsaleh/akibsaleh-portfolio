'use client';
import { useEffect, useState } from 'react';
// Components
import Logo from './Logo';
import MobileNav from './MobileNav';
import Nav from './Nav';
import ThemeToggler from './ThemeToggler';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
    return () => window.removeEventListener('scroll', scrollYPos);
  }, []);

  return (
    <header className={`${
      header ? 'py-3 bg-white shadow-lg dark:bg-slate-950'
      : 'py-3 dark:bg-slate-900'
    } sticky top-0 z-30 transition-all ${pathName === '/' && 'bg-slate-100'}`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            {/* nav  */}
            <Nav
              containerStyles={'hidden xl:flex gap-x-8 items-center'}
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles={'absolute left-0 top-full h-[2px] bg-primary w-full'}
            />
            <ThemeToggler />
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
