import { MatchData } from './MatchData';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reports/ConsoleReport';
import { AverageGoals } from './analyzers/AverageGoals';

export interface Analyzer {
  run(matches: MatchData[]): string;
}
export interface OutPutTarget {
  print(report: string): void;
}

export class Summary {
  static logWins(teamName: string) {
    return new Summary(new WinsAnalysis(teamName), new ConsoleReport());
  }
  static logAvgGoals(teamName: string) {
    return new Summary(new AverageGoals(teamName), new ConsoleReport());
  }

  constructor(
    public analyzer: Analyzer,
    public outputTarget: OutPutTarget
  ) {}

  buildAndPrintReport(data: MatchData[]): void {
    const report = this.analyzer.run(data);
    this.outputTarget.print(report);
  }
}
