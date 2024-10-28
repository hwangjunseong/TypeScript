const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};
type Drink = [string, boolean, number];
//튜플 => 해당 배열은 일관된 순서로 들어감
const pepsi: Drink = ['brown', true, 40];
// pepsi[0]= 40 => 오류
const sprite: Drink = ['Clear', true, 40];

const carSpecs: [number, number] = [400, 3354];
//객체 형식
const carStats = {
  horsePower: 400,
  weights: 3354,
};
