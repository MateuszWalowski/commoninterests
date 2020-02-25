
const link = "https://spreadsheets.google.com/feeds/list/1jK7RyIE6g7LU3khGVW_6QsXaqo9Zm0wttT9kEFDG9ts/od6/public/values?alt=json";

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
    myData.forEach(showSinglearticle);
}




function showSinglearticle(article) {
    console.log("it works");
    const template = document.querySelector("#news").content;
    const copy = template.cloneNode(true);
    copy.querySelector(".articles").textContent = article.gsx$article.$t;
    copy.querySelector(".headerforthearticle").textContent = article.gsx$header.$t;
    copy.querySelector(".newsimage").src = article.gsx$picture.$t;


    document.querySelector("body").appendChild(copy);
  }