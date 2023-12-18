import { Yeseva_One } from 'next/font/google';
const yesevaOne = Yeseva_One({
  subsets: ['latin'],
  weight: ['400'],
});

const Projects = () => {
  return (
    <div className="px-5 flex flex-col items-center my-20 max-w-screen-xl mx-auto">
      <div className="mb-10 text-center">
        <p className="text-sm uppercase font-semibold mb-2 text-primary tracking-[4px]">Portfolio</p>
        <h2
          style={{ fontFamily: yesevaOne.style.fontFamily }}
          className="h2 uppercase"
        >
          My Recent Projects
        </h2>
      </div>
      <div className='py-5 flex flex-col'>

      </div>
    </div>
  );
};

export default Projects;
