// Global Variables

let country;

/* fetch("https://restcountries.eu/rest/v2/all")
.then(function(res){
    // console.log(res.json());
    return res.json();
})

.then(function(data){
    console.log(data);
    initialize(data);
})

.catch(function(err){
    console.log("Error:", err);
}); */

fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data => initialize(data))
.catch(err => console.log("Error:", err));

function initialize(countriseData) {
    country = countriseData;
    let options = "";
    for(let i=0; i<country.length; i++) {
        options += `<option value="${country[i].alpha3code}">${country[i].name}</option>`;
    }
    document.getElementById("country").innerHTML = options;
}
