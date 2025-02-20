import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reports/ConsoleReport';
import { AverageGoals } from './analyzers/AverageGoals';

const csvReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvReader);
matchReader.load();
const matches = matchReader.matches;

const manUnitedWins = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);

const manUnitedAverageGoals = new Summary(
  new AverageGoals('Man United'),
  new ConsoleReport()
);

manUnitedWins.buildAndPrintReport(matches);

manUnitedAverageGoals.buildAndPrintReport(matches);
