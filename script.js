inputEl = document.getElementById("input");
const outputEl = document.getElementById("info-text");
audioEl= document.getElementById("audio")


async function fetchData(word){
const searchWord = word

//fetch api
const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
console.log(apiUrl);
 const result = await fetch(apiUrl).then((res) => res.json());

outputEl.innerHTML = result[0].meanings[0].definitions[0].definition;
audioEl.src = result[0].phonetics[0].audio;
 };

 
//get the value of the input
inputEl.addEventListener("keyup",(e)=>{
    //only the enter btn for search
    if(e.target.value && e.key === "Enter"){
        fetchData(e.target.value);
    }
})