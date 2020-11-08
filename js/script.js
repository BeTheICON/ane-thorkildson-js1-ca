const resultContainer = document.querySelector(".articleResults");
const url = "https://content.guardianapis.com/search?api-key=05659103-6f5c-43fc-a0aa-2043d1245235&show-fields=all";

async function fetchNews() {
    try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    const news = json.response.results;
    console.log(news);

    resultContainer.innerHTML = "";

    for (let i= 0; i < news.length; i++) {

        if(!news[i].fields.thumbnail){
            continue;
        }


        resultContainer.innerHTML += `<a href="details.html?id=${news[i].id}">
        <div class="sectionName"><strong>${news[i].sectionName}</strong> <span class="publicationDate">Published: ${news[i].webPublicationDate}</span></div>         
        <h2 class="title">${news[i].webTitle}</h2>
        <div class="columnContainer">
            <img class="image" src="${news[i].fields.thumbnail}"</img>
            <div class="trailText">${news[i].fields.trailText}</div>
        </div>
        <div class="standfirst">${news[i].fields.standfirst}</div>
        </a>`;
    }



} catch (error) {
    console.log("error occured");
    resultContainer.innerHTML = errorMessage();
}
}
fetchNews();