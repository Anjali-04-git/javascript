let age=parseInt(prompt("enter age"))
let nationality=parseInt(prompt("enter nationality"))
if(age>=18){
    if(nationality=="Indian"){
        alert("eligible to vote")
    }
    else{
        alert("not eligible")
    }
}
else{
    alert("uner 18")
}