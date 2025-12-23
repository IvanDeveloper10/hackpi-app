'use client';

import { useState, Fragment } from 'react';
import CalculatorComponent from '@/components/Calculator';
import NavBar from '@/components/NavBar';

export default function Calculator() {
  const [activeTab, setActiveTab] = useState<'basic' | 'scientific'>('basic');

  return (
    <Fragment>
      <NavBar />
      <div className='p-4'>
        <div className='flex gap-2 mb-4'>
          <button onClick={() => setActiveTab('basic')}>Básica</button>
          <button onClick={() => setActiveTab('scientific')}>Científica</button>
        </div>

        <CalculatorComponent activeTab={activeTab} />
      </div>
    </Fragment>
  );
}
