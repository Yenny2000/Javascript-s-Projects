
{
   let num1 = parseFloat(prompt("Enter the first number"));
   let num2 = parseFloat(prompt("Enter the second number"));
   let oper = prompt("Enter an operation: +, -, /, * ")

if(oper == '+')
{
    let result = num1 + num2
    alert( "The sum of the given numbers is " + result);
}

else if(oper == '-')
{   let result = num1 - num2
    alert("The difference of the given numbers is " + result);
    
}

else if(oper == '/')
{
    let result = num1 / num2
    alert("The division of the given numbers is "+ result);
}

if(oper == '*')
{
   let result = num1 * num2
   alert("The product of the given numbers is " + result);
}
}
