const team =[
    {reviewer:'Haris', agent:'Aman', cont:15, monitoring:1, puase:2, dvrissue:1, live:5 },
    {reviewer:'Haris', agent:'Aman', cont:15, monitoring:1, puase:2, dvrissue:1, live:5 },
    {reviewer:'Haris', agent:'Aman', cont:15, monitoring:1, puase:2, dvrissue:1, live:5 },
    {reviewer:'Haris', agent:'Aman', cont:15, monitoring:1, puase:2, dvrissue:1, live:5 }
];


const containerShift = document.getElementById('shift-count');
const shiftTable = document.createElement('table');
containerShift.append(shiftTable);

for( let i = 0; i < team.length; i++){
  if(i === 0){
    const thead =document.createElement('thead');
    const tr =document.createElement('tr');
  for(let key in team[i]){
    const th =document.createElement('th');
    th.innerText= key.toUpperCase();
    tr.append(th);
  }
  thead.append(tr);
  shiftTable.append(thead);  
}  
}

const tbody= document.createElement('tbody');
shiftTable.append(tbody);


for(let i = 0; i <team.length; i++){

    const tr= document.createElement('tr')

    for(let key in team[i]){
    const td= document.createElement('td')
    td.innerText = team[i][key]
 tr.append(td);  
}
tbody.append(tr);
}