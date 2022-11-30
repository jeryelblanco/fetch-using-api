async function renderApi (){
let request = await fetch("https://pokeapi.co/api/v2/pokemon/")
let response = await request.json()
console.log(response)
response.results.forEach((data, i) =>{
const div = document.createElement("div")
document.body.append(div)
const name = document.createElement("h1")
name.innerText = data.name
div.append(name)

fetch(`https://pokeapi.co/api/v2/pokemon/${i+1}`)
.then(function(req){
    return req.json()
})
.then(function(data){
const img = document.createElement("img")
div.append(img)
img.src = data.sprites.other.dream_world.front_default
const stats = document.createElement("button")
div.append(stats)
stats.innerText = "Moves"
})
})

}
renderApi()