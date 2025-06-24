let user=[]
const userdata=()=>{
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let mobile=document.getElementById('mobile').value;
    let password=document.getElementById('password').value;
    let z=[name,email,mobile,password]
    user.push(z)
    console.log(user)
}
document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector("form").addEventListener("submit",userdata);
})