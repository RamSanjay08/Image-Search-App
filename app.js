let form = document.getElementById("search-box")
let searchInput = document.getElementById("input-box")
let searchResults = document.getElementById("search-results")
let showMoreBtn = document.getElementById("show-more-button")
let notFound = document.getElementById('not-found')

let inputData = ""
let page = 1
let maxpages = 3

async function getImages() {
  try{
  inputData = searchInput.value
  const apiKey = "JPrtOJqiSEm6pRh4wtlCYhmA2qRoaJemKNPAj9ANagE"
    
  //^ used to avoid the search field should not be empty
  if (inputData.trim() === "") {
    alert("The search field cannot be empty")
    return 
  }

  //^ used when the user go to second page the first page should be empty
  //^ only the second page photos display
  if (page === 1) {
    searchResults.innerHTML= ""
  }
  
  //^ used for to display the first 3 pages at start
  for(let i = 0; i < maxpages; i++) {
  const data = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${apiKey}`)
  let response = await data.json()
  console.log(response);

  if (response.total === 0) {
    notFound.style.display="block"
    showMoreBtn.style.display="none"
    return false
    }

  response.results.map((result) => {
    let ImageWrapper = document.createElement("div")
    ImageWrapper.classList.add("search-result")
    let image = document.createElement("img")
    image.src = result.urls.small
    image.alt = result.alt_description
    let ImageLink = document.createElement("a")
    ImageLink.href = result.links.html
    ImageLink.target = "_blank"
    ImageLink.textContent = result.alt_description

    ImageWrapper.appendChild(image)
    ImageWrapper.appendChild(ImageLink)
    searchResults.appendChild(ImageWrapper)

    page++
    if (page > maxpages * 8) {
      showMoreBtn.style.display="block"
    }
  })}}

  catch(err) {    
    console.log(err);
  }}

  //^ FORM SUBMIT BUTTON
  form.addEventListener("submit", (event)=> {
    event.preventDefault()
    page = 1
    getImages()
  })

  //^ SHOW MORE BUTTON
  showMoreBtn.addEventListener("click", ()=> {
    getImages()
  })

//^ MAIN PAGE
let ResultHome = document.getElementById("search-result")

let homeImages = [
  {
  wrapper: './assests/bryan-dijkhuizen-1jkM-j2eRbk-unsplash.jpg',
  content: "Every moment matters"
  },

  {
    wrapper: './assests/charlesdeluvio-bVtW9eP02nI-unsplash.jpg',
    content: "Stay hungry"
  },

  {
    wrapper: "./assests/dayo-clinckspoor-0kki97eZQs0-unsplash.jpg",
    content: "Some days start better than others"
  },
  
  {
    wrapper: "./assests/deanna-deshea-rPiqLTkfe6Q-unsplash.jpg",
    content: "Hella heart eyes for you"
  },

  {
    wrapper: "./assests/dima-panyukov-DwxlhTvC16Q-unsplash.jpg",
    content: "A little contour and confidence"
  },

  {
    wrapper: "./assests/dynamic-wang-_JAAQZ2wt5I-unsplash.jpg",
    content: "Smile a little more, regret a little less"
  },

  {
    wrapper: "./assests/hendrik-morkel-249eztzqpog-unsplash.jpg",
    content: "Life is simple. It’s just not easy"
  },

  {
    wrapper: "./assests/jasper-garratt-agFPSAVU-ag-unsplash.jpg",
    content: "Being happy never goes out of style"
  },

  {
    wrapper: "./assests/jenn-buxton-CPs_x1xeYPQ-unsplash.jpg",
    content: "Get out there and live a little"
  },

  {
    wrapper: "./assests/kyle-evans-Q8RkjK-bnu8-unsplash.jpg",
    content: "All you need is love"
  },

  {
    wrapper: "./assests/silas-schneider-H9zUXNKFhxA-unsplash.jpg",
    content: "Grow through what you go through"
  },

  {
    wrapper: "./assests/viktoriia-kondratiuk-DHGnb0QgCwo-unsplash.jpg",
    content: "Call me when the rush is over"
  },
]

  homeImages.map(({wrapper,content}) => {
  searchResults.innerHTML += `
  <div class="search-result">
  <img src=${wrapper} alt="Across the Matrix" >
  <a id="title" href=${wrapper} target="_blank">${content}</a>
  </div>`
  })
