'use client';

import { Fragment } from 'react';
import NavBar from '@/components/NavBar';

export default function Blog(): JSX.Element {
  return (
    <Fragment>
      <NavBar />
      <section className='w-full h-screen flex justify-center items-center'>
        <h1 className='text-po text-6xl font-extrabold'>Very Soon...</h1>
      </section>
    </Fragment>
  );
}