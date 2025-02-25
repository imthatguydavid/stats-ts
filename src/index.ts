import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
const manUnitedWins = Summary.logWins('Man United');
const manUnitedAverageGoals = Summary.logAvgGoals('Man United');

matchReader.load();
const matches = matchReader.matches;

manUnitedWins.buildAndPrintReport(matches);
manUnitedAverageGoals.buildAndPrintReport(matches);
