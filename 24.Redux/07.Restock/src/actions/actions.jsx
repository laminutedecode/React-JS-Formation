export function increment() {
  return {
      type: 'INCREMENT'
  };
}

export function decrement() {
  return {
      type: 'DECREMENT'
  };
}
// Al ensuite sur reducer
export const restock = () => ({
  type: 'RESTOCK'
});


