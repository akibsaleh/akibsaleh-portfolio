import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.svg';

const Logo = () => {
    return (
        <Link href='/'>
            <Image src={logo} height={54} width={54} priority alt='' />
        </Link>
    );
};

export default Logo;