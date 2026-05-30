const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction)

function myFunction(item) {
  console.log(item * 10); 
}     
                        
                                  
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}         
const sum = nums.reduce(total => item + total);

                      
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
} 
                        
                    
                      
const numbers = [125, 20, 5];

document.getElementById("output").innerHTML = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}
                        

                            
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let index = fruits.indexOf("Apple");
                        
                    

                        
const movieSummary = `
  <div class="movie-summary">
    <h2>${movie.title}</h2>
    <p>${movie.genre} - ${stars}</p>
  </div>
`;

document.getElementById("movie-list").innerHTML += movieSummary;            

                        
const car = {type:"Fiat", model:"500", color:"white"};       
                        