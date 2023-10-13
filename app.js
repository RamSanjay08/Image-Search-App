async function getImages(){
  try{
  let results = document.getElementById('search-results')
  let searchInput = document.getElementById('input-box')
  let  = document.getElementById('')
  let apiKey = "JPrtOJqiSEm6pRh4wtlCYhmA2qRoaJemKNPAj9ANagE"
  let data = await fetch(`https://api.unsplash.com/search/photos?query=${searchInput}&client_id=${apiKey}`)
  data = await data.json()
  console.log(data);
  data.results.map(({urls:{full}})=> {
    results.innerHTML += `<div class="search-result">
    <img id="imageOne" src=${full} alt="Across the Matrix">
    <a id="title" href="" target="_blank">Across the Matrix</a>
  </div>` 
  })
  }
  catch(err) {
    console.log(err);
  }
}