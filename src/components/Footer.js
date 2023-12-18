import React from 'react';

const Footer = () => {
    const d = new Date();
    console.log(d);
    return (
        <footer className='bg-secondary text-center text-secondary-foreground py-4'>
            ©{} [Your Full Name or Company Name]. All rights reserved.
        </footer>
    );
};

export default Footer;