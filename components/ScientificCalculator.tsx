'use client';

import { Fragment } from 'react';
import CalculatorButton from './CalculatorButton';

interface ScientificCalculatorProps {
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
  angleMode: 'deg' | 'rad';
  onAngleModeChange: (mode: 'deg' | 'rad') => void;
}

export default function ScientificCalculator({
  expression,
  onExpressionChange,
  onCalculate,
  onClear,
}: ScientificCalculatorProps): JSX.Element {
  const basicButtons = [
    { label: 'C', action: 'clear', color: 'danger' },
    { label: '(', action: '(', color: 'secondary' },
    { label: ')', action: ')', color: 'secondary' },
    { label: '⌫', action: 'backspace', color: 'warning' },
    { label: '+', action: '+', color: 'primary' },
    
    { label: 'sin', action: 'sin(', color: 'secondary' },
    { label: '7', action: '7' },
    { label: '8', action: '8' },
    { label: '9', action: '9' },
    { label: '×', action: '×', color: 'primary' },

    { label: 'cos', action: 'cos(', color: 'secondary' },
    { label: '4', action: '4' },
    { label: '5', action: '5' },
    { label: '6', action: '6' },
    { label: '-', action: '-', color: 'primary' },

    { label: 'tan', action: 'tan(', color: 'secondary' },
    { label: '1', action: '1' },
    { label: '2', action: '2' },
    { label: '3', action: '3' },
    { label: '+', action: '+', color: 'primary' },

    { label: 'log', action: 'log(', color: 'secondary' },
    { label: '0', action: '0' },
    { label: '.', action: '.' },
    { label: '=', action: '=', color: 'success', className: 'col-span-2 !bg-green-600 text-white'},
  ];

  const advancedButtons = [
    { label: 'ln', action: 'ln(', color: 'secondary' },
    { label: 'x²', action: '^2', color: 'secondary' },
    { label: 'x³', action: '^3', color: 'secondary' },
    { label: 'xʸ', action: '^', color: 'secondary' },
    { label: '√', action: 'sqrt(', color: 'secondary' },
    { label: '∛', action: 'Math.cbrt(', color: 'secondary' },
    { label: 'π', action: Math.PI.toFixed(10), color: 'secondary' },
    { label: 'e', acton: Math.E.toFixed(10), color: 'secondary' },
    { label: '10ˣ', action: '10^', color: 'secondary' },
    { label: 'eˣ', action: 'exp(', color: 'secondary' },
    { label: '|x|', action: 'Math.abs(', color: 'secondary' },
    { label: 'n!', action: 'factorial(', color: 'secondary' },
  ];

  const handleButtonClick = (action: string) => {
    switch (action) {
      case 'clear':
        onClear();
        break;
      case 'backspace':
        onExpressionChange(expression.slice(0,1));
        break;
      case '=':
        onCalculate();
        break;
      default:
        onExpressionChange(expression + action);
    }
  };

  return (
    <Fragment>
      <div className="grid grid-cols-5 gap-3">
        {basicButtons.map((button, index) => (
          <CalculatorButton
            key={index}
            label={button.label}
            onClick={() => handleButtonClick(button.action)}
            color={button.color as any}
            className={button.className}
          />
        ))}
      </div>
      
      <div className="mt-4 grid grid-cols-6 gap-2">
        {advancedButtons.map((button, index) => (
          <CalculatorButton
            key={index}
            label={button.label}
            onClick={() => onExpressionChange(expression + button.action)}
            color={button.color as any}
            size="sm"
          />
        ))}
      </div>
    </Fragment>
  )
}