export class DataSeriesUtil {

  static mapToDataSeries(values: number[]): number[] {
    const objects = [];
    values.forEach((value, index) => objects.push({name: index + 1, value}));
    return objects;
  }

  static mapToCummulativeDataSeries(values: number[]): number[] {
    return this.mapToDataSeries(this.getAccumulatedList(values));
  }

  static getAccumulatedList(values: number[]): number[] {
    const accumulatedList = [];
    values.reduce(
      (previous, current, index) =>
        accumulatedList[index] = previous + current, 0);
    return accumulatedList;
  }

  static sumValues(values: number[]) {
    return values.reduce((a, b) => a + b, 0);
  }
}
