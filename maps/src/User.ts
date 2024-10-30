import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';
// export default  "something";
//ts에서는 기본으로 내보내기를 하지 않는 것이 관행임
//TS에게 class User의 인스턴스가 인터페이스에서 요구되는 모든 속성을 만족시킨다
export class User implements Mappable {
  userName: string;
  location: {
    lat: number;
    lng: number;
  };
  //속성을 정의할 때 마다 같은 라인에서 초기화하거나 생성자로 초기화해야함
  //하드코딩된 값이면 같은 라인에서 초기화
  constructor() {
    (this.userName = faker.internet.username()),
      (this.location = {
        lat: faker.location.latitude(),
        lng: faker.location.longitude(),
      });
  }

  markerContent(): string {
    return `User name:   ${this.userName}`;
  }
}
