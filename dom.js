let head = document.getElementById('head1')
console.log(head)
head.textContent = "FROM JS"
head.style.backgroundColor = "pink"
head.style.padding = "20px"

let head2 = document.getElementById("head2")
head2.innerHTML = "<i> Tea Break </i>"

let list = document.getElementsByTagName("li")
list[2].textContent = "Array"