import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import stripe from 'public/images/stripe-bar.svg';

import Button from 'components/common/Button/Button';

interface NavProps {
  title: string;
}

const Navbar = ({ title }: NavProps) => {
  return (
    <nav className="w-[340px]">
      <div className="flex gap-[10px] items-center h-fit leading-[24px]">
        <Link href="/">
          <Button content="home" />
        </Link>
        <Link href="/events">
          <Button content="events" />
        </Link>
        <Link href="/merch-music">
          <Button content="merch & music" />
        </Link>
        <div className=" flex-1 w-[100%] h-[24px] bg-black-primary"></div>
      </div>
      <h1 className=" text-black-primary uppercase text-[115px] font-primary font-[700] leading-[103.5px] mt-[12px]">
        the band
      </h1>
      <div className="w-[100%] h-[10px] bg-black-primary"></div>
      <h3 className="font-primary uppercase text-black-primary text-[31.4px] leading-[28.26px] my-[10px]">
        {title}
      </h3>
      <div className="w-[100%] h-[10px] bg-black-primary"></div>
      <div className="uppercase bg-black-primary hover:bg-red-primary cursor-pointer text-center my-[10px] font-primary text-[38.36px] leading-[34.524px] pt-[17px] px-[20px] pb-[13px] h-fit break-words text-white">
        The ELECTRIFYING new album is out now
      </div>
      <Image src={stripe} alt="stripe" />
    </nav>
  );
};

export default Navbar;
