function isLeapYear(year: number): boolean {
    const isDividableByFour = year % 4 === 0;
    const isDividableByHundret = year % 100 === 0;
    const isDividableByFouhhundret = year % 400 === 0;
    return isDividableByFour && (!isDividableByHundret || isDividableByFouhhundret);
}

export default isLeapYear