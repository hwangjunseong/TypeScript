"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchResult = void 0;
//enum은 밀접한 값들을 저장
//enum도 새로운 타입을 만듬
//타입: MatchResult
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (exports.MatchResult = MatchResult = {}));
//해당 enum에 대한 ts를 js로 변환하면 객체 형태가 됨
