class Vehicle {
  //인스턴스 생성되면 생성자 즉시 실행
  //인수로 전달할꺼 정의
  //modifier는 클래스 내의 메서드와 속성으로 가능
  constructor(public color: string) {}
  //변수를 클래스 내에 선언할 때마다 초기화 됨
  //인스턴스 생성할 때 마다 해당 속성 가짐 => 생성자를 정의할 때 초기화 됨

  //   public drive(): void {
  //     console.log('Vehicle is driving');
  //   }
  protected honk(): void {
    console.log('Vehicle is honking');
  }
}
//클래스 내의 메서드를 가져다가 사용 가능
//Vehicle이 superclass 또는 부모 클래스라고 부름
class Car1 extends Vehicle {
  //자식 클래스의 생성자를 호출할 때마다 부모의 생성자 메서드도 호출해야함
  //color에서 public을 또 쓰지않은 이유는 field를 재할당하기 싫어서
  constructor(public wheels: number, color: string) {
    super(color); //super는 부모의 생성자 메소드에 대한 참조다
  }
  //오버라이딩 => 자식 클래스에서 부모 클래스의 modifier를 수정할 수 없음
  //부모 drive를 주석
  private drive(): void {
    console.log('Car1 is driving');
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}
//클래스를 정의하고 객체를 생성할 때 blueprint를 사용함
//인자로 전달 가능
const vehicle = new Vehicle('orange');
console.log(vehicle.color);
// vehicle.honk(); //private이라 외부에서 호출 불가
const car1 = new Car1(1, 'blue');
// car1.drive(); //불가
car1.startDrivingProcess();
// car1.honk();
