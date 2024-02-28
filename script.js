//define fetch data funct
async function fetchData(){
    //fetch data from website API
    const res = await fetch("https://api.coronavirus.data.gov.uk/v1/data");
    //store JSON data
    const record = await res.json();

    document.getElementById("date").innerHTML = record.data[0].date;
    document.getElementById("areaName").innerHTML = record.data[0].areaName;
    document.getElementById("latestBy").innerHTML = record.data[0].latestBy;
    document.getElementById("deathNew").innerHTML = record.data[0].deathNew;
    
}
fetchData();
