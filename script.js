
const link = "https://spreadsheets.google.com/feeds/list/1duE6JJmVm82BpPsfYmEvjjjDrXWAHzuINMFnw1lTUjg/od6/public/values?alt=json";

window.addEventListener("DOMContentLoaded", getData);

function getData() {
fetch(link)
.then(res => res.json())
.then(handleData)
}


function handleData(data) {
    const myData = data.feed.entry;
    console.log("myData - console");
    console.log(myData);

    myData.forEach(oneperson);
}




function oneperson(person) {
    console.log("it works");
    const template = document.querySelector("#songtemplate").content;
    const copy = template.cloneNode(true);
    copy.querySelector(".name").textContent = person.gsx$name.$t;
    copy.querySelector(".hashtags").textContent = person.gsx$hashtags.$t;
    copy.querySelector(".meaning").textContent = person.gsx$meaning.$t;
    copy.querySelector(".tracks").textContent = person.gsx$tracks.$t;
    copy.querySelector(".personphoto").alt = person.gsx$name.$t;
    copy.querySelector(".personphoto").src = person.gsx$imagelink.$t;
    document.querySelector("main").appendChild(copy);
}
