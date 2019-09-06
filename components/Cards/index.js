// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


function CallingData(){
    axios.get('https://lambda-times-backend.herokuapp.com/articles')
        
        .then(response => {
          Object.keys(response.data.articles).forEach(category =>{
            response.data.articles[category].forEach(article =>{
              CreateData(article)
            })
          })
        })
        .catch(err => console.log("err"));   
  }

  function CreateData(obj){
    let parent = document.querySelector(".cards-container")

    //creating elements
    let card = document.createElement('div');
    let headline = document.createElement('div');
    let author = document.createElement('div');
    let imgContainer = document.createElement("div")
    let img = document.createElement('img');
    let spanTag = document.createElement("span")

    //structuring elements
    parent.appendChild(card)
    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(img)
    author.appendChild(spanTag)

    //creating classes for elements
    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add("img-container")

    //adding content to elements
    headline.textContent = obj.headline;
    img.setAttribute('src',obj.authorPhoto);
    img.setAttribute('alt', `a photo of ${obj.authorName}`);
    spanTag.textContent = obj.authorName;
  }
  
  CallingData()