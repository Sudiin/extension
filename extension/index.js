let inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const myLeads = []
const ulEL = document.getElementById("ul-el")

localStorage.setItem("myLeads", "https://www.youtube.com/watch?v=d_HlPboLRL8&list=RDMMd_HlPboLRL8&start_radio=1")


inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value = "   "
})



function renderLeads() {
    let listItems = "";

    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `;
    }

    ulEL.innerHTML = listItems;
}

1:07:41

