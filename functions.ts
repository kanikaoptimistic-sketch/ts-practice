//Add two numbers
function add(number1:number,number2:number):number{
    return number1 + number2;
}
console.log(add(2,3));


// take a name and return a greeting like "Hello, Kanika!"
function greet(name:string):string{
    return `Hello, ${name}!`;
}
console.log(greet("Kanika"));


//take a number and return true if it’s even, false if it’s odd.
function isEven(num:number):boolean{
    if(num%2===0)
        return true;
    else
        return false;
}
console.log(isEven(2));


//take an array of numbers and return the largest one
function getMax(nums:number[]):number{
    const first=nums[0];
    if (first === undefined) {
        throw new Error("getMax needs at least one number");
      }
    let max=first;
    for(const n of nums)
    {
        if(n>max){
            max=n;

}
    }
    return max;
}
console.log(getMax([4,9,6]));


//take a sentence and return how many words it has
function countWords(sent:string):number
{

  const words:string[]=sent.split(" ");
  return words.length;
}
console.log(countWords("My name is Kanika Arora"));


//take an array of strings and return a new array with every string in capitals
function toUpperList(newlist:string[]):string[]
{
  return newlist.map((item)=>item.toUpperCase());
}
console.log(toUpperList(["login","logout","cart"]));


//take a price and a discount percent (10 by default) and return the price after the discount
function calculateDiscount(price:number,percent:number=10):number{
    if (percent < 0 || percent > 100) {
        throw new Error("Percent must be between 0 and 100");
      }
    const discountAmount=(price*percent)/100;
    return price-discountAmount;
}
console.log(calculateDiscount(500));


//take a first name and an optional last name, and return them joined with a space, or just the first name if there’s no last name
function fullName(firstName:string,lastName?:string):string{
   if (!lastName)
   {
       return firstName;
   }
       return `${firstName} ${lastName}`;

}
console.log(fullName("Kanika"));
console.log(fullName("Kanika","Arora"));


//take an HTTP status code and return "pass" if it’s below 400, otherwise "fail"
function getStatus(statusCode:number):"pass" | "fail"{
    if (statusCode<400)
    {
        return "pass";
    }
    else
    {
        return "fail";
    }
}
console.log(getStatus(200));//pass
console.log(getStatus(399)); // pass  (just below the boundary)
console.log(getStatus(400)); // fail  (exactly on the boundary)
console.log(getStatus(500)); // fail


//take a bug object with id, title and severity, and return a line like "[HIGH] #1 Login fails"
type Bug=
{id:number,
title:string,
severity:"high"|"low";
}

function formatBug(bug:Bug):string
{
    return `[${bug.severity.toUpperCase()}] #${bug.id} ${bug.title}`;
}
console.log(formatBug({id:1, title:"Login Fails",severity:"high"}));
