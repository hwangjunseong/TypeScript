import fs from 'fs';
//MatchData처럼 하드코딩하는 대신 제너릭 사용
//T는 제너릭 형식에 대한 참조임
export abstract class CsvFileReader<T> {
  // data: string[][] = [];
  // data:  MatchData[] = [];
  data: T[] = [];

  constructor(public filename: string) {}
  abstract mapRow(row: string[]): T;
  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
        flag: 'r',
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.mapRow);
  }
}
