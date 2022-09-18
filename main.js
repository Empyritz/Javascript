const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const deleteBtn = document.querySelector("#delete-btn")
const tabBtn = document.querySelector("#tab-btn")
const ulEl = document.querySelector("#ul-el")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"))
const link = "https://"
let myLeads = []
//const tabs = [{url: "https:www.linkedin.com"}]

inputBtn.addEventListener("click", saveLead)
deleteBtn.addEventListener("dblclick", deleteLead)
tabBtn.addEventListener("click", tabF)


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function tabF() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
        console.log(myLeads)
    }) 
}
//var listItems = ""

function render (arr) {
    let listItems =""
    for (let i = 0; i < arr.length; i++){
        listItems += `<li><a href = "${link}${arr[i]}" target = "_blanck">${myLeads[i]}</li></a>`
        console.log(listItems)
    }
    console.log(listItems)

    ulEl.innerHTML = listItems
    //const li = document.createElement("li")
    //li.textContent = myLeads[i]
    //ulEl.append(li)
}

function deleteLead (arr){
    localStorage.clear()
    myLeads = []
    render(myLeads)
}
function saveLead() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

    console.log( localStorage.getItem("myLeads"))
}







