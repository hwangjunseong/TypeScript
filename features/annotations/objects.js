"use strict";
const profile = {
    user_name: 'jun',
    age: 24,
    //객체
    coords: {
        lat: 0, //위도
        lng: 15, //경도
    },
    //메서드
    setAge(age) {
        this.age = age;
    },
};
//비구조화, type
const { age, user_name } = profile;
const { coords: { lat, lng }, } = profile;
