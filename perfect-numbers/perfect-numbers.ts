enum PerfectNumberClassification {
  Perfect = 'perfect',
  Deficient = 'deficient',
  Abundant = 'abundant'
}

export function classify(numberToTest: number): PerfectNumberClassification {
  if(numberToTest <= 0) {
    throw new Error('Classification is only possible for natural numbers.')
  }

  const aliquotSum = [... new Array(numberToTest).keys()]
      .filter(index => numberToTest % index === 0)
      .reduce((a, b) => a + b, 0)

  if(aliquotSum === numberToTest) {
    return PerfectNumberClassification.Perfect;
  }
  if(aliquotSum <= numberToTest) {
    return PerfectNumberClassification.Deficient;
  }
  return PerfectNumberClassification.Abundant
}
