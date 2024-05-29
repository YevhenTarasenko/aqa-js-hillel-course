function divide(numerator: number, denominator: number): number {
  if (denominator === 0) {
    throw new Error('Denominator cannot be zero.');
  }

  return numerator / denominator;
}

// Correct numbers
try {
  const result = divide(10, 2); // 5
  console.log('Result:', result);
} catch (error) {
  console.error(error.message);
} finally {
  console.log('Work completed.');
}

// denominator === 0
try {
  const result = divide(10, 0);
  console.log('Result:', result);
} catch (error) {
  console.error(error.message); // "Denominator cannot be zero."
} finally {
  console.log('Work completed.');
}
