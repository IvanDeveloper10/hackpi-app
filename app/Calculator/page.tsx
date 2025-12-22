'use client';

import { useState } from 'react';
import CalculatorComponent from '@/components/Calculator';

export default function Calculator() {
  const [activeTab, setActiveTab] = useState<'basic' | 'scientific'>('basic');

  return (
    <div className='p-4'>
      <div className='flex gap-2 mb-4'>
        <button onClick={() => setActiveTab('basic')}>Básica</button>
        <button onClick={() => setActiveTab('scientific')}>Científica</button>
      </div>

      <CalculatorComponent activeTab={activeTab} />
    </div>
  );
}
