let v=0
function increment(){
    v++
    document.getElementById('count').innerHTML = v
    if(v%2==0){
    
    
        count.style.color = "red"
    }
    else{
        count.style.color = "black"
    }
    
    
    

       
    
}
function decrement(){
    v--
    if(v>=0){
    document.getElementById('count').innerHTML = v
    }
}
function reset(){
    v=0
    document.getElementById('count').innerHTML = v
}
function fun(){
    let hover = document.getElementById("hover")
    hover.innerHTML = "Get out"
    hover.style.color = "blue"
}
function fun1(){
    let hover1 = document.getElementById("hover")
    hover1.innerHTML = "Hover on me"
    hover1.style.color = "black"
}
