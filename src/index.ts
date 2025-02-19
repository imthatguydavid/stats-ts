import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reports/ConsoleReport';

const csvReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvReader);
matchReader.load();
const matches = matchReader.matches;

const manUnitedWins = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);

manUnitedWins.buildAndPrintReport(matches);
