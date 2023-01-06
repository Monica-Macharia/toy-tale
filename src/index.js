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
  count = 0;
  function display(item){
    
    let location = document.querySelector("#toy-collection")
    let toy = document.createElement("div")
    toy.className = "card"
    location.appendChild(toy)

      // for (let item of data){
      
      // toy.innerHTML = `<img src= "${item.image}" >`
        
      // }
      // console.log(data)
    // console.log(item)
     
      toy.innerHTML =   `
      <img src= "${item.image}" >
      <p class="para">${item.likes} likes</p>
      <button>Like</button>
      `
  
   console.log(toy)
    let btn = toy.querySelector("button")
    let par =  document.querySelector(".para")
 
     btn.addEventListener("click", function(){
      
      let like = item.id.likes
      console.log(item)
       counter = count++
       like = like + counter    
      
       par.innerHTML = `${like} likes`
      
     
      
      // //  item.map(anim => {
      //  
      //  console.log( Number.isInteger(like)counter = count++
      //      like = like + counter)
       
      //   
      //      console.log(like)
           
          
      
      //  par.innerText = 
      //  `${like} likes`
      // //  console.log(par)
     
      // //  })

     })

  }
  
  
  fetch("http://localhost:3000/toys")
  .then(response => response.json())
  .then(data => 
    
    data.map(item => display(item))
      
   )
  
  
  
  //Use a form to create a new card and use POST to persist
  
  let form = document.querySelector("form")

    form.addEventListener("submit", function(e){
      e.preventDefault();
      let name = e.target.children[1].value
      let image = e.target.children[3].value
      // let likes = 
      let toyObj ={
        name: name,
        image: image
      }
      display(toyObj)
      poster(toyObj)
      form.reset()
    })


    function poster(tonyObj){
      fetch("http://localhost:3000/toys", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(tonyObj)
      })
      .then(resp => resp.json())
      .then(data => console.log(data))
      .catch(errors => console.log(errors.message))
    }



  
  //click like button and count on the DOM.(PATCH)
    // count = 0;
  // let btn = document.querySelector("button")
  // console.log(btn)
  // .addEventListener("click", 
  // function(){
  //   count++
  //   console.log(count)
  // })

});


