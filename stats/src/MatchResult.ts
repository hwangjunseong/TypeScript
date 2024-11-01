//enum은 밀접한 값들을 저장
//enum도 새로운 타입을 만듬
//타입: MatchResult
export enum MatchResult {
  HomeWin = 'H', //home경기,
  AwayWin = 'A', //원정경기,
  Draw = 'D', //무승부 :D
}
//해당 enum에 대한 ts를 js로 변환하면 객체 형태가 됨
