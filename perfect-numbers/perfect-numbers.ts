enum PerfectNumberClassification {
  Perfect = 'perfect',
  Deficient = 'deficient',
  Abundant = 'abundant'
}

export function classify(numberToTest: number): PerfectNumberClassification {
  if(numberToTest <= 0) {
    throw new Error('Classification is only possible for natural numbers.')
  }

  const aliquotSum = Array(numberToTest)
      .fill(undefined)
      .reduce((sum, _, index) => {
        if(numberToTest % index === 0) {
          return sum + index;
        }
        return sum;
      }, 0)

  if(aliquotSum === numberToTest) {
    return PerfectNumberClassification.Perfect
  }
  if(aliquotSum <= numberToTest) {
    return PerfectNumberClassification.Deficient
  }
  return PerfectNumberClassification.Abundant
}
