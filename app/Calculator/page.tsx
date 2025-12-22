'use client';

import { Fragment, useState, useEffect } from 'react';
import { Card, CardBody } from '@heroui/card';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';
import { Select, SelectItem } from '@heroui/select';
import { Divider } from '@heroui/divider';
import { History, Save, Share2, Trash2, Calculator as CalcIcon } from 'lucide-react';
import BasicCalculator from '@/components/BasicCalculator';
import ScientificCalculator from '@/components/ScientificCalculator';

interface CalculatorProps {
  activeTab: string;
}

interface CalculationHistory {
  id: string;
  expression: string;
  result: string;
  timestamp: Date;
  type: string;
}

export default function CalculatorComponent({ activeTab }: CalculatorProps): JSX.Element {

  const [expression, setExpression] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [memory, setMemory] = useState<number>(0);
  const [history, setHistory] = useState<CalculationHistory[]>([]);
  const [angleMode, setAngleMode] = useState<'deg' | 'rad'>('deg');
  const [isHistoryOpen, setIsHistoryOpen] = useState<boolean>(false);

  useEffect(() => {
    const savedHistory = localStorage.getItem('calculator-history');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  useEffect(() => {
    if (history.length > 0) {
      localStorage.setItem('calculator-history', JSON.stringify(history));
    }
  }, [history]);

  const handleCalculate = () => {
    if (!expression.trim()) return;

    try {
      let calculatedResult = '';

      switch (activeTab) {
        case 'basic':
          calculatedResult = evaluateBasicExpression(expression);
          break;

        case 'scientific':
          calculatedResult = evaluateScientificExpression(expression, angleMode);
          break;

        default:
          calculatedResult = evaluateBasicExpression(expression);
      }

      setResult(calculatedResult);

      const newHistoryItem: CalculationHistory = {
        id: Date.now().toString(),
        expression,
        result: calculatedResult,
        timestamp: new Date(),
        type: activeTab
      };

      setHistory(prev => [newHistoryItem, ...prev.slice(0, 49)]);
    } catch (error) {
      setResult('Error');
    }
  };

  const evaluateBasicExpression = (expr: string): string => {
    try {
      const safeExpr = expr
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/π/g, Math.PI.toString())
        .replace(/e/g, Math.E.toString())
        .replace(/\^/g, '**');

      const evalResult = Function(`"Use strict"; return (${safeExpr})`)();

      if (typeof evalResult === 'number') {
        if (!isFinite(evalResult)) {
          return evalResult > 0 ? '∞' : '-∞'
        }

        const rounded = Math.round(evalResult * 1e10) / 1e10;
        return rounded.toString();
      }
      return evalResult.toString()
    } catch {
      throw new Error('Invalid Expression');
    }
  };

  const evaluateScientificExpression = (expr: string, angleMode: 'deg' | 'rad'): string => {
    try {
      let processedExpr = expr
        .replace(/sin\(/g, angleMode === 'deg' ? 'Math.sin(Math.PI/180*' : 'Math.sin(')
        .replace(/cos\(/g, angleMode === 'deg' ? 'Math.cos(Math.PI/180*' : 'Math.cos(')
        .replace(/tan\(/g, angleMode === 'deg' ? 'Math.tan(Math.PI/180*' : 'Math.tan(')
        .replace(/ln\(/g, 'Math.log(')
        .replace(/log\(/g, 'Math.log10(')
        .replace(/sqrt\(/g, 'Math.sqrt(')
        .replace(/π/g, Math.PI.toString())
        .replace(/e/g, Math.E.toString())
        .replace(/\^/g, '**');

      const evalResult = Function(`"Use strict"; return (${processedExpr})`)();

      if (typeof evalResult === 'number') {
        if (!isFinite(evalResult)) {
          return evalResult > 0 ? '∞' : '-∞'
        }

        const rounded = Math.round(evalResult * 1e10) / 1e10;
        return rounded.toString();
      }
      return evalResult.toString();
    } catch {
      throw new Error('Invalid Expression');
    }
  };

  const handleClear = () => {
    setExpression('');
    setResult('');
  }

  const handleClearHistory = () => {
    setHistory([]);
    localStorage.removeItem('calculator-history');
  };

  const handleMemoryAdd = () => {
    const currentValue = parseFloat(result) || 0;
    setMemory(prev => prev + currentValue);
  };

  const handleMemorySubtract = () => {
    const currentValue = parseFloat(result) || 0;
    setMemory(prev => prev - currentValue);
  };

  const handleMemoryRecall = () => {
    setExpression(prev => prev + memory.toString());
  };

  const handleMemoryClear = () => {
    setMemory(0);
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCalculate();
    } else if (e.key === 'Escape') {
      handleClear();
    }
  };

  const renderActiveCalculator = () => {
    switch (activeTab) {
      case 'basic':
        return (
          <BasicCalculator
            expression={expression}
            onExpressionChange={setExpression}
            onCalculate={handleCalculate}
            onClear={handleClear}
            onKeyPress={handleKeyPress}
            memory={memory}
            onMemoryAdd={handleMemoryAdd}
            onMemorySubtract={handleMemorySubtract}
            onMemoryRecall={handleMemoryRecall}
            onMemoryClear={handleMemoryClear}
          />
        );
      case 'scientific':
        return (
          <ScientificCalculator
            expression={expression}
            onExpressionChange={setExpression}
            onCalculate={handleCalculate}
            onClear={handleClear}
            onKeyPress={handleKeyPress}
            memory={memory}
            onMemoryAdd={handleMemoryAdd}
            onMemorySubtract={handleMemorySubtract}
            onMemoryRecall={handleMemoryRecall}
            onMemoryClear={handleMemoryClear}
            angleMode={angleMode}
            onAngleModeChange={setAngleMode}
          />
        );
      default:
        return <BasicCalculator 
          expression={expression}
          onExpressionChange={setExpression}
          onCalculate={handleCalculate}
          onClear={handleClear}
          onKeyPress={handleKeyPress}
          memory={memory}
          onMemoryAdd={handleMemoryAdd}
          onMemorySubtract={handleMemorySubtract}
          onMemoryRecall={handleMemoryRecall}
          onMemoryClear={handleMemoryClear}
        />;
    }
  }
 
  return (
    <Fragment>
      <div className='calculator-container'>
        <div className='flex items-center justify-between p-4'>
          <div className='flex items-center space-x-4'>
            <div className='flex items-center space-x-2'>
              <CalcIcon className='h-6 w-6 text-danger'/>
              <span className='text-lg font-semibold'>Calculator</span>
            </div>
            
            {activeTab === 'scientific' && (
              <Select
                size='sm'
                className='w-32'
                selectedKeys={[angleMode]}
                onChange={(e) => setAngleMode(e.target.value as 'deg' | 'rad')}
              >
                <SelectItem key='deg'>Grados</SelectItem>
                <SelectItem key='rad'>Radianes</SelectItem>
              </Select>
            )}
          </div>

          <div className='flex items-center space-x-2'>
            <Button
              size='sm'
              variant='flat'
              startContent={<History className='h-4 w-4' />}
              onPress={() => setIsHistoryOpen(!isHistoryOpen)}
            >
              History ({history.length})
            </Button>
            <Button
              size='sm'
              variant='flat'
              startContent={<Save className='h-4 w-4' />}
            >
              Save
            </Button>
            <Button
              size='sm'
              variant='flat'
              startContent={<Share2 className='h-4 w-4' />}
            >
              Share
            </Button>
          </div>
        </div>

        <div className='p-6'>
          <div className='mb-4'>
            <div className='text-sm text-gray-500 dark:text-gray-400 mb-2'>Expression:</div>
            <Input
              value={expression}
              onChange={(e) => setExpression(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder='Enter a mathematical expression...'
              className='text-2xl font-mono'
              endContent={
                expression && (
                  <Button
                    size='sm'
                    variant='light'
                    onPress={handleClear}
                    className='min-w-0'
                  >
                    ✕
                  </Button>
                )
              }
            />
          </div>
          
          <div className='mb-4'>
            <div className='text-sm text-gray-500 dark:text-gray-400 mb-2'>Result:</div>
            <div className='text-4xl font-bold font-mono text-right p-3 bg-gray-100 dark:bg-gray-800 rounded-lg min-h-[80px] flex items-center justify-end overflow-x-auto'>
              {result || '0'}
            </div>
          </div>

          <div className='flex items-center justify-between mb-4 text-sm'>
            <div className='text-gray-600 dark:text-gray-400'>
              Memory: <span className='font-mono'>{memory}</span>
            </div>
            <div className='flex space-x-2'>
              <Button size='sm' variant='flat' onPress={handleMemoryAdd}>M+</Button>
              <Button size='sm' variant='flat' onPress={handleMemorySubtract}>M-</Button>
              <Button size='sm' variant='flat' onPress={handleMemoryRecall}>MR</Button>
              <Button size='sm' variant='flat' onPress={handleMemoryClear}>MC</Button>
            </div>
          </div>
        </div>
        <Divider />
        <div className='p-4'>
          {renderActiveCalculator()}
        </div>
        {isHistoryOpen && (
          <div className='absolute right-0 top-0 bottom-0 w-96 shadow-xl z-50 overflow-hidden'>
            <div className='p-4 flex justify-between items-center'>
              <h3 className='text-lg font-semibold'>Calculation History</h3>
              <div className='flex space-x-2'>
                <Button
                  size='sm'
                  variant='light'
                  onPress={handleClearHistory}
                  startContent={<Trash2 className='h-4 w-4' />}
                >
                  Clear
                </Button>
                <Button
                  size='sm'
                  variant='light'
                  onPress={() => setIsHistoryOpen(false)}
                >
                  Close
                </Button>
              </div>
            </div>
            
            <div className='overflow-y-auto h-[calc(100vh-120px)] p-4'>
              {history.length === 0 ? (
                <div className='text-center text-gray-500 dark:text-gray-400 py-8'>
                  There are no calculations in the history.
                </div>
              ) : (
                history.map((item) => (
                  <div
                    key={item.id}
                    className='mb-4 p-3 rounded-lg cursor-pointer'
                    onClick={() => {
                      setExpression(item.expression);
                      setResult(item.result);
                    }}
                  >
                    <div className='text-sm text-gray-500 dark:text-gray-400 mb-1'>
                      {item.timestamp.toLocaleString()} • {item.type === 'basic' ? 'Básica' : 'Científica'}
                    </div>
                    <div className='font-mono text-lg mb-1'>{item.expression}</div>
                    <div className='font-mono text-2xl font-bold text-primary'>= {item.result}</div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
}