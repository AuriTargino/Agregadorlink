
function toggleMode(){
  
  const html = document.documentElement

  html.classList.toggle("light")
 
  const img = document.querySelector("#fotologo img")

  if (html.classList.contains("light")){

    img.setAttribute("src", "./assets/fotoaurilight.png")

  }else{
    img.setAttribute("src", "./assets/fotoauri.jpg")
  }
}

/* if (html.classList.contains("light")) {
  html.classList.remove("light")
} else {
  html.classList.add("light")
}  */
