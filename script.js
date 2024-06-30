
// Function with Variables

function subtrac(a , b){
    if((typeof a )=== "number" && (typeof b) === "number"){
        return a - b;
    }else{
        return `it's not a number`
    }
}
console.log(subtrac(100 , 45))
console.log(subtrac(100 , -45))
console.log(subtrac("100" , 45))


// Handling Null and Undefined

    function greet(firstName , lastName , age){
        if(age !== undefined){
            return `${firstName} ${lastName}'s is ${age}.` 
        }else{
            return `${firstName} ${lastName}'s is not definde`    
        }
    }
    console.log( greet("John" , "Doe" , 30))
    console.log(greet("John" , "Doe" ))


    // Utilizing Template Literals

    function interpolate(first , second){
        const sum = first + second
        return `${first}  +  ${second} =  ${sum}`
    }

   console.log( interpolate(23 , 10))