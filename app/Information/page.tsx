import { Fragment } from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardBody, CardFooter } from '@heroui/card';
import { Divider } from '@heroui/divider';

export default function Information(): JSX.Element {
  return (
    <Fragment>
      <section className='w-full h-screen '>
        <h1 className='text-po font-extrabold text-8xl text-center my-10 animate-bounce'>INFORMATION</h1>
        <div className='w-full flex justify-around'>
          <Image src={'/information-image-one.svg'} alt={'Information Image One'} width={600} height={600} />
          <Image src={'/information-image-two.svg'} alt={'Information Image Two'} width={600} height={600} />
        </div>
      </section>
      <section className='w-full h-screen'>
        <h1 className='text-po font-bold text-6xl text-center my-10'>COMPETENCY LEVELS</h1>
        <div className='w-full flex my-10 gap-5 px-10 text-po'>
          <Card isPressable isHoverable>
            <CardHeader>
              <h2>Basic</h2>
            </CardHeader>
            <CardBody>
              <p>It is specially designed for teenagers, people in elementary school, with exercises in operations and basic geometry.</p>
            </CardBody>
            <CardFooter>

            </CardFooter>
          </Card>

          <Card isPressable isHoverable>
            <CardHeader>
              <h2>Intermediate</h2>
            </CardHeader>
            <CardBody>
              <p>The intermediate level is for those who are in secondary school, to solve exercises such as notable products, theorems and real numbers.</p>
            </CardBody>
            <CardFooter>

            </CardFooter>
          </Card>

          <Card isPressable isHoverable>
            <CardHeader>
              <h2>Advanced</h2>
            </CardHeader>
            <CardBody>
              <p>The advanced level is for people who are in university pursuing a professional career; it includes exercises such as integrals and analytical geometry.</p>
            </CardBody>
            <CardFooter>

            </CardFooter>
          </Card>
        </div>
      </section>
    </Fragment>
  );
}