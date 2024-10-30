"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const faker_1 = require("@faker-js/faker");
//다른 엔지니어들이게 이 클래스에서 뭘 하는지 이해하도록 돕기 위함
class Company {
    //초기화
    constructor() {
        (this.companyName = faker_1.faker.company.name()),
            (this.catchPhrase = faker_1.faker.company.catchPhrase());
        this.location = {
            lat: faker_1.faker.location.latitude(),
            lng: faker_1.faker.location.longitude(),
        };
    }
    markerContent() {
        return `
    <div>
        <h1>Company name:   ${this.companyName}</h1>
        <h3>Catchphrase: ${this.catchPhrase}</h3>
    </div>
    `;
    }
}
exports.Company = Company;
