import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import { MatchData } from './MatchData';
import { CsvFileReader } from './CsvFileReader';

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        this.parseNumber(row[3]),
        this.parseNumber(row[4]),
        row[5] as MatchResult,
        row[6],
      ];
    });
  }

  private parseNumber(value: string): number {
    const number = parseInt(value);
    if (isNaN(number)) {
      return 0;
    }
    return number;
  }
}
