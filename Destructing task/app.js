//1. Arrayın elementlərini yazdırın
const numbersArr = [1, 2, 3, 4, 5];

const [first, second, third, fourth, fiveth] = numbersArr 

console.log(first);   
console.log(second);  
console.log(third) ;
console.log(fourth); 
console.log(fiveth);

//2.Objectin elementlərini yazdırın
const person = [
    "John",
     "Doe",
     "30" ,
]; 
const [firstName, lastName, age] = person

  console.log(firstName); 
  console.log(lastName);   
  console.log(age);    
    
  //3. PrintPerson Funksiyasını yazın.
  const person1 = {
    firstName: 'Alice',
    lastName: 'Johnson',
    age: 25
 };
 
 function printPerson(person1) {
     console.log(`${person1.firstName} ${person1.lastName} is ${person1.age} years old.`);
 }
 
 printPerson(person1); 


 //4. Ekrana yazdırın məlumatları aşağıdakı kimi
 const user = {
    id: 1,
    username: 'john_doe',
    email: 'john@example.com',
    details: {
      firstName: 'John',
      lastName: 'Doe',
      address: {
        city: 'New York',
        zipCode: '10001'
      }
    }
  };
  console.log(user.username); 
  console.log(user.details.firstName); 
  console.log(user.details.address.city); 

  //5. Rest parametrdən istifadə edərək ilk ədədi və qalan ədədləri ekrana yazdırın 
  const numbers = [1, 2, 3, 4, 5];

const [firstNumber, ...restOfNumbers] = numbers;

console.log(firstNumber); 
console.log(restOfNumbers); 






