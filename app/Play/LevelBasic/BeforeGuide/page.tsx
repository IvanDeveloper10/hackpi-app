import { Fragment } from 'react';
import Image from 'next/image';
import { Divider } from '@heroui/divider';
import Link from 'next/link';
import { Button } from '@heroui/button';

export default function BeforeGuide(): JSX.Element {
  return (
    <Fragment>
      <section className='w-full h-screen'>
        <main className='flex flex-col px-20'>
          <h1 className='text-5xl text-po font-bold text-center my-10'>1. What Is Fundamental Arithmetic?</h1>
          <div className='flex justify-around'>
            <p className='text-po w-96'>Fundamental Arithmetic is the branch of mathematics that studies numbers, their propertiesm, and the basic operations used to manipulate them. It is the foundation of all higher mathematics and is essential for everyday problem-solving, science, engineering, economics, and programming.</p>
            <Image src={'/arithmetic-image.svg'} alt={''} width={300} height={300} />
          </div>
        </main>
      </section>
      <Divider />
      <section className='pb-10'>
        <main className='flex flex-col px-20'>
          <h1 className='text-5xl text-po font-bold text-center my-10'>2. Number Systems.</h1>
          <h2 className='text-4xl text-po font-bold'>2.1 Natural Numbers (N).</h2>
          <ol className='text-po'>
            <li>Definition: Counting numbers.</li>
            <li>Set: {`1, 2, 3, 4, 5, ...`}</li>
            <li>Uses: Counting objects, ordering.</li>
          </ol>
          <h2 className='text-4xl text-po font-bold mt-10'>2.2 Whole Numbers.</h2>
          <ol className='text-po'>
            <li>Definition: Natural numbers plus zero.</li>
            <li>Set: {`0, 1, 2, 3, 4, 5, ...`}.</li>
          </ol>
          <h2 className='text-4xl text-po font-bold mt-10'>2.3 Integers (Z).</h2>
          <ol className='text-po'>
            <li>Definition: Positive numbers, negative numbers, and zero.</li>
            <li>Set: {`..., -3, -2, -1, 0, 1, 2, 3, ...`}.</li>
          </ol>
          <h2 className='text-4xl text-po font-bold mt-10'>2.4 Rational Numbers (Q).</h2>
          <ol className='text-po'>
            <li>Definition: Numbers that can be written as a fraction.</li>
            <li>Form: a/b, where b != 0.</li>
            <li>Examples: 1/2, -3/4, 5, 0.75.</li>
          </ol>
          <h2 className='text-4xl text-po font-bold mt-10'>2.5 Irrational Numbers</h2>
          <ol className='text-po'>
            <li>Definition: Number that cannot be written as fractions.</li>
            <li>Decimal form is infinite and non-repeating.</li>
            <li>Examples: √2, π, e.</li>
          </ol>
          <h2 className='text-4xl text-po font-bold mt-10'>2.6 Real Numbers (R)</h2>
          <ol>
            <li>Includes both rational and irrational numbers.</li>
            <li>Represents all numbers on the number line.</li>
          </ol>
        </main>
      </section>
      <Divider />
      <section className='pb-10'>
        <main className='flex flex-col px-20'>
          <h1 className='text-5xl text-po font-bold text-center my-10'>3. Fundamental Arithmetic Operations</h1>
          <h2 className='text-4xl text-po font-bold mt-10'>3.1 Addition (+)</h2>
          <ol className='text-po'>
            <li>Combines quantities.</li>
            <li>Example: 7 + 5 = 12.</li>
            <h3 className='font-bold'>Properties:</h3>
            <li>- Commutative: a + b = b + a.</li>
            <li>- Associative: (a + b) + c = a + (b + c).</li>
          </ol>

          <h2 className='text-4xl text-po font-bold mt-10'>3.2 Subtraction (-)</h2>
          <ol className='text-po'>
            <li>Finds the difference beteen numbers.</li>
            <li>Example: 10 - 4 = 6.</li>
            <li>Not cummutative and not associative.</li>
          </ol>

          <h2 className='text-4xl text-po font-bold mt-10'>3.3 Multiplication (x)</h2>
          <ol className='text-po'>
            <li>Repeated addition.</li>
            <li>Example: 4 x 3 = 12.</li>
            <h3 className='font-bold'>Properties:</h3>
            <li>- Commutative.</li>
            <li>- Associative.</li>
            <li>- Distributive: a(b + c) = ab + ac.</li>
          </ol>

          <h2 className='text-4xl text-po font-bold mt-10'>3.4 Division (÷)</h2>
          <ol className='text-po'>
            <li>Splits a number into equal parts.</li>
            <li>Example: 12 ÷ 3 = 4.</li>
            <li>Division by zero is undefined.</li>
          </ol>
        </main>
      </section>
      <Divider />
      <section className='pb-10'>
        <main className='flex flex-col px-20'>
          <h1 className='text-5xl text-po font-bold text-center my-10'>4. Order Of Operations (PEMDAS).</h1>
          <h2 className='text-4xl text-po font-bold mt-10'></h2>
          <h3 className='text-po font-bold'>To avoid ambiguity, operations are performed in this order:</h3>
          <ul className='text-po'>
            <li>1. Parentheses.</li>
            <li>2. Exponents.</li>
            <li>3. Multiplication and Division (left to right).</li>
            <li>4. Addition and subtraction (left to right).</li>
          </ul>
          <h3 className='text-po font-bold'>Example:</h3>
          <span className='text-po'>8 + 2 x 5 = 18 (Not 50).</span> 
        </main>
      </section>
      <Divider />
      <section className='pb-10'>
        <main className='flex flex-col px-20'>
          <h1 className='text-5xl text-po text-center font-bold my-10'>5. Prime And Composite Numbers.</h1>
          <h2 className='text-4xl text-po font-bold mt-10'>Prime Numbers:</h2>
          <ol className='text-po'>
            <li>Have exactly two divisors: 1 and itself.</li>
            <li>Examples: 2, 3, 5, 7, 11.</li>
          </ol>
          <h2 className='text-4xl text-po font-bold mt-10'>Composite Numbers:</h2>
          <ol className='text-po'>
            <li>Have more than two divisors.</li>
            <li>Examples: 4, 6, 8, 9, 12.</li>
          </ol>
        </main>
      </section>
      <Divider />
      <section className='pb-10'>
        <main className='flex flex-col px-20'>
          <h1 className='text-5xl text-po text-center font-bold my-10'>6. Factors And Multiples.</h1>
          <ol className='text-po'>
            <li><strong>Factor:</strong> A numbebr that divides another exactly.</li>
            <li><strong>Multiple:</strong> A number obtained by multiplying.</li>
          </ol>
          <h2 className='text-po font-bold'>Example:</h2>
          <ol>
            <li>Factors of 12: 1, 2, 3, 4, 5, 6, 12.</li>
            <li>Multiples of 4: 4, 8, 12, 16.</li>
          </ol>
        </main>
      </section>
      <Divider />
      <section className='pb-10'>
        <main className='flex flex-col px-20'>
          <h1 className='text-po text-center font-bold text-5xl my-10'>7. Greatest Common Divisor (GCD).</h1>
          <ol className='text-po'>
            <li>The largest number that divides two or more numbers.</li>
            <li>Example: GCD(12, 18) = 6.</li>
          </ol>
        </main>
      </section>
      <Divider />
      <section className='pb-10'>
        <main className='flex flex-col px-20'>
          <h1 className='text-po text-center font-bold text-5xl my-10'>8. Least Common Multiple (LCM).</h1>
          <ol className='text-po'>
            <li>The smallest number that is a multiple of two or more numbers.</li>
            <li><strong>Example:</strong> LCM(4, 6) = 12.</li>
          </ol>
        </main>
      </section>
      <Divider />
      <section className='pb-10'>
        <main className='flex flex-col px-20'>
          <h1 className='text-po text-center font-bold text-5xl my-10'>9. Fractions</h1>
          <h2 className='text-4xl text-po font-bold'>9.1 Types Of Fractions.</h2>
          <ol className='text-po'>
            <li>Proper: 3/5.</li>
            <li>Improper: 7/4.</li>
            <li>Mixed: 1 3/4.</li>
          </ol>
          <h2 className='text-4xl text-po font-bold mt-10'>9.2 Operations With Fractions.</h2>
          <ol className='text-po'>
            <li>Addition and subtraction require common denominators.</li>
            <li><strong>Multiplication:</strong> Multiply numerators and denominators.</li>
            <li><strong>Division:</strong> Multiply by the reciprocal.</li>
          </ol>
        </main>
      </section>
      <Divider />
      <section className='pb-10'>
        <main className='flex flex-col px-20'>
          <h1 className='text-po text-center font-bold text-5xl my-10'>10. Decimals And Percentages.</h1>
          <ol className='text-po'>
            <li>Decimal: 0.25.</li>
            <li>Percentage: 25%.</li>
            <li><strong>Conversion:</strong></li>
            <li>  Decimal: Percentage: Multiply by 100.</li>
            <li>  Percentage: Decimal: Divide by 100.</li>
          </ol>
        </main>
      </section>
      <Divider />
      <section className='pb-10'>
        <main className='flex flex-col px-20'>
          <h1 className='text-po text-center font-bold text-5xl my-10'>11. Basic Arithmetic Laws.</h1>
          <ul className='text-po'>
            <li>1. Identity Law.</li>
            <li>2. Inverse Law.</li>
            <li>3. Commutative Law.</li>
            <li>4. Associative Law.</li>
            <li>5. Distributive Law.</li>
          </ul>
          <h2>These laws ensure consistency in calculations.</h2>
        </main>
      </section>
      <section className='w-full py-20'>
        <div className='w-full flex justify-around'>
          <Link href={'/Play/LevelBasic'} className='w-96'>
            <Button className='w-96 text-po' variant='shadow' color='danger'>BACK</Button>
          </Link>
          <Link href={'/Play/LevelBasic/Quiz'} className='w-96'>
            <Button className='text-po w-96' variant='shadow' color='danger'>QUIZ</Button>
          </Link>
        </div>
      </section>
    </Fragment>
  );
}