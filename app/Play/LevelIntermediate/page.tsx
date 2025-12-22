import { Fragment } from 'react';
import { Button } from '@heroui/button';
import Link from 'next/link';

export default function LevelIntermediate(): JSX.Element {
  return (
    <Fragment>
      <section className='w-full h-screen flex flex-col justify-center items-center'>
        <h1 className='text-po text-5xl font-extrabold animate-bounce my-16'><span className='bg-danger p-2 rounded-xl'>WELCOME</span> TO THE LEVEL <span className='bg-danger p-2 rounded-xl'>INTERMEDIATE</span></h1>
        <p className='text-po w-96 text-center'>Before we start using neurons to solve math problems, let's review fundamental algebra in the practical guide.</p>
        <Link href={'/Play/LevelIntermediate/BeforeGuide'}>
          <Button className='w-96 mt-5 text-po' color='danger'>GO TO THE GUIDE <i className='fi fi-rr-angle-small-right'></i></Button>
        </Link>
      </section>
    </Fragment>
  );
}