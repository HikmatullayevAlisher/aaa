

const user = {}
for (let i = 1; i <=5; i++){
  let name =prompt(`${i}-foydalanuvchi ismingizni kiriting:`)
  let age =prompt(`${i}-foydalanuvchi yoshingizni kiriting:`)
  user[i] ={  name: name, age: age }
  for (const key in user){
    console.log(`${key}-Foydalanuvchi:`);
    console.log(`Ismi: ${user[key].name}`);
    console.log(`Yoshi: ${user[key].age}`);
  }
}