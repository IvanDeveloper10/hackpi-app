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
          <h1 className='text-5xl text-po font-bold text-center my-10'>1. Algebra Fundamentals</h1>
          <div className='flex justify-around'>
            <p className='text-po w-96'>Algebra is the branch of mathematics that uses symbols and letters to represent numbers and quantities in formulas and equations. It provides tools for solving problems involving unknown values and modeling real-world situations.</p>
            <Image src={'/arithmetic-image.svg'} alt={'Algebra Image'} width={300} height={300} />
          </div>
        </main>
      </section>
      <Divider />
      <section className='pb-10'>
        <main className='flex flex-col px-20'>
          <h1 className='text-5xl text-po font-bold text-center my-10'>2. Algebraic Expressions</h1>
          <h2 className='text-4xl text-po font-bold'>2.1 Terms and Components</h2>
          <ol className='text-po'>
            <li>Variable: Symbol representing unknown value (x, y, z).</li>
            <li>Coefficient: Number multiplying the variable.</li>
            <li>Constant: Fixed numerical value.</li>
          </ol>
          <h2 className='text-4xl text-po font-bold mt-10'>2.2 Polynomials</h2>
          <ol className='text-po'>
            <li>Monomial: Single term (5x²).</li>
            <li>Binomial: Two terms (3x + 4).</li>
            <li>Trinomial: Three terms (x² + 2x + 1).</li>
          </ol>
          <h2 className='text-4xl text-po font-bold mt-10'>2.3 Like Terms</h2>
          <ol className='text-po'>
            <li>Terms with same variables and exponents.</li>
            <li>Can be combined: 3x + 5x = 8x.</li>
          </ol>
          <h2 className='text-4xl text-po font-bold mt-10'>2.4 Degree of Polynomial</h2>
          <ol className='text-po'>
            <li>Highest exponent in the polynomial.</li>
            <li>Example: x³ + 2x + 5 has degree 3.</li>
          </ol>
        </main>
      </section>
      <Divider />
      <section className='pb-10'>
        <main className='flex flex-col px-20'>
          <h1 className='text-5xl text-po font-bold text-center my-10'>3. Linear Equations</h1>
          <h2 className='text-4xl text-po font-bold mt-10'>3.1 One-Variable Equations</h2>
          <ol className='text-po'>
            <li>Form: ax + b = 0.</li>
            <li>Solution: Isolate the variable.</li>
            <li>Example: 2x + 4 = 10 → x = 3.</li>
          </ol>

          <h2 className='text-4xl text-po font-bold mt-10'>3.2 Two-Variable Equations</h2>
          <ol className='text-po'>
            <li>Form: y = mx + b (slope-intercept).</li>
            <li>Slope (m): Rate of change.</li>
            <li>Y-intercept (b): Where line crosses y-axis.</li>
          </ol>

          <h2 className='text-4xl text-po font-bold mt-10'>3.3 Systems of Equations</h2>
          <ol className='text-po'>
            <li>Two or more equations with same variables.</li>
            <li>Methods: Substitution, elimination, graphing.</li>
            <li>Solution: Point(s) where equations intersect.</li>
          </ol>
        </main>
      </section>
      <Divider />
      <section className='pb-10'>
        <main className='flex flex-col px-20'>
          <h1 className='text-5xl text-po font-bold text-center my-10'>4. Inequalities</h1>
          <h2 className='text-4xl text-po font-bold mt-10'>4.1 Solving Inequalities</h2>
          <ol className='text-po'>
            <li>Similar to equations but with inequality signs.</li>
            <li>Flip sign when multiplying/dividing by negative.</li>
            <li>Example: -2x &lt; 6 → x &gt; -3.</li>
          </ol>
          <h2 className='text-4xl text-po font-bold mt-10'>4.2 Graphing Inequalities</h2>
          <ol className='text-po'>
            <li>Solid line for ≤ or ≥.</li>
            <li>Dashed line for &lt; or &gt;.</li>
            <li>Shade region that satisfies inequality.</li>
          </ol>
        </main>
      </section>
      <Divider />
      <section className='pb-10'>
        <main className='flex flex-col px-20'>
          <h1 className='text-5xl text-po text-center font-bold my-10'>5. Quadratic Equations</h1>
          <h2 className='text-4xl text-po font-bold mt-10'>Standard Form:</h2>
          <ol className='text-po'>
            <li>ax² + bx + c = 0, where a ≠ 0.</li>
            <li>Parabola: Graph of quadratic function.</li>
          </ol>
          <h2 className='text-4xl text-po font-bold mt-10'>Solving Methods:</h2>
          <ol className='text-po'>
            <li>Factoring.</li>
            <li>Quadratic Formula: x = [-b ± √(b² - 4ac)] / 2a.</li>
            <li>Completing the square.</li>
          </ol>
        </main>
      </section>
      <Divider />
      <section className='pb-10'>
        <main className='flex flex-col px-20'>
          <h1 className='text-5xl text-po text-center font-bold my-10'>6. Exponents and Radicals</h1>
          <h2 className='text-4xl text-po font-bold'>6.1 Exponent Rules</h2>
          <ol className='text-po'>
            <li>Product: a^m × a^n = a^(m+n).</li>
            <li>Quotient: a^m ÷ a^n = a^(m-n).</li>
            <li>Power: (a^m)^n = a^(m×n).</li>
          </ol>
          <h2 className='text-4xl text-po font-bold mt-10'>6.2 Radicals and Roots</h2>
          <ol className='text-po'>
            <li>Square root: √x (radical symbol).</li>
            <li>Rationalizing denominators.</li>
            <li>Converting between radicals and exponents.</li>
          </ol>
        </main>
      </section>
      <Divider />
      <section className='pb-10'>
        <main className='flex flex-col px-20'>
          <h1 className='text-po text-center font-bold text-5xl my-10'>7. Functions</h1>
          <ol className='text-po'>
            <li><strong>Definition:</strong> Relation where each input has one output.</li>
            <li><strong>Notation:</strong> f(x) read as "f of x".</li>
            <li><strong>Domain:</strong> Set of possible inputs.</li>
            <li><strong>Range:</strong> Set of possible outputs.</li>
          </ol>
          <h2 className='text-4xl text-po font-bold mt-10'>Function Types:</h2>
          <ol className='text-po'>
            <li>Linear: f(x) = mx + b.</li>
            <li>Quadratic: f(x) = ax² + bx + c.</li>
            <li>Exponential: f(x) = a·b^x.</li>
          </ol>
        </main>
      </section>
      <Divider />
      <section className='pb-10'>
        <main className='flex flex-col px-20'>
          <h1 className='text-po text-center font-bold text-5xl my-10'>8. Coordinate Geometry</h1>
          <h2 className='text-4xl text-po font-bold'>8.1 Distance Formula</h2>
          <ol className='text-po'>
            <li>d = √[(x₂ - x₁)² + (y₂ - y₁)²].</li>
            <li>Distance between two points.</li>
          </ol>
          <h2 className='text-4xl text-po font-bold mt-10'>8.2 Midpoint Formula</h2>
          <ol className='text-po'>
            <li>M = [(x₁ + x₂)/2, (y₁ + y₂)/2].</li>
            <li>Point exactly halfway between two points.</li>
          </ol>
          <h2 className='text-4xl text-po font-bold mt-10'>8.3 Slope Formula</h2>
          <ol className='text-po'>
            <li>m = (y₂ - y₁)/(x₂ - x₁).</li>
            <li>Measures steepness of a line.</li>
          </ol>
        </main>
      </section>
      <Divider />
      <section className='pb-10'>
        <main className='flex flex-col px-20'>
          <h1 className='text-po text-center font-bold text-5xl my-10'>9. Ratios and Proportions</h1>
          <h2 className='text-4xl text-po font-bold'>9.1 Ratios</h2>
          <ol className='text-po'>
            <li>Comparison of two quantities.</li>
            <li>Example: 3:4 or 3/4.</li>
          </ol>
          <h2 className='text-4xl text-po font-bold mt-10'>9.2 Proportions</h2>
          <ol className='text-po'>
            <li>Equation stating two ratios are equal.</li>
            <li>Cross-multiplication to solve.</li>
            <li>Example: a/b = c/d → ad = bc.</li>
          </ol>
          <h2 className='text-4xl text-po font-bold mt-10'>9.3 Applications</h2>
          <ol className='text-po'>
            <li>Scale drawings and maps.</li>
            <li>Similar triangles.</li>
            <li>Unit conversions.</li>
          </ol>
        </main>
      </section>
      <Divider />
      <section className='pb-10'>
        <main className='flex flex-col px-20'>
          <h1 className='text-po text-center font-bold text-5xl my-10'>10. Basic Statistics</h1>
          <ol className='text-po'>
            <li><strong>Mean:</strong> Average of data set.</li>
            <li><strong>Median:</strong> Middle value when ordered.</li>
            <li><strong>Mode:</strong> Most frequent value.</li>
            <li><strong>Range:</strong> Difference between max and min.</li>
          </ol>
          <h2 className='text-4xl text-po font-bold mt-10'>Data Representation:</h2>
          <ol className='text-po'>
            <li>Bar graphs and histograms.</li>
            <li>Line graphs.</li>
            <li>Circle graphs (pie charts).</li>
          </ol>
        </main>
      </section>
      <Divider />
      <section className='pb-10'>
        <main className='flex flex-col px-20'>
          <h1 className='text-po text-center font-bold text-5xl my-10'>11. Geometry Basics</h1>
          <ul className='text-po'>
            <li>1. Angles: Acute, obtuse, right, straight.</li>
            <li>2. Triangles: Types by sides and angles.</li>
            <li>3. Pythagorean Theorem: a² + b² = c².</li>
            <li>4. Perimeter and area formulas.</li>
            <li>5. Volume of basic solids.</li>
          </ul>
          <h2 className='text-po'>Foundation for spatial reasoning and measurement.</h2>
        </main>
      </section>
      <section className='w-full py-20'>
        <div className='w-full flex justify-around'>
          <Link href={'/Play/LevelIntermediate'} className='w-96'>
            <Button className='w-96 text-po' variant='shadow' color='danger'>BACK</Button>
          </Link>
          <Link href={'/Play/LevelIntermediate/Quiz'} className='w-96'>
            <Button className='text-po w-96' variant='shadow' color='danger'>QUIZ</Button>
          </Link>
        </div>
      </section>
    </Fragment>
  );
}