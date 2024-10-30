import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';
//다른 엔지니어들이게 이 클래스에서 뭘 하는지 이해하도록 돕기 위함
export class Company implements Mappable {
  companyName: string;
  catchPhrase: string; //홍보 문구
  location: {
    lat: number;
    lng: number; //위치 정보
  };
  //초기화
  constructor() {
    (this.companyName = faker.company.name()),
      (this.catchPhrase = faker.company.catchPhrase());
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }
  markerContent(): string {
    return `
    <div>
        <h1>Company name:   ${this.companyName}</h1>
        <h3>Catchphrase: ${this.catchPhrase}</h3>
    </div>
    `;
  }
}
