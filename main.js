let gen;
let input = document.getElementById("input")
let button = document.getElementById("button")
const url = "https://randomuser.me/api/?results=50";
fetch(url).then(

    function(response){
    return response.json()
}).then(
function(myJSON){
    console.log(myJSON)
    console.log()
    gen = myJSON
    
    for(let a = 0; a < gen.results.length; a++){
        let g = gen.results[a].gender
        let f = gen.results[a].name.first
    let people = gen.results[a].name.last + " " + f + " " + g
    let ele = document.createElement("p")
    ele.innerHTML = people
    let FL = document.getElementById("FL")
    FL.appendChild(ele)
}
}

);

button.addEventListener("click", clicker)
function clicker(){
    FL.innerHTML = ""
    let IV = input.value
    let link = "https://randomuser.me/api/?results=" + IV

    fetch(link).then(

        function(response){
        return response.json()
    }).then(
    function(myJSON){
        console.log(myJSON)
        console.log()
        gen = myJSON
        
        for(let a = 0; a < gen.results.length; a++){
            let g = gen.results[a].gender
            let f = gen.results[a].name.first
        let people = gen.results[a].name.last + " " + f + " " + g
        let ele = document.createElement("p")
        ele.innerHTML = people
        let FL = document.getElementById("FL")
        FL.appendChild(ele)
    }
    }
    
    );
}




