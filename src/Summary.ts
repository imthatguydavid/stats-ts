import { MatchData } from './MatchData';

export interface Analyzer {
  run(matches: MatchData[]): string;
}
export interface OutPutTarget {
  print(report: string): void;
}

export class Summary {
  constructor(
    public analyzer: Analyzer,
    public outputTarget: OutPutTarget
  ) {}

  buildAndPrintReport(data: MatchData[]): void {
    const report = this.analyzer.run(data);
    this.outputTarget.print(report);
  }
}
