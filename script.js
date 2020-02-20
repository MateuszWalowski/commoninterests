const link = "https://spreadsheets.google.com/feeds/list/1fj4-OQKzaFXX5ptgOnnXImXkKOSpYKNyeVcumszGcB8/od6/public/values?alt=json";

window.addEventListener("DOMContentLoaded", getData);

function getData() {
fetch(link)
.then(res => res.json())
.then(handleData);

}

function handleData(data) {
    const myData = data.feed.entry;
    console.log("myData - console");
    console.log(myData);
    myData.forEach(songObjects);

}
var songs=[];
function songObjects(videoid){
    var songObject={};
    console.log(videoid.id+"-"+videoid.gsx$link)
    
}
function loadVideo(videoid){
    document.getElementById("player1").src="https://www.youtube.com/embed/"+videoid.gsx$link;
    console.log(videoid.gsx$link)
}