const error=document.getElementById('error')
// const loading=document.getElementById('loading')

const loadPlayers=()=>{
    const inputText=document.getElementById('input-text');
    const inputValue=inputText.value;
    inputText.value=''
    const url=`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${inputValue}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayTeam(data.teams))
}
const displayTeam=(teams)=>{
    console.log(teams);
    if(teams==null){
error.innerHTML=`<h2>No result found</h2>`
    }
else{
    // loading.style.display='block'
    error.innerHTML=``
    const players=document.getElementById('players')
    players.innerText=''
    const div=document.createElement('div')
    teams.forEach(team=>{
        console.log(team);
    div.innerHTML=`<div onclick="more(${team.idTeam})" class="w-50 mx-auto">
    <h2 class="text-center text-danger">Team Name:${team.strTeam}</h2>
    <img src="${team.strTeamBadge}"></div>
    `
})
players.appendChild(div)
}
}
const more=teamId=>{
    const url=`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayTeamById(data.teams))
}
const displayTeamById=data=>{
    console.log(data);
const player=document.getElementById('player')
player.innerText=''
const div=document.createElement('div')
div.innerHTML=`<div class="w-50 mx-auto">
<h2 class="text-center text-danger">Team Name:${data.strTeam}</h2>
<p class="text-primary fs-4 text-center">Formed Year:${data.intFormedYear}</p>
<p class="text-primary fs-4 text-center">Stadium Capacity:${data.intStadiumCapacity}</p>
<p class="text-primary fs-4 text-center">Formed Year:${data.intFormedYear}</p>
<p class="text-primary fs-4 text-center">Country:${data.strCountry}</p>
<p class="text-primary fs-4 text-center">DescriptionEN:${data.strDescriptionEN.slice(0,150)}</p>
<img src="${data.strTeamBadge}"></div>
`
player.appendChild(div)
}