fetch("https://restcountries.eu/rest/v2/all")
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
});