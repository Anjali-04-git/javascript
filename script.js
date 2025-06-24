import watch from "./ourproduct.js"
//console.log(watch)

let prod=document.getElementById("prod")
console.log(prod)

prod.innerHTML=watch.map((e)=>{
    return`
    <div style="height:150px; width:150px; border:4px solid rgb(3, 149, 149);">
            <img src="${e.img}" alt="img">
            <p>desc:${e.desc}</p>
            <h3>Price:${e.Price}</h3>
            <button onclick="addproduct()">ADD</button>
            <button onclick="removeproduct()">REMOVE</button>

        </div>
    `
}).join("")

let p=0;
window.addproduct=(Price)=>{
    p=p+Price;
}
window.removeproduct=(Price)=>{
    p=p-Price;
}