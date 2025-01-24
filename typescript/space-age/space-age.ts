export default class SpaceAge {
    constructor(public seconds: number) {
    }

    private earthYear() {
        return this.seconds / 31557600;
    }

    private calculateFromEarthYearWithTwoDecimalDigits(divisor: number) {
        const year = this.earthYear() / divisor;
        return Math.round(year * 100) / 100
    }

    onEarth() {
        return this.calculateFromEarthYearWithTwoDecimalDigits(1);
    }

    onMercury() {
        return this.calculateFromEarthYearWithTwoDecimalDigits(0.2408467);
    }

    onVenus() {
        return this.calculateFromEarthYearWithTwoDecimalDigits(0.61519726);
    }

    onMars() {
        return this.calculateFromEarthYearWithTwoDecimalDigits(1.8808158);
    }

    onJupiter() {
        return this.calculateFromEarthYearWithTwoDecimalDigits(11.862615);

    }

    onSaturn() {
        return this.calculateFromEarthYearWithTwoDecimalDigits(29.447498);
    }

    onUranus() {
        return this.calculateFromEarthYearWithTwoDecimalDigits(84.016846);
    }

    onNeptune() {
        return this.calculateFromEarthYearWithTwoDecimalDigits(164.79132);
    }
}