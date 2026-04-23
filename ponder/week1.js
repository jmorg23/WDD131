                  
const PI = 3.14;
let radius = 3;

                  
const one = 1;
const two = '2';
                    

let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course); 
    console.log(student);
}
console.log(course); //works fine, course is global

const area = PI * radius * radius;
console.log(`The area of a circle is ${area}.`);