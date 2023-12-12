import Image from 'next/image';

const DevImg = ({containerStyles, imgSrc}) => {
    return (
        <div className={`${containerStyles}`}>
            <Image src={imgSrc} width={480} height={600} alt='Akib Saleh' className='devBlob-light devBlob object-cover' />
        </div>
    );
};

export default DevImg;