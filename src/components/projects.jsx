'use client';
import { Yeseva_One } from 'next/font/google';
const yesevaOne = Yeseva_One({
  subsets: ['latin'],
  weight: ['400'],
});

import dwellife_cover from '@/components/assets/dwellife_preview.jpg';
import shohayota_cover from '@/components/assets/shohayota-cover.jpg';
import assigneo_cover from '@/components/assets/assineo-cover.jpg';
import Image from 'next/image';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Github, MoveRight } from 'lucide-react';

const project_info = [
  {
    id: 101,
    cover: dwellife_cover,
    cover_length: 1277,
    title: 'Dwellife',
    desc: 'A web application that simplifies the process of renting an apartment. Users can explore various options, apply for their preferred choice, and pay their rent online using credit or debit cards. Dwellife also provides exclusive features to elevate the living experience of its customers.',
    github: 'https://github.com/akibsaleh/dwellife',
    live: 'https://dwellife.web.app/',
    tags: ['Tailwind', 'React', 'Express', 'Nodejs', 'MongoDB'],
  },
  {
    id: 102,
    cover: shohayota_cover,
    cover_length: 2558,
    title: 'Shohayota',
    desc: 'A web application that helps people who are in need. This app lets user to submit application requesting donation. Application form has advanced features. Such as file upload directly from frontend, error handling, unique submission validation, file validation.',
    github: 'https://github.com/akibsaleh/shohayota',
    live: 'https://shohayota.com/',
    tags: ['Tailwind', 'React', 'Express', 'Nodejs', 'MongoDB'],
  },
  {
    id: 103,
    cover: assigneo_cover,
    cover_length: 988,
    title: 'Assigneo',
    desc: 'This app is a platform for creating and sharing assignments with other students. Users can customize their assignments with various options, such as topic, deadline, difficulty, and media. Users can also submit their work, receive peer feedback, and edit their assignments after publishing.',
    github: 'https://github.com/akibsaleh/assigneo',
    live: 'https://assigneo-akib-saleh.web.app/',
    tags: ['Tailwind', 'React', 'Express', 'Nodejs', 'MongoDB'],
  },
];

const Projects = () => {
  return (
    <div className="px-5 flex flex-col items-center my-20 max-w-screen-xl mx-auto">
      <div className="mb-10 text-center">
        <p className="text-sm uppercase font-semibold mb-2 text-primary tracking-[4px]">My Portfolio</p>
        <h2
          style={{ fontFamily: yesevaOne.style.fontFamily }}
          className="h2 uppercase"
        >
          Recent Projects
        </h2>
      </div>
      <div className="py-5 flex flex-col gap-y-20">
        {project_info.map((project, index) => {
          return (
            <div
              key={index}
              className={`flex items-center flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              <div>
                <div className="rounded-lg w-[720px] h-[480px] overflow-hidden">
                  <motion.div
                    layoutId="image"
                    initial={{ y: 0 }}
                    whileHover={{ y: -project.cover_length, transition: { duration: 7 } }}
                    onTransitionEnd={{ y: 0}}
                  >
                    <Image
                      src={project.cover.src}
                      width={720}
                      height={480}
                      alt={project.title}
                      className="object-cover object-top"
                    />
                  </motion.div>
                </div>
              </div>
              <div className="w-1/2 px-14 py-10 rounded-lg flex flex-col gap-y-5 text-muted-foreground">
                <h3 className="h3 !font-light uppercase tracking-wider">{project.title}</h3>
                <p>{project.desc}</p>
                <div className="space-x-2.5">
                <Button asChild>
                    <Link href={`project/${project.id}`} className='space-x-2'><span>Learn More</span> <MoveRight size={16} strokeWidth={1.5} /></Link>
                  </Button>
                  <Button variant='outline' asChild>
                    <Link href={project.live} className='space-x-0.5' target='_blank'><span>Live</span> <ArrowUpRight size={16} strokeWidth={1.5} /></Link>
                  </Button>
                  <Button variant='ghost' asChild>
                    <Link href={project.github} className='space-x-2' target='_blank'><span>Source</span> <Github size={16} strokeWidth={1.5} /></Link>
                  </Button>
                  
                </div>
                <div className="flex items-center gap-2">
                  {project.tags.map((tag, index) => {
                    return (
                      <Badge
                        variant="outline"
                        key={index}
                      >
                        {tag}
                      </Badge>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
