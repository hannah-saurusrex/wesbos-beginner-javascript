// Named export
export function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  if (item === not) {
    console.log('ahh! just used, look for the next');
    return randomItemFromArray(arr, not); // this is recursion.
  }
  return item;
}
