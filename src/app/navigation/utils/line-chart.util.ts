export class LineChartUtil {

  static mapToDataSeries(values: number[]) {
    const objects = [];
    values.forEach((value, index) => objects.push({name: index + 1, value}));
    return objects;
  }
}
