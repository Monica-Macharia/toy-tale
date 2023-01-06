let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });


  //GET all toys and render as cards on the DOM

  function display(item){
    let location = document.querySelector("#toy-collection")
    let toy = document.createElement("div")
    toy.className = "card"
    location.appendChild(toy)

      // for (let item of data){
      
      // toy.innerHTML = `<img src= "${item.image}" >`
        
      // }
    //   console.log(data)
    console.log(item)
     
      toy.innerHTML = `
      <img src= "${item.image}" >
      <button>Like</button>
      `
     
   
  }
  
  
  fetch("http://localhost:3000/toys")
  .then(response => response.json())
  .then(data => data.map(function(item){
    
      display(item)
  } ))
  
  
  
  //Use a form to create a new card and use POST to persist
  
  let form = document.querySelector("form")

    form.addEventListener("submit", function(e){
      e.preventDefault();
      let name = e.target.children[1].value
      let image = e.target.children[3].value
      let toyObj ={
        name: name,
        image: image
      }
      display(toyObj)
      poster(toyObj)
      form.reset()
    })



    


  
  //click like button and count on the DOM.

});


