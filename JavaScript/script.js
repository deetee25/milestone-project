fetch("https://restcountries.eu/rest/v2/all")
.then(function(res){
    // console.log(res.json());
    return res.json();
})