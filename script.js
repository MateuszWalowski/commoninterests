const link="https://spreadsheets.google.com/feeds/list/1Ev8FNdVKiWW-5RYiXFDzwpEhcL25MISFnwJbBi2bwHw/od6/public/values?alt=json";
window.addEventListener("DOMContentLoaded", getPeople);

function getPeople(){
    fetch(link)
    .then(res=>res.json())
    .then(handlePeople);
}
function handlePeople(data){
    const people=data.feed.entry;
    people.forEach(showPeople);
    getData();
}
var currentPerson="";
function showPeople(singlePerson){
    const template=document.querySelector("#personTemplate").content;
    const copy = template.cloneNode(true);
    copy.querySelector(".row").id=singlePerson.gsx$name.$t;
    copy.querySelector("img").src=singlePerson.gsx$name.$t+".jpg";
    copy.querySelector("h2").textContent=`${singlePerson.gsx$name.$t} ${singlePerson.gsx$surname.$t}`;
    copy.querySelector(".hashtags").innerHTML=`#${singlePerson.gsx$hashtag1.$t} <br /> #${singlePerson.gsx$hashtag2.$t} <br />#${singlePerson.gsx$hashtag3.$t}`;
    copy.querySelector("ol").id=singlePerson.gsx$name.$t+"List";
    copy.querySelector(".meaning").textContent=singlePerson.gsx$meaning.$t;
    copy.querySelector("iframe").id=singlePerson.gsx$name.$t+"Player";
    document.querySelector(".content").appendChild(copy);
    
}
const linkSongs="https://spreadsheets.google.com/feeds/list/1fj4-OQKzaFXX5ptgOnnXImXkKOSpYKNyeVcumszGcB8/od6/public/values?alt=json";

function getData(){
    fetch(linkSongs)
    .then(res=>res.json())
    .then(handleData);
}
function handleData(data){
    const info=data.feed.entry;
    info.forEach(showData);
    
}
var data = [];
function showData(singleRowData){
    var li = document.createElement("li");
    var textNode = document.createTextNode(`${singleRowData.gsx$track.$t} - ${singleRowData.gsx$artist.$t}`);
    li.appendChild(textNode);
    li.id=singleRowData.gsx$id.$t+" "+singleRowData.gsx$name.$t;
    li.onclick="loadVideo(this.id)";
    document.getElementById(`${singleRowData.gsx$name.$t}List`).appendChild(li);
    document.getElementById(`${singleRowData.gsx$name.$t}Player`).src="https://www.youtube.com/embed/"+singleRowData.gsx$id.$t;
    document.getElementById(singleRowData.gsx$id.$t+" "+singleRowData.gsx$name.$t).setAttribute('onclick','loadVideo(this.id)')
}

function loadVideo(videoinfo){
    var videoid=videoinfo.substr(0,videoinfo.indexOf(' ')); // "72"
    var videoperson=videoinfo.substr(videoinfo.indexOf(' ')+1);
  document.getElementById(`${videoperson}Player`).src="https://www.youtube.com/embed/"+videoid
}


var target = document.getElementById('target');
var titles = [
    'quote 1 ',
    'quote 2 ',
    'quote 3 ',
    'quote 4',
    'quote 5',
    'quote 6 ',
    'quote 7 ',
    'quote 8 ',
    'quote 9',
    'quote 10'
];

function newTitle () {
    var i = (Math.random() * titles.length) | 0;
    target.innerText = titles[i];
}

newTitle();
