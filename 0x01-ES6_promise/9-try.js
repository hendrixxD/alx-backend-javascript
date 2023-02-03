// Write a function named guardrail that will
// accept one argument mathFunction (Function)
//
// When the mathFunction function is executed,
// the value returned by the function should be appended to the queue.
// If this function throws an error,
// the error message should be appended to the queue.
// In every case, the message Guardrail was
// processed should be added to the queue

export default function guardrail(mathFunction) {
  const queue = [];
  const msg = 'Guardrail was processed';
  try {
    queue.push(mathFunction(), msg);
  } catch (err) {
    queue.push(`Error: ${err.message}`, msg);
  }
  return queue;
}
