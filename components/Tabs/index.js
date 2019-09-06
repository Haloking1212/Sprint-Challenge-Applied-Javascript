// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get("https://lambda-times-backend.herokuapp.com/topics")

  .then( (response) => {
    console.log(response)  
        response.data.topics.forEach( obj => {
        const newTopic = Topic(obj)
        addingToDomTwo.appendChild(newTopic)
    })
  })
  .catch( (err) => {
    console.log(err)
  })

  function Topic (obj) {

//creating elements

    const dClassTopic = document.createElement("div")

//adding class to elements

    dClassTopic.classList.add("tab")

//adding content to elements

    dClassTopic.textContent = obj
    

    return dClassTopic;
  }

  const addingToDomTwo = document.querySelector(".topics")
  addingToDomTwo.appendChild(Topic())
