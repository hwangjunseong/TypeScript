import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
const reader = new MatchReader('football.csv');
reader.read();

let manUnitedWins = 0;
for (let match of reader.data) {
  //match는 ,를 제외한 한 행인 배열이다
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}
console.log(manUnitedWins);
