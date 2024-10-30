import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';
const user = new User();
const company = new Company();
console.log(user);
console.log(company);
const customMap = new CustomMap('map');
customMap.addMarker(user);
customMap.addMarker(company);
//ts가 우리 프로젝트 내에 이용 가능한 전역 변수 있다는 걸 이해하도록 해야함
// type definition file 설치 npm install @types/google.maps
//constructor(mapDiv: HTMLElement, opts?: google.maps.MapOptions);
//?는 OPTS 즉 선택임 굳이 전달할필요 X
//ts는 해당 인터페이스 정의로 보고 줌이라는 속성을 가질 수 있다는 걸 암 => 자동완성
