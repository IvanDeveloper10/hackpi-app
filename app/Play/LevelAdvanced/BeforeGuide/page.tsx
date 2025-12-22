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
          <h1 className='text-5xl text-po font-bold text-center my-10'>1. Advanced Calculus</h1>
          <div className='flex justify-around'>
            <p className='text-po w-96'>Calculus is the mathematical study of continuous change, consisting of differential and integral calculus. It provides tools for analyzing rates of change, optimization problems, and accumulation of quantities in mathematics, physics, engineering, and economics.</p>
            <Image src={'/arithmetic-image.svg'} alt={'Calculus Image'} width={300} height={300} />
          </div>
        </main>
      </section>
      <Divider />
      <section className='pb-10'>
        <main className='flex flex-col px-20'>
          <h1 className='text-5xl text-po font-bold text-center my-10'>2. Limits and Continuity</h1>
          <h2 className='text-4xl text-po font-bold'>2.1 Limit Concepts</h2>
          <ol className='text-po'>
            <li>Definition: Behavior of f(x) as x approaches a value.</li>
            <li>One-sided limits: limₓ→a⁻ f(x) and limₓ→a⁺ f(x).</li>
            <li>Infinite limits and limits at infinity.</li>
          </ol>
          <h2 className='text-4xl text-po font-bold mt-10'>2.2 Continuity</h2>
          <ol className='text-po'>
            <li>Definition: limₓ→a f(x) = f(a).</li>
            <li>Types: Point, interval, uniform continuity.</li>
            <li>Discontinuities: Removable, jump, infinite.</li>
          </ol>
          <h2 className='text-4xl text-po font-bold mt-10'>2.3 Limit Theorems</h2>
          <ol className='text-po'>
            <li>Squeeze Theorem.</li>
            <li>Intermediate Value Theorem.</li>
            <li>Limits of composite functions.</li>
          </ol>
        </main>
      </section>
      <Divider />
      <section className='pb-10'>
        <main className='flex flex-col px-20'>
          <h1 className='text-5xl text-po font-bold text-center my-10'>3. Differential Calculus</h1>
          <h2 className='text-4xl text-po font-bold mt-10'>3.1 Derivatives</h2>
          <ol className='text-po'>
            <li>Definition: f'(x) = limₕ→₀ [f(x+h) - f(x)]/h.</li>
            <li>Geometric interpretation: Slope of tangent line.</li>
            <li>Physical interpretation: Instantaneous rate of change.</li>
          </ol>

          <h2 className='text-4xl text-po font-bold mt-10'>3.2 Differentiation Rules</h2>
          <ol className='text-po'>
            <li>Power rule: d/dx[xⁿ] = nxⁿ⁻¹.</li>
            <li>Product rule: (fg)' = f'g + fg'.</li>
            <li>Quotient rule: (f/g)' = (f'g - fg')/g².</li>
            <li>Chain rule: (f∘g)'(x) = f'(g(x))g'(x).</li>
          </ol>

          <h2 className='text-4xl text-po font-bold mt-10'>3.3 Applications</h2>
          <ol className='text-po'>
            <li>Related rates problems.</li>
            <li>Optimization: Finding maxima/minima.</li>
            <li>Curve sketching and analysis.</li>
          </ol>
        </main>
      </section>
      <Divider />
      <section className='pb-10'>
        <main className='flex flex-col px-20'>
          <h1 className='text-5xl text-po font-bold text-center my-10'>4. Integral Calculus</h1>
          <h2 className='text-4xl text-po font-bold mt-10'>4.1 Indefinite Integrals</h2>
          <ol className='text-po'>
            <li>Antiderivatives: ∫f(x)dx = F(x) + C.</li>
            <li>Basic integration formulas.</li>
            <li>Substitution method.</li>
          </ol>
          <h2 className='text-4xl text-po font-bold mt-10'>4.2 Definite Integrals</h2>
          <ol className='text-po'>
            <li>Riemann sums and definition.</li>
            <li>Fundamental Theorem of Calculus.</li>
            <li>Properties of definite integrals.</li>
          </ol>
          <h2 className='text-4xl text-po font-bold mt-10'>4.3 Integration Techniques</h2>
          <ol className='text-po'>
            <li>Integration by parts.</li>
            <li>Trigonometric substitution.</li>
            <li>Partial fractions decomposition.</li>
          </ol>
        </main>
      </section>
      <Divider />
      <section className='pb-10'>
        <main className='flex flex-col px-20'>
          <h1 className='text-5xl text-po text-center font-bold my-10'>5. Multivariable Calculus</h1>
          <h2 className='text-4xl text-po font-bold mt-10'>5.1 Partial Derivatives</h2>
          <ol className='text-po'>
            <li>Definition: ∂f/∂x = limₕ→₀ [f(x+h,y) - f(x,y)]/h.</li>
            <li>Geometric interpretation: Slope in coordinate directions.</li>
            <li>Higher-order partial derivatives.</li>
          </ol>
          <h2 className='text-4xl text-po font-bold mt-10'>5.2 Multiple Integrals</h2>
          <ol className='text-po'>
            <li>Double integrals: ∬ᵣ f(x,y) dA.</li>
            <li>Triple integrals: ∭ᵥ f(x,y,z) dV.</li>
            <li>Change of variables (Jacobian).</li>
          </ol>
          <h2 className='text-4xl text-po font-bold mt-10'>5.3 Vector Calculus</h2>
          <ol className='text-po'>
            <li>Gradient: ∇f = (∂f/∂x, ∂f/∂y, ∂f/∂z).</li>
            <li>Divergence and curl.</li>
            <li>Line and surface integrals.</li>
          </ol>
        </main>
      </section>
      <Divider />
      <section className='pb-10'>
        <main className='flex flex-col px-20'>
          <h1 className='text-5xl text-po text-center font-bold my-10'>6. Linear Algebra</h1>
          <h2 className='text-4xl text-po font-bold'>6.1 Matrices and Vectors</h2>
          <ol className='text-po'>
            <li>Matrix operations: Addition, multiplication, transpose.</li>
            <li>Determinants and properties.</li>
            <li>Inverse matrices and conditions for invertibility.</li>
          </ol>
          <h2 className='text-4xl text-po font-bold mt-10'>6.2 Systems of Linear Equations</h2>
          <ol className='text-po'>
            <li>Gaussian elimination.</li>
            <li>Row echelon and reduced row echelon forms.</li>
            <li>Solution sets: Unique, infinite, or no solution.</li>
          </ol>
          <h2 className='text-4xl text-po font-bold mt-10'>6.3 Eigenvalues and Eigenvectors</h2>
          <ol className='text-po'>
            <li>Definition: Av = λv.</li>
            <li>Characteristic polynomial.</li>
            <li>Diagonalization of matrices.</li>
          </ol>
        </main>
      </section>
      <Divider />
      <section className='pb-10'>
        <main className='flex flex-col px-20'>
          <h1 className='text-po text-center font-bold text-5xl my-10'>7. Differential Equations</h1>
          <ol className='text-po'>
            <li><strong>Ordinary Differential Equations (ODEs):</strong> Involve functions of one variable.</li>
            <li><strong>Partial Differential Equations (PDEs):</strong> Involve functions of multiple variables.</li>
            <li><strong>Order:</strong> Highest derivative in equation.</li>
            <li><strong>Linearity:</strong> Linear vs. nonlinear equations.</li>
          </ol>
          <h2 className='text-4xl text-po font-bold mt-10'>Solution Methods:</h2>
          <ol className='text-po'>
            <li>Separation of variables.</li>
            <li>Integrating factors for first-order linear ODEs.</li>
            <li>Characteristic equation for constant coefficient ODEs.</li>
          </ol>
        </main>
      </section>
      <Divider />
      <section className='pb-10'>
        <main className='flex flex-col px-20'>
          <h1 className='text-po text-center font-bold text-5xl my-10'>8. Complex Analysis</h1>
          <h2 className='text-4xl text-po font-bold'>8.1 Complex Numbers</h2>
          <ol className='text-po'>
            <li>Form: z = a + bi, where i² = -1.</li>
            <li>Complex conjugate: z̄ = a - bi.</li>
            <li>Modulus and argument: |z| = √(a²+b²), arg(z) = θ.</li>
          </ol>
          <h2 className='text-4xl text-po font-bold mt-10'>8.2 Complex Functions</h2>
          <ol className='text-po'>
            <li>Analytic functions and Cauchy-Riemann equations.</li>
            <li>Complex differentiation and integration.</li>
            <li>Power series representations.</li>
          </ol>
          <h2 className='text-4xl text-po font-bold mt-10'>8.3 Important Theorems</h2>
          <ol className='text-po'>
            <li>Cauchy's Integral Theorem.</li>
            <li>Cauchy's Integral Formula.</li>
            <li>Residue Theorem.</li>
          </ol>
        </main>
      </section>
      <Divider />
      <section className='pb-10'>
        <main className='flex flex-col px-20'>
          <h1 className='text-po text-center font-bold text-5xl my-10'>9. Real Analysis</h1>
          <h2 className='text-4xl text-po font-bold'>9.1 Sequences and Series</h2>
          <ol className='text-po'>
            <li>Convergence tests: Ratio, root, comparison.</li>
            <li>Absolute and conditional convergence.</li>
            <li>Power series and radius of convergence.</li>
          </ol>
          <h2 className='text-4xl text-po font-bold mt-10'>9.2 Metric Spaces</h2>
          <ol className='text-po'>
            <li>Definition: Set with distance function.</li>
            <li>Open and closed sets.</li>
            <li>Compactness and connectedness.</li>
          </ol>
          <h2 className='text-4xl text-po font-bold mt-10'>9.3 Topological Concepts</h2>
          <ol className='text-po'>
            <li>Continuity in metric spaces.</li>
            <li>Complete metric spaces.</li>
            <li>Banach Fixed-Point Theorem.</li>
          </ol>
        </main>
      </section>
      <Divider />
      <section className='pb-10'>
        <main className='flex flex-col px-20'>
          <h1 className='text-po text-center font-bold text-5xl my-10'>10. Abstract Algebra</h1>
          <ol className='text-po'>
            <li><strong>Groups:</strong> Set with binary operation satisfying closure, associativity, identity, inverses.</li>
            <li><strong>Rings:</strong> Set with two operations (addition and multiplication).</li>
            <li><strong>Fields:</strong> Commutative ring where every nonzero element has multiplicative inverse.</li>
            <li><strong>Vector Spaces:</strong> Set of vectors with addition and scalar multiplication.</li>
          </ol>
          <h2 className='text-4xl text-po font-bold mt-10'>Key Concepts:</h2>
          <ol className='text-po'>
            <li>Homomorphisms and isomorphisms.</li>
            <li>Subgroups, normal subgroups, quotient groups.</li>
            <li>Group actions and symmetry.</li>
          </ol>
        </main>
      </section>
      <Divider />
      <section className='pb-10'>
        <main className='flex flex-col px-20'>
          <h1 className='text-po text-center font-bold text-5xl my-10'>11. Advanced Topics</h1>
          <ul className='text-po'>
            <li>1. Numerical Analysis: Approximation methods, error analysis.</li>
            <li>2. Probability Theory: Random variables, distributions, limit theorems.</li>
            <li>3. Mathematical Statistics: Estimation, hypothesis testing, regression.</li>
            <li>4. Functional Analysis: Banach spaces, Hilbert spaces, operators.</li>
            <li>5. Topology: Point-set topology, algebraic topology.</li>
          </ul>
          <h2 className='text-po'>These areas represent the frontier of modern mathematical research and applications.</h2>
        </main>
      </section>
      <section className='w-full py-20'>
        <div className='w-full flex justify-around'>
          <Link href={'/Play/LevelAdvanced'} className='w-96'>
            <Button className='w-96 text-po' variant='shadow' color='danger'>BACK</Button>
          </Link>
          <Link href={'/Play/LevelAdvanced/Quiz'} className='w-96'>
            <Button className='text-po w-96' variant='shadow' color='danger'>QUIZ</Button>
          </Link>
        </div>
      </section>
    </Fragment>
  );
}