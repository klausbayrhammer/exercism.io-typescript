export const square = (position: number): bigint => {
  if(position > 64) {
    throw new Error('position larger than 64 not allowed');
  }
  if(position === 1) {
    return 1n;
  }
  return 2n * square(position - 1);
}

export const total = (): bigint => {
  return square(64) * 2n -1n
}
