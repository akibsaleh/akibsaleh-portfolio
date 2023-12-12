'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react';
import { Montserrat_Alternates } from 'next/font/google';

import { RiBriefcase4Fill, RiTeamFill, RiTodoFill, RiArrowDownSLine } from 'react-icons/ri';

import DevImg from './DevImg';
import Badge from './Badge';
import Socials from './Socials';
import useScrollProgress from '@/hooks/useScrollProgress';
import devpp from '../../public/devpp.webp'
import devbg from '../../public/devbg.svg'

const montserratAlternates = Montserrat_Alternates({
    subsets: ['latin'],
    weight: ['900'],
  });

const Hero = () => {
    
  const completion = useScrollProgress();
  return (
    <section
      style={{ borderBottomLeftRadius: `${completion * 2}%`, borderBottomRightRadius: `${completion * 2}%` }}
      className={`py-12 xl:py-24 h-[84vh] xl:pt-28 bg-slate-100 dark:bg-slate-900 transition-all duration-100 delay-50`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left gap-y-3'>
            <div className='text-sm uppercase font-semibold mb-2 text-primary tracking-[4px]'>
              <span className="w-1 bg-primary"></span>
              Full-Stack Developer - MERN
            </div>
            <h1 style={{fontFamily: montserratAlternates.style.fontFamily}} className="h1">i&apos;m Akib Saleh <br /> a Web Developer</h1>
            <p className='heroSubTitle max-w-[500px] mx-auto xl:mx-0'>While I&apos;m not coding I read manga, nobles and watch movies/series. If I could get any super power, that would be teleportation.</p>
            <div className="flex justify-center xl:justify-start items-center gap-3 flex-col xl:flex-row mb-12">
                <Button className="gap-x-2">Download Resume <Download size={16} /></Button>
                <Link href='/contact'>
                    <Button variant="secondary" className="gap-x-2">Contact <Send size={16}/></Button>
                </Link>
            </div>
            <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconsStyles='text-foreground text-[22px] hover:text-primary transition-all' />
          </div>
          <div className='hidden xl:flex relative'>
            <div className='bg-hero_shape_1 w-[640px] h-[640px] bg-no-repeat bg-cover'>
                <div className="bg-hero_shape_2 w-[640px] h-[640px] bg-no-repeat bg-cover">
                    <DevImg containerStyles={`w-[600px] h-[600px] relative flex justify-center items-center`} imgSrc={devpp} />
                </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-0 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
