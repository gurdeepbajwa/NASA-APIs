function setHTML(data) {
    let title = document.getElementById("title");
    let explanation = document.getElementById("explanation");
    let copyright = document.getElementById("copyright");

    title.innerText = data.title;
    explanation.innerText = data.explanation;
    copyright.innerText = "By, " + data.copyright;

    document.body.style.backgroundImage = "url(" + data.hdurl + ")";
    document.body.style.backgroundSize = "cover";
}

const apod_api = 'https://api.nasa.gov/planetary/apod?api_key=edU1WXWxqPvVoCevBXVkzvna3tXGB0l6raOQuDAC';

async function getAPOD() {
    const response = await fetch(apod_api);
    const data = await response.json();

    setHTML(data);
}

getAPOD();