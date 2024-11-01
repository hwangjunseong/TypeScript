import { CsvFileReader } from './CsvFileReader';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
//튜플
type MatchData = [Date, string, string, number, number, MatchResult, string];
//CsvFileReader가 추상 class가 되고
//추상클래스에서는 mapRow(string[]) : MatchData를 정의만해놓고
//자식 클래스가 해당 메서드를 구현해야함 MatchData가
//자식 클래스마다 다르니까
export class MatchReader extends CsvFileReader<MatchData> {
  //추상클래스에서 선언한걸 자식 클래스에서 구현해줘야함
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      //ts에게 H가 MatchResult의 값들중 하나라는 것을 알려주는거
      row[5] as MatchResult, //type assertion
      row[6],
    ];
  }
}
