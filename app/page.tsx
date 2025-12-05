'use client'

import { Fragment } from 'react';
import { Button } from '@heroui/button';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import Cards from '@/components/Cards';

export default function HomePage(): JSX.Element {
  return (
    <Fragment>
      <section className='w-full h-screen flex justify-center items-center'>
        <main className='flex flex-col justify-center items-center gap-5'>
          <motion.h1 initial={{ y: -100 }} animate={{ y: 0 }} className='text-po text-center text-6xl my-10'>Welcome To <span className='bg-danger p-2 rounded-2xl'>Hack兀</span></motion.h1>
          <p className='w-2/4 text-md text-center text-po'>Hack兀 It's designed to solve math problems of varying difficulty, with built-in tools and functions for all exercises. There are different levels, each unlocking upon completion, and progress is saved.</p>
          <div className='w-full flex justify-center items-center gap-2'>
            <Link href={'/UserCreate'} className='w-48'>
              <Button className='text-po w-48' variant='shadow' color='danger'>Start</Button>
            </Link>
            <Link href={'/Information'} className='w-48'>
              <Button className='text-po flex jusity-center items-center w-48' variant='bordered' color='danger'>Information <i className='fi fi-rr-angle-small-right flex justify-center items-center'></i></Button>
            </Link>
          </div>
        </main>
      </section>
      <Cards />
    </Fragment>
  );
}