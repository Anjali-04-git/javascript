let list = document.getElementsByTagName("li")
for(let i=0; i<10; i++){
    if(i%2!=0){
        list[i].style.backgroundColor = "blue"
        list[i].style.color = "white"
        
    }
}