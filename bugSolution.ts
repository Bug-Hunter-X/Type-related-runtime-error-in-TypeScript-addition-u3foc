function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  if (isNaN(numA) || isNaN(numB)) {
    throw new Error('Invalid input: Inputs must be numbers or number-like strings');
  }
  return numA + numB;
}

let result = addSafe("1", 2); // Safe version
let result2 = addSafe(1,2); // Safe version
let result3 = addSafe("a",2); // throws error
console.log(result, result2); 