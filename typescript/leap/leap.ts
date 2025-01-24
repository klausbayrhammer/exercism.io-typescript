function isLeapYear(year: number): boolean {
    const isDividableBy = (divisor: number) => year % divisor === 0;
    return isDividableBy(4) && (!isDividableBy(100) || isDividableBy(400));
}

export default isLeapYear