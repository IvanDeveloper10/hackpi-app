'use client';

import { Fragment, useState, useEffect } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/navbar';
import { Button } from '@heroui/button';
import { Popover, PopoverTrigger, PopoverContent } from '@heroui/popover';
import Link from 'next/link';
import { ThemeDarkLight } from './ThemeDarkLight';
import { auth } from '@/utils/firebase';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';

export default function NavBar(): JSX.Element {

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async (): Promise<void> => {
    try {
      await signOut(auth); // Añade el await
    } catch(error) {
      console.error(error);
    }
  }

  return (
    <Fragment>
      <Navbar shouldHideOnScroll className='border-b-1 border-gray-700'>
        <NavbarContent justify='start'>
          <NavbarBrand>
            <h1 className='text-po text-2xl'>Hack兀</h1>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className='flex' justify='center'>
          <NavbarItem>
            <Link href={'/'} className='text-po flex justify-center items-center gap-1'>
              <i className='fi fi-rr-home flex justify-center items-center'></i> Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href={'/Calculator'} className='text-po flex justify-center items-center gap-1'>
              <i className='fi fi-rr-calculator flex justify-center items-center'></i> Calculator
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href={'/About'} className='text-po flex justify-center items-center gap-1'>
              <i className='fi fi-rr-info flex justify-center items-center'></i> About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href={'/Blog'} className='text-po flex justify-center items-center gap-1'>
              <i className='fi fi-rr-users flex justify-center items-center'></i> Blog
            </Link>
          </NavbarItem>
          {user ? (
            <NavbarItem>
              <Link href={'/Play'} className='text-po flex justify-center items-center gap-1'>
                <i className='fi fi-rr-square-root flex justify-center items-center'></i> Play
              </Link>
            </NavbarItem>
          ): null }
          <NavbarItem>
            <Popover>
              <PopoverTrigger>
                <Button variant='faded' className='text-po flex justify-center items-center'>Theme <i className='fi fi-rr-angle-small-down flex justify-center items-center'></i></Button>
              </PopoverTrigger>
              <PopoverContent>
                <ThemeDarkLight />
              </PopoverContent>
            </Popover>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify='end'>
          {loading ? (
            <NavbarItem>
            </NavbarItem>
          ) : !user ? (
            <NavbarItem>
              <Link href={'/UserCreate'}>
                <Button variant='flat' color='danger' className='text-po'>Login</Button>
              </Link>
            </NavbarItem>
          ) : (
            <NavbarItem>
              <Button 
                variant='flat' 
                color='danger' 
                className='text-po' 
                onPress={handleSignOut}
              >
                Sign Out
              </Button>
            </NavbarItem>
          )}
        </NavbarContent>
      </Navbar>
    </Fragment>
  );
}