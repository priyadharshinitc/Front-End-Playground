let sum = 0;
let count = 0;
let yourScore = document.getElementById("your-score");
let score = 0;

async function getData() {
    let response = await fetch('./data.json');
    let data = await response.json();
    // console.log(data);
    
    let summaryList = document.querySelector(".summary-list");
    summaryList.innerHTML = "";

    for(let i = 0; i < data.length; i++) {
        summaryList.innerHTML += `
        <li class="summary-item">   
            <div class="wrapper">              
                <img class="symbol" src="${data[i].icon}" alt="${data[i].category} Image">
                <span class="title">${data[i].category}</span>
            </div>
            <div class="score-wrapper">
                <span class="acquired-score">${data[i].score}</span> / 100
            </div>            
        </li>
    `;
    sum += data[i].score;
    }
    score = Math.round(sum / data.length);
    const start = setInterval (scoring, 10);
    function scoring() {
        if(count > score) {
            clearInterval(start);
            return;
        } 
        yourScore.innerHTML = count;        
        count++;
    }
}

getData();