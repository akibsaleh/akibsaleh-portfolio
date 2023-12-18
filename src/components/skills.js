'use client';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import skillsBanner from '@/components/assets/skillsbanner.png';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaWordpress, FaPeopleRoof, FaRegLightbulb, FaUsersGear, FaHandshake } from 'react-icons/fa6';
import { SiTailwindcss, SiNextdotjs, SiFirebase, SiMongodb, SiExpress, SiPhp } from 'react-icons/si';
import { RiJavascriptFill, RiUser6Fill, RiPhoneLine, RiLinkedinBoxFill, RiSkypeFill, RiWhatsappFill, RiCalendar2Line, RiMailLine, RiGithubFill, RiDiscordFill, RiTwitterFill} from 'react-icons/ri';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { PiBriefcase, PiBookOpenText } from 'react-icons/pi';
import { LiaLaptopCodeSolid } from 'react-icons/lia';
import { LiaHourglassStartSolid } from 'react-icons/lia';
import { TbAdjustmentsSearch } from 'react-icons/tb';

import Image from 'next/image';
import Link from 'next/link';

const skillData = [
  {
    soft: {
      title: 'soft skills',
      data: [
        {
          icon: <FaPeopleRoof />,
          name: 'Communication',
        },
        {
          icon: <FaRegLightbulb />,
          name: 'Problem-solving',
        },
        {
          icon: <FaUsersGear />,
          name: 'Adaptability',
        },
        {
          icon: <FaHandshake />,
          name: 'Collaboration',
        },
        {
          icon: <TbAdjustmentsSearch />,
          name: 'Attentive',
        },
        {
          icon: <LiaHourglassStartSolid />,
          name: 'Time-management',
        },
      ],
    },
    techs: {
      title: 'tech skills',
      data: [
        {
          icon: <FaHtml5 />,
          name: 'HTML',
        },
        {
          icon: <FaCss3Alt />,
          name: 'CSS',
        },
        {
          icon: <SiTailwindcss />,
          name: 'TailwindCSS',
        },
        {
          icon: <RiJavascriptFill />,
          name: 'JavaScript',
        },
        {
          icon: <FaReact />,
          name: 'React',
        },
        {
          icon: <SiNextdotjs />,
          name: 'Next',
        },
        {
          icon: <SiFirebase />,
          name: 'Firebase',
        },
        {
          icon: <FaNodeJs />,
          name: 'Node.Js',
        },
        {
          icon: <SiMongodb />,
          name: 'MongoDB',
        },
        {
          icon: <SiExpress />,
          name: 'Express.Js',
        },
        {
          icon: <SiPhp />,
          name: 'PHP',
        },
        {
          icon: <FaWordpress />,
          name: 'WordPress',
        },
      ],
    },
  },
];

const qualificationData = [
  {
    experience: {
      title: 'experience',
      data: [
        {
          company: 'TechnextIT Ltd.',
          years: '2018-2019',
          position: 'Junior Web Developer',
        },
        {
          company: 'American International University of Bangladesh',
          years: '2020-2021',
          position: 'Web developer and Digital Marketing Executive',
        },
        {
          company: 'Line Reflection Ltd.',
          years: '2021-2022',
          position: 'Frontend Developer',
        },
      ],
    },
  },
  {
    education: {
      title: 'education',
      data: [
        {
          subject: 'B.Sc. (engineering) in Food Engineering and Tea Technology',
          years: '2012-2017',
          institute: 'Shahjalal University of Science and Technology',
        },
        {
          subject: 'Higher Secondary (H.S.C)',
          years: '2009-2011',
          institute: 'Rajuk Uttara Model College',
        },
        {
          company: 'Secondary (S.S.C)',
          years: '2000-2009',
          institute: 'B.A.F Shaheen College Kurmitola',
        },
      ],
    },
  },
];

const personalData = [
  {
    personal: {
      title: 'personal information',
      data: [
        {
          icon: <RiUser6Fill />,
          name: 'Name :  Akib Saleh',
        },
        {
          icon: <RiCalendar2Line />,
          name: '14 Oct 1994',
        },
        {
          icon: <RiPhoneLine />,
          name: '+8801797522197',
          link: 'tel:+8801797522197',
        },
        {
          icon: <RiMailLine />,
          name: 'akibzihan@gmail.com',
          link: 'mailto:akibzihan@gmail.com',
        },
        {
          icon: <HiOutlineBuildingOffice2 />,
          name: 'Cantonment, Dhaka',
        },
        {
          icon: <RiGithubFill />,
          name: '/akibsaleh',
          link: 'https://github.com/akibsaleh',
        },
        {
          icon: <RiLinkedinBoxFill />,
          name: '/akibsaleh',
          link: 'https://www.linkedin.com/in/akibsaleh/',
        },
        {
          icon: <RiDiscordFill />,
          name: 'Discord Server',
          link: 'https://discord.gg/AvSGQSyu',
        },
        {
          icon: <RiSkypeFill />,
          name: 'zihan.dev',
          link: 'https://join.skype.com/invite/cU7Ek9OVeQzV',
        },
        {
          icon: <RiTwitterFill />,
          name: 'My Twitter ',
          link: 'https://twitter.com/akibsalehzihan',
        },
        {
          icon: <RiWhatsappFill />,
          name: '+8801797522197',
          link: 'https://wa.me/qr/Z23ZB42VWXQ2L1',
        },
      ],
    },
  },
];

const Skills = () => {
  const getData = (arr, section) => {
    return arr.find((item) => item[section]?.title.length > 0);
  };
  return (
    <div className="container mx-auto flex flex-col xl:flex-row items-center justify-start gap-10">
      <div className="flex">
        <Image
          src={skillsBanner}
          alt="skills banner"
          width={400}
          height={400}
          className="object-cover"
        />
      </div>
      <div className="flex-1 justify-center items-start">
        <Tabs
          defaultValue="skill"
          className="flex flex-col items-center"
        >
          <TabsList className="w-fit grid xl:grid-cols-3 xl:max-w-[520px] xl:border">
            <TabsTrigger
              className="w-[162px] xl:w-auto"
              value="skill"
            >
              Skills
            </TabsTrigger>
            <TabsTrigger
              className="w-[162px] xl:w-auto"
              value="qualification"
            >
              Qualification
            </TabsTrigger>
            <TabsTrigger
              className="w-[162px] xl:w-auto"
              value="personal"
            >
              Personal
            </TabsTrigger>
          </TabsList>
          <div className="text-lg mt-12 xl:mt-8">
            <TabsContent value="skill">
              <div className="pt-6">
                <div className="flex gap-x-4 justify-center items-center text-[22xl] text-primary mb-5">
                  <h4 className="uppercase font-medium inline-flex items-center gap-x-3">
                    <LiaLaptopCodeSolid className="text-3xl" /> {getData(skillData, 'techs').techs.title}
                  </h4>
                </div>

                <div className="flex gap-5 w-full overflow-hidden flex-wrap justify-center items-center pt-3 pb-10">
                  {getData(skillData, 'techs').techs.data?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="skill-icon-box group"
                      >
                        <p className="text-6xl text-muted-foreground group-hover:text-white transition-all duration-500">{item.icon}</p>
                        <p className="text-sm text-center font-bold text-muted-foreground group-hover:text-white transition-all duration-500">{item.name}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="flex gap-x-4 justify-center items-center text-[22xl] text-primary mb-5">
                  <h4 className="uppercase font-medium inline-flex items-center gap-x-3">
                    <LiaLaptopCodeSolid className="text-3xl" /> {getData(skillData, 'soft').soft.title}
                  </h4>
                </div>
                <div className="flex gap-5 w-full overflow-hidden flex-wrap justify-center items-center pt-3 pb-10">
                  {getData(skillData, 'soft').soft.data?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="skill-icon-box group"
                      >
                        <p className="text-4xl text-muted-foreground group-hover:text-white transition-all duration-500">{item.icon}</p>
                        <p className="text-xs text-center font-semibold text-muted-foreground group-hover:text-white transition-all duration-500">{item.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="qualification">
              <div className="flex flex-col lg:flex-row gap-10">
                {/* Experience */}
                <div>
                  <div className="flex gap-x-4 items-center text-[22xl] text-primary mb-5">
                    <PiBriefcase />
                    <h4 className="capitalize font-medium">{getData(qualificationData, 'experience').experience.title}</h4>
                  </div>
                  <div className="flex flex-col gap-y-8">
                    {getData(qualificationData, 'experience').experience.data.map((item, index) => {
                      const { company, years, position } = item;
                      return (
                        <div
                          key={index}
                          className="flex gap-x-8 group"
                        >
                          <div className="h-[84px] w-[1px] bg-border relative ml-2">
                            <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                          </div>
                          <div className="flex flex-col">
                            <h4 className="capitalize font-medium text-xl leading-none mb-2">{company}</h4>
                            <p className="text-lg leading-none text-muted-foreground mb-4">{position}</p>
                            <p className="text-base font-medium">{years}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* Education  */}
                <div>
                  <div className="flex gap-x-4 items-center text-[22xl] text-primary mb-5">
                    <PiBookOpenText />
                    <h4 className="capitalize font-medium">{getData(qualificationData, 'education').education.title}</h4>
                  </div>
                  <div className="flex flex-col gap-y-8">
                    {getData(qualificationData, 'education').education.data.map((item, index) => {
                      const { subject, years, institute } = item;
                      return (
                        <div
                          key={index}
                          className="flex gap-x-8 group"
                        >
                          <div className="h-[84px] w-[1px] bg-border relative ml-2">
                            <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                          </div>
                          <div className="flex flex-col">
                            <h4 className="capitalize font-medium text-xl leading-none mb-2">{subject}</h4>
                            <p className="text-lg leading-none text-muted-foreground mb-4">{institute}</p>
                            <p className="text-base font-medium">{years}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="personal">
              <div className="pt-6">
                <div className="flex gap-x-4 justify-start items-center text-[22xl] text-primary mb-5">
                  <h4 className="uppercase font-medium inline-flex items-start gap-x-3">
                    <LiaLaptopCodeSolid className="text-3xl" /> {getData(personalData, 'personal').personal.title}
                  </h4>
                </div>
                <div className="grid grid-cols-2 gap-y-3 gap-x-10 w-full">
                  {getData(personalData, 'personal').personal.data?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-start gap-x-4"
                      >
                        <p className="text-primary">{item.icon}</p>
                        <p className="">{item.link ? <Link href={item.link} className='border-b border-dotted border-primary/20'>{item.name}</Link> : item.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Skills;
