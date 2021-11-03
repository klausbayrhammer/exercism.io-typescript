const raindropsToResponse = [
  {divisor: 3, response: 'Pling'},
  {divisor: 5, response: 'Plang'},
  {divisor: 7, response: 'Plong'},
]

export function convert(raindrops: number): string {
  const specialResponse = raindropsToResponse
    .filter(({divisor}) => raindrops % divisor === 0)
    .map(({response}) => response);
  
  if(specialResponse.length !== 0) {
    return specialResponse.join('');
  }
  return String(raindrops);
}
