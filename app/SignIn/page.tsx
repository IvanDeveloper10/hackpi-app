'use client'

import { Fragment, useState } from 'react';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/utils/firebase';
import NavBar from '@/components/NavBar';

export default function UserCreate(): JSX.Element {

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateUser = (): void => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      })
      .catch((error) => {
      })

    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/');
      } else {
        router.push('/UserCreate')
      }
    })
  }

  return (
    <Fragment>
      <NavBar />
      <section className='w-full h-screen flex justify-center items-center text-po'>
        <div className='w-2/4 flex flex-col justify-center items-center gap-4'>
          <main>
            <h1 className='font-bold text-4xl text-center'>SIGN IN</h1>
          </main>
          <Input type='email' placeholder='Email' color='danger' variant='bordered' onChange={(e) => setEmail(e.target.value)} className='w-96' />
          <Input type='password' placeholder='Password' color='danger' variant='bordered' onChange={(e) => setPassword(e.target.value)} className='w-96' />
          <Button onPress={handleCreateUser} color='danger' className='w-96'>LOGIN</Button>
          <p className='text-center'>Do not you have an account? <Link href={'/UserCreate'} className='text-blue-500'>Create A User</Link></p>
        </div>
        <div className='w-2/4 flex justify-center items-center'>
          <Image src={'/sign-image.svg'} alt={'Sign Image'} width={500} height={500} />
        </div>
      </section>
    </Fragment>
  );
}