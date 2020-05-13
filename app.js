import myData from './pokemon.json';


console.log(myData);



const id = 1; 
fetch('https://pokeapi.co/api/v2/pokemon/' + id + '/')
.then(result => {
    // console.log(result);
    return result.json();
})
.then(data => {
    console.log(data);
    // const pokemon = data.results[0];
    // console.log(`the pokemon is ${pokemon.name}`);
})
.catch(error =>{
    console.log(error)
});

