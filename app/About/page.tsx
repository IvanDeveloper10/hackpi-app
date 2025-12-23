'use client';

import { Fragment } from 'react';
import Image from 'next/image';
import NavBar from '@/components/NavBar';

export default function About(): JSX.Element {
  return (
    <Fragment>
      <NavBar />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,320L0,320L65.5,320L65.5,64L130.9,64L130.9,256L196.4,256L196.4,96L261.8,96L261.8,224L327.3,224L327.3,0L392.7,0L392.7,288L458.2,288L458.2,64L523.6,64L523.6,320L589.1,320L589.1,64L654.5,64L654.5,64L720,64L720,288L785.5,288L785.5,128L850.9,128L850.9,128L916.4,128L916.4,0L981.8,0L981.8,64L1047.3,64L1047.3,32L1112.7,32L1112.7,256L1178.2,256L1178.2,288L1243.6,288L1243.6,64L1309.1,64L1309.1,288L1374.5,288L1374.5,96L1440,96L1440,0L1374.5,0L1374.5,0L1309.1,0L1309.1,0L1243.6,0L1243.6,0L1178.2,0L1178.2,0L1112.7,0L1112.7,0L1047.3,0L1047.3,0L981.8,0L981.8,0L916.4,0L916.4,0L850.9,0L850.9,0L785.5,0L785.5,0L720,0L720,0L654.5,0L654.5,0L589.1,0L589.1,0L523.6,0L523.6,0L458.2,0L458.2,0L392.7,0L392.7,0L327.3,0L327.3,0L261.8,0L261.8,0L196.4,0L196.4,0L130.9,0L130.9,0L65.5,0L65.5,0L0,0L0,0Z"></path></svg>
      <section className='w-full h-screen'>
        <h1 className='text-po text-center font-extrabold text-6xl my-10'>ABOUT HACK兀</h1>
        <div className='w-full flex justify-around'>
          <div className='w-2/4 flex justify-center items-center'>
            <Image src={'/hackpi-mockup-image.png'} alt={'HackPI Mockup Image'} width={500} height={500} />
          </div>
          <div className='w-2/4 flex flex-col gap-5 py-10'>
            <p className='text-po w-2/3'>Hack兀 is a cloud-hosted online platform whose main purpose is to use mathematical exercises so that curious and scientific people like you can solve them, learn in the process, and face great challenges.</p>
            <p className='text-po w-2/3'>I started Hack兀 for the YSWS (You Ship, We Ship) called Axiom because this idea is related to mathematics and also to teaching.</p>
          </div>
        </div>
      </section>
      <section className='w-full h-screen flex justify-around items-start'>
        <div className='w-2/4 flex flex-col justify-center items-center'>
          <h1 className='text-po font-bold text-4xl mb-5'>DEVELOPER (ME)</h1>
          <p className='w-2/3 text-po'>Hi, my name is Iván and I'm about to turn 17, so I'm currently 16. I built Hack兀 with the primary goal of providing a single web platform for people who need to engage with mathematics. I coded everything using three fundamental pillars: NextJS, Firebase, and TypeScript. For the design, I used Tailwind CSS and the HeroUI component library. I obtained the images from free, open-source image libraries.</p>
        </div>
        <div className='w-2/4 flex justify-center items-center'>
          <Image src={'/cat-blue.jpg'} alt={'Cat Blue (Me)'} width={300} height={300} className='rounded-3xl border-6 border-danger' />
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#5000ca" fillOpacity="1" d="M0,32L0,160L84.7,160L84.7,256L169.4,256L169.4,128L254.1,128L254.1,128L338.8,128L338.8,256L423.5,256L423.5,96L508.2,96L508.2,32L592.9,32L592.9,192L677.6,192L677.6,96L762.4,96L762.4,256L847.1,256L847.1,96L931.8,96L931.8,96L1016.5,96L1016.5,288L1101.2,288L1101.2,64L1185.9,64L1185.9,224L1270.6,224L1270.6,224L1355.3,224L1355.3,288L1440,288L1440,320L1355.3,320L1355.3,320L1270.6,320L1270.6,320L1185.9,320L1185.9,320L1101.2,320L1101.2,320L1016.5,320L1016.5,320L931.8,320L931.8,320L847.1,320L847.1,320L762.4,320L762.4,320L677.6,320L677.6,320L592.9,320L592.9,320L508.2,320L508.2,320L423.5,320L423.5,320L338.8,320L338.8,320L254.1,320L254.1,320L169.4,320L169.4,320L84.7,320L84.7,320L0,320L0,320Z"></path>
      </svg>
    </Fragment>
  );
}