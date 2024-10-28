const profile = {
  user_name: 'jun',
  age: 24,
  //객체
  coords: {
    lat: 0, //위도
    lng: 15, //경도
  },
  //메서드
  setAge(age: number): void {
    this.age = age;
  },
};
//비구조화, type
const { age, user_name }: { age: number; user_name: string } = profile;
const {
  coords: { lat, lng },
}: {
  coords: { lat: number; lng: number };
} = profile;
