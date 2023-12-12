'use client';
import { RiLinkedinBoxFill, RiGithubFill, RiTwitterXFill, RiSkypeFill  } from "react-icons/ri";
import { IoMailOutline } from "react-icons/io5";
import Link from 'next/link';

const icons = [
  { path: '/', content: <RiLinkedinBoxFill /> },
  { path: '/', content: <RiGithubFill /> },
  { path: '/', content: <RiTwitterXFill /> },
  { path: '/', content: <IoMailOutline /> },
  { path: '/', content: <RiSkypeFill /> },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link
            href={icon.path}
            key={index}
          >
            <div className={`${iconsStyles}`}>{icon.content}</div>
          </Link>
        );
      })}
    </nav>
  );
};

export default Socials;
