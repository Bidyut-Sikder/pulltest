import { ReactLenis } from 'lenis/react';

const App = () => {
  const lenis = ReactLenis();

  // Use the Lenis instance for custom behaviors
  lenis.on('scroll', () => {
    console.log('Scrolling!');
  });

  return (
    <div>
      <h1>Smooth Scrolling Example</h1>
      <p>Content goes here...</p>
    </div>
  );
};

export default App;


console.log(knapsack(weights, values, capacity, weights.length)); // Output: 7

function fibonacci(n) {
    // Base cases
    if (n === 0) return 0;
    if (n === 1) return 1;

    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // Output: 8




function gameChanger(){
    console.log('bidyut from game changer')
}


function factorial(n) {
    // Base case
    if (n <= 1) {
        return 1;
    }

    // Recursive case
    return n * factorial(n - 1);
}


