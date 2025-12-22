'use client';

import { Button, ButtonProps } from '@heroui/button';
import { motion } from 'framer-motion';

interface CalculatorButtonProps extends ButtonProps {
  label: string;
  onClick: () => void;
  size?: 'sm' | 'md' | 'lg';
}

export default function CalculatorButton({
  label,
  onClick,
  size = 'md',
  color = 'danger',
  className = '',
  ...props
}: CalculatorButtonProps): JSX.Element {
  const getButtonSize = () => {
    switch (size) {
      case 'sm': return 'h-12 text-sm';
      case 'lg': return 'h-18 text-lg';
      default: return 'h-12';
    }
  };

  return (
    <motion.div 
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <Button
        onPress={onClick}
        className={
          `
          calculator-button
          ${getButtonSize()}
          w-full
          font-bold
          rounded-xl
          shadow-lg
          ${className}
        `
        }
        color={color}
        { ...props }
      >
        { label }
      </Button>
    </motion.div>
  )
}