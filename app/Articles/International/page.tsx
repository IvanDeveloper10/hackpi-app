import { Fragment } from 'react';
import Image from 'next/image';

export default function InternationalArticle(): JSX.Element {
  return (
    <Fragment>
      <section className='w-full h-screen flex flex-col'>
        <h1 className='text-center text-po font-extrabold text-8xl mt-10'>INTERNATIONAL</h1>
        <div className='w-full flex'>
          <div className='w-2/4 flex justify-center items-center'>
            <Image src={'/international-image.svg'} alt={'International Image'} width={600} height={600} />
          </div>
          <div className='w-2/4 flex flex-col items-start'>
            <p className='w-2/3 mt-30 text-po'>Hack兀 is international, meaning it's designed for everyone in the world. The only drawback is that it's currently only available in English, but new languages ​​will be added in future updates so users don't have to use Google Translate and risk the site changing or breaking components.</p>
            <p className='w-2/3 mt-5 text-po'>The platform is available to everyone on the web as it is hosted in the cloud with the service provided by VERCEL.</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
}