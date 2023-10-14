let form = document.getElementById("search-box")
let searchInput = document.getElementById("input-box")
let searchButton = document.getElementById("search-button")
let searchResults = document.getElementById("search-results")
let showMoreBtn = document.getElementById("show-more-button")

let inputData = ""
let page = 1

async function getImages() {
  try{
  inputData = searchInput.value
  const apiKey = "JPrtOJqiSEm6pRh4wtlCYhmA2qRoaJemKNPAj9ANagE"
  const data = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${apiKey}`)
  let response = await data.json()
  console.log(response);

if (page === 1) {
  searchResults.innerHTML= "" 
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
    if (page > 1) {
      showMoreBtn.style.display="block"
    }
  }) }

  catch(err) {  
    console.log(err);
  }}

  form.addEventListener("submit", (event)=> {
    event.preventDefault()
    page = 1
    getImages()
  })

  showMoreBtn.addEventListener("click", ()=> {
    getImages()
  })

