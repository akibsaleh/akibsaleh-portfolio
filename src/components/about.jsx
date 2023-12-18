import { Yeseva_One } from 'next/font/google';
const yesevaOne = Yeseva_One({
  subsets: ['latin'],
  weight: ['400'],
});

const About = () => {
  return (
    <div className="px-5 flex flex-col items-center my-20 max-w-screen-xl mx-auto">
      <div className='mb-10 text-center'>
        <p className="text-sm uppercase font-semibold mb-2 text-primary tracking-[4px]">About Me</p>
        <h2
          style={{ fontFamily: yesevaOne.style.fontFamily }}
          className="h2 uppercase"
        >
          Know me more
        </h2>
      </div>
      <div>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-y-12'>
          <div className='text-center lg:text-left col-span-3'>
            <h2 className='text-xl mb-3'>
              Hi, I&apos;m <span className='font-bold border-primary border-b-2'>Akib Saleh</span>
            </h2>
            <p>
              Welcome to my corner of the web! I&apos;m a seasoned full-stack developer driven by a love for crafting visually stunning and seamlessly functional websites. With a solid foundation from four years as a WordPress developer, I&apos;ve
              recently immersed myself in the dynamic world of MERN Stack for the past year. My passion lies in bringing web applications to life, covering every aspect from frontend finesse to backend robustness. Priding myself on punctuality, I
              prioritize delivering work that not only meets but exceeds my clients&apos; expectations.
            </p>
          </div>
          <div className='text-center inline-flex flex-col justify-center items-center col-span-1'>
            <h3 className='text-7xl lg:text-9xl font-black  bg-sky-200 dark:bg-sky-600 w-24 h-24 rounded-full flex justify-center items-center mb-3'>5</h3>
            <p>Years of <span className="font-bold">Experience</span></p>
          </div>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 pt-12 font-semibold items-center'>
          <div className='h-28 w-full flex flex-col justify-center'>
            <p className='text-muted-foreground'>Name:</p>
            <p>Akib Saleh</p>
          </div>
          <div className='h-28 w-full flex flex-col justify-center'>
            <p className='text-muted-foreground'>Email:</p>
            <p>akibzihan@gmail.com</p>
          </div>
          <div className='h-28 w-full flex flex-col justify-center'>
            <p className='text-muted-foreground'>Date of Birth:</p>
            <p>14 October, 1994</p>
          </div>
          <div className='h-28 w-full flex flex-col justify-center'>
            <p className='text-muted-foreground'>From:</p>
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
