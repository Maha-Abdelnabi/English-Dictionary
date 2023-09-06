inputEl = document.getElementById("input");


async function fetchData(word){
const searchWord = word

//fetch api
const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
console.log(apiUrl);
 const result = await fetch(apiUrl).then((res) => res.json());
 console.log(result[0].meanings[0].definitions[0].definition);
 

    
     
     };

 
//get the value of the input
inputEl.addEventListener("keyup",(e)=>{
    //only the enter btn for search
    if(e.target.value && e.key === "Enter"){
        fetchData(e.target.value);
    }
})