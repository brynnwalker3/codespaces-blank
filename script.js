// api link: https://restcountries.com/

let button = document.querySelector("button");
let input = document.querySelector("input");
let display = document.querySelector(".display");

button.onclick = function() {
    let country = input.value;

    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(json => {

        // name
        let name = json[0].name.official;
        //capital
        let capital = json[0].capital;
        //region
        let region = json[0].region;
        let subRegion = json[0].subregion;
        //flag
        let flag = json[0].flags.png;
        console.log(flag);
        //population
        let population = json[0].population;

        display.innerHTML = `<p> Name: ${name} </p>
        <p> Capital: ${capital} </p>
        <p> Region: ${region} </p> 
        <p> Subregion: ${subRegion} </p> 
        <p> Population: ${population} </p>
        <div class="flagImage"> <img src="${flag}"> </div>`;
    });
};