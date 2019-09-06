// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    
    //creating elements

    const dClassHeader = document.createElement("div")
    const spanTagOne = document.createElement("span")
    const headerOne = document.createElement("h1")
    const spanTagTwo = document.createElement("span")

//structuring elements

    dClassHeader.appendChild(spanTagOne)
    dClassHeader.appendChild(headerOne)
    dClassHeader.appendChild(spanTagTwo)

//adding classes to elements

    dClassHeader.classList.add("header")
    spanTagOne.classList.add("date")
    spanTagTwo.classList.add("temp")

//adding content to elements

    spanTagOne.textContent = "SMARCH 28, 2019"
    headerOne.textContent = "Lambda Times"
    spanTagTwo.textContent = "98°"

    return dClassHeader
}

const addingToDom = document.querySelector(".header-container")
addingToDom.appendChild(Header())

