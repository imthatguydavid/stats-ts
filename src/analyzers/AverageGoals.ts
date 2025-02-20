import { Analyzer } from '../Summary';
import { MatchData } from '../MatchData';

export class AverageGoals implements Analyzer {
  constructor(public teamName: string) {}

  private static HOME_TEAM_INDEX = 1;
  private static AWAY_TEAM_INDEX = 2;
  private static HOME_GOALS_INDEX = 3;
  private static AWAY_GOALS_INDEX = 4;

  private getGoals(game: MatchData, home: boolean): number {
    const index = home
      ? AverageGoals.HOME_GOALS_INDEX
      : AverageGoals.AWAY_GOALS_INDEX;
    return game[index] as number;
  }

  private calculateGoalsScored(matches: MatchData[], home: boolean): number {
    const index = home
      ? AverageGoals.HOME_TEAM_INDEX
      : AverageGoals.AWAY_TEAM_INDEX;

    return matches
      .filter((match) => match[index] === this.teamName)
      .reduce((sum, game): number => {
        const homeGoals = this.getGoals(game, true);
        return sum + homeGoals;
      }, 0);
  }

  run(matches: MatchData[]): string {
    let totalGamesPlayed = 0;
    let totalGoalsScored = 0;

    // home games
    totalGoalsScored += this.calculateGoalsScored(matches, true);
    // away games
    totalGoalsScored += this.calculateGoalsScored(matches, false);

    for (let match of matches) {
      if (match[1] === this.teamName || match[2] === this.teamName) {
        totalGamesPlayed++;
      }
    }

    return `${this.teamName} averaged ${totalGoalsScored / totalGamesPlayed} goals over ${totalGamesPlayed} games`;
  }
}
