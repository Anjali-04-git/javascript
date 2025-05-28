for(let a=1; a<=5; a++){
    for(let b=1; b<=5 ; b++){
        if(a==1 || a==5 || b==1 || b==5){
            document.write("*")
        }
        else{
            document.write("&nbsp&nbsp")
        }
    }
    document.write("<br>")
}