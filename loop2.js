var a=parseInt(prompt("enter a number"))
if(a%2==0){
    alert("a is even")
    for(let b=1; b<=10; b++)
        console.log(a*b)
}
else{
    alert("a is odd")
    console.log(a*3)
}
