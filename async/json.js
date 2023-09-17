// JSON
//JavaScript Object Notation

//1. Object to JSON
// stringify(obj)

json = JSON.stringify(['apple','banana']);
console.log(json);

const rabbit = {
    name:'tori',
    color:'white',
    size:null,
    birthDate:new Date(),
    jump: ()=>{
        console.log(`${this.name} can jump!`)
    }
    // 함수와 javascript에서만 있는 데이터도 json에 포함되지 않는다.
}
json = JSON.stringify(rabbit);
console.timeLog(json);

json = JSON.stringify(rabbit, ['name', 'color']);
console.timeLog(json);

json = JSON.stringify(rabbit,(key, value)=>{
    console.log(`key: ${key}, value: ${value}`);
    return value;
});
console.log(json);

//2. JSON to Object
//parse(json)
console.clear(); // 콘솔 창 clear
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key == 'birthDate'? new Date(value): value;
});
 
console.log(obj);
rabbit.jump();
// obj.jump(); 는 json에 함수 데이터가 기입 되지 않으므로 obj에서 jump함수 실행 X

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate()); 
// String으로 json에 할당되기 때문에 오류가 남 그래서 콜백함수를 사용해서 해결