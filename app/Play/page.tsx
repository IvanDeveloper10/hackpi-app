import { Fragment } from 'react';
import { Card, CardBody } from '@heroui/card';
import Link from 'next/link';

export default function PlayMath(): JSX.Element {
  return (
    <Fragment>
      <section className='w-full h-screen flex flex-col justify-center items-center text-po'>
        <main>
          <h1 className='text-8xl font-extrabold mb-10'>SELECT YOUR LEVEL</h1>
        </main>
        <div className='grid grid-cols-3 gap-5'>
          <Link href={'/Play/LevelBasic'} className='w-full'>
            <Card isHoverable isPressable className='bg-danger w-full'>
              <CardBody className='flex justify-center items-center'>
                BASIC
              </CardBody>
            </Card>
          </Link>
          <Link href={'/Play/LevelIntermediate'}>
            <Card isHoverable isPressable className='bg-danger'>
              <CardBody className='flex justify-center items-center'>
                INTERMEDIATE
              </CardBody>
            </Card>
          </Link>
          <Link href={'/Play/LevelAdvanced'}>
            <Card isHoverable isPressable className='bg-danger'>
              <CardBody className='flex justify-center items-center'>
                ADVANCED
              </CardBody>
            </Card>
          </Link>
        </div>
      </section>
    </Fragment>
  );
}