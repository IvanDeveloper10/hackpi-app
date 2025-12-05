import { Fragment } from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@heroui/card';
import { Divider } from '@heroui/divider';
import Link from 'next/link';

export default function Cards(): JSX.Element {
  return (
    <Fragment>
      <section className='flex gap-5 px-10'>
        <Card className='w-2/3 text-po' isBlurred isHoverable isPressable>
          <CardHeader>
            <h2 className='flex justify-center items-center gap-1'>
              <i className='fi fi-rr-world flex justify-center items-center bg-danger p-4 rounded-full'></i> International
            </h2>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Hack兀 is designed for all people around the world to promote inclusion and social diversity.</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link href={'/'} className='flex justify-center items-center gap-1 text-blue-500'>
              <i className='fi fi-rr-arrow-up-right-from-square flex justify-center items-center'></i> read full article
            </Link>
          </CardFooter>
        </Card>

        <Card className='w-2/3 text-po' isBlurred isHoverable isPressable>
          <CardHeader>
            <h2 className='flex justify-center items-center gap-1'>
              <i className='fi fi-rr-calculator flex justify-center items-center bg-danger p-4 rounded-full'></i> Calculator
            </h2>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Hack兀 it has a built-in calculator that will help you with your challenges, activities and more; you will always have it available with an icon in the lower right corner.</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link href={'/'} className='flex justify-center items-center gap-1 text-blue-500'>
              <i className='fi fi-rr-arrow-up-right-from-square flex justify-center items-center'></i> read full article
            </Link>
          </CardFooter>
        </Card>

        <Card className='w-2/3 text-po' isBlurred isHoverable isPressable>
          <CardHeader>
            <h2 className='flex justify-center items-center gap-1'>
              <i className='fi fi-rr-comment flex justify-center items-center bg-danger p-4 rounded-full'></i> Blog
            </h2>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>There is a space for users to comment on the page, discuss a common topic, or even collaborate in real time.</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link href={'/'} className='flex justify-center items-center gap-1 text-blue-500'>
              <i className='fi fi-rr-arrow-up-right-from-square flex justify-center items-center'></i> read full article
            </Link>
          </CardFooter>
        </Card>

        <Card className='w-2/3 text-po' isBlurred isHoverable isPressable>
          <CardHeader>
            <h2 className='flex justify-center items-center gap-1'>
              <i className='fi fi-rr-layers flex justify-center items-center bg-danger p-4 rounded-full'></i> Levels
            </h2>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>There are different levels to suit your difficulty, from basic operations with numbers to solving derivatives and integrals.</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link href={'/'} className='flex justify-center items-center gap-1 text-blue-500'>
              <i className='fi fi-rr-arrow-up-right-from-square flex justify-center items-center'></i> read full article
            </Link>
          </CardFooter>
        </Card>
      </section>
    </Fragment>
  );
}