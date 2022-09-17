const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")

const myLeads = []
const link = "https://"


inputBtn.addEventListener("click", saveLead)

function saveLead() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
}

function renderLeads () {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++){
        listItems += `<li><a href = "${link}${myLeads[i]}" target = "_blanck">${myLeads[i]}</li></a>`

    }
    ulEl.innerHTML = listItems
    //const li = document.createElement("li")
    //li.textContent = myLeads[i]
    //ulEl.append(li)
}





