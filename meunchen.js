var user = []

function addUser(name1, quantity1, number1) {
    var usern = {
        registr:name1,
        quan:quantity1,
        num:number1    
}
user.push(usern)
console.log(usern)

}
function click(a) {
    a.preventDefault()
    var registr=document.querySelector("#name").value
    var quan=document.querySelector("#quantity").value
    var num=document.querySelector("#number").value
    
    alert('Збереження вдале!')

    addUser(registr, quan, num)
}

var form = document.querySelector('#registration')

form.addEventListener("submit", a=>click(a))