'use client';

import { Fragment } from 'react';
import CalculatorButton from './CalculatorButton';

interface BasicCalculatorProps {
  expression: string;
  onExpressionChange: (value: string) => void;
  onCalculate: () => void;
  onClear: () => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  memory: number;
  onMemoryAdd: () => void;
  onMemorySubtract: () => void;
  onMemoryRecall: () => void;
  onMemoryClear: () => void;
}

export default function BasicCalculator({
  expression,
  onExpressionChange,
  onCalculate,
  onClear,
}: BasicCalculatorProps): JSX.Element {

  const buttons = [
    { label: 'C', action: 'clear', color: 'danger', className: 'col-span-2'},
    { label: '⌫', action: 'backsáce', color: 'warning' },
    { label: '+', action: '+', color: 'primary' },

    { label: '7', action: '7' },
    { label: '8', action: '8' },
    { label: '9', action: '9' },
    { label: '×', action: '×', color: 'primary' },

    { label: '4', action: '4' },
    { label: '5', action: '5' },
    { label: '6', action: '6' },
    { label: '-', action: '-', color: 'primary' },

    { label: '1', action: '1' },
    { label: '2', action: '2' }, 
    { label: '3', action: '3' },
    { label: '+', action: '+', color: 'primary' },

    { label: '±', action: 'negate' },
    { label: '0', action: '0' },
    { label: '.', action: '.' },
    { label: '=', action: '=', color: 'success', className: '!bg-green-600 text-white' },
  ];

  const handleButtonClick = (action: string) => {
    switch (action) {
      case 'clear':
        onClear();
        break;
      case 'backspace':
        onExpressionChange(expression.slice(0,-1));
        break;
      case '=':
        onCalculate();
        break;
      case 'negate':
        if (expression) {
          if (expression.startsWith('-')) {
            onExpressionChange(expression.slice(1));
          } else {
            onExpressionChange('-' + expression);
          }
        }
        break;
      default: 
        onExpressionChange(expression + action);
    }
  };

  const specialButtons = [
    { label: 'π', value: Math.PI.toFixed(10), color: 'secondary' },
    { label: 'e', value: Math.E.toFixed(10), color: 'secondary' },
    { label: 'x²', value: 'sqrt(', color: 'secondary' },
    { label: '(', value: '(', color: 'secondary' },
    { label: ')', value: ')', color: 'secondary' },
  ];

  return (
    <Fragment>
      <div className='grid grid-cols-5 gap-3'>
        {buttons.map((button, index) => (
          <CalculatorButton
            key={index}
            label={button.label}
            onClick={() => handleButtonClick(button.action)}
            color={button.color as any}
            className={button.className}
          />
        ))}
      </div>

      <div className='grid grid-cols-5 gap-3 mt-3'>
        {specialButtons.map((button, index) => (
          <CalculatorButton 
            key={index}
            label={button.label}
            onClick={() => onExpressionChange(expression + button.value)}
            color={button.color as any}
            size='sm'
          />
        ))}
      </div>
    </Fragment>
  );
}