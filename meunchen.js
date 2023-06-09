var user = []

function addUser(name1, quantity1, number1) {
    var usern = {
        registr: name1,
        quan: quantity1,
        num: number1
    }   
    user.push(usern)
    addList(usern)

}

function click(a) {
    a.preventDefault()
    var registr=document.querySelector("#name").value
    var num=document.querySelector("#number").value
    var quan=document.querySelector("#quantity").value
        
    alert('Збереження вдале!')

    addUser(registr, quan, num)
}

var form = document.querySelector('#registration')

form.addEventListener("submit", a => click(a))

function addList(usern) {
    var list=document.querySelector("#user-list")

    var listadd=document.createElement("add")
    listadd.innerHTML = `
        <div>
        <span>Ім'я та Прізвище: ${usern.registr}</span>
        <span>    Кількість членів родини: ${usern.quan}</span>
        <span>    Номер телефону для зворотнього зв'язку: ${usern.num}</span>    
    </div
    `
    list.append(listadd)
}