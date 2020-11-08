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

    news.forEach(function(article){
        resultContainer.innerHTML += `<a href="details.html?id=${article.id}">
                    <div class="sectionName"><strong>${article.sectionName}</strong> <span class="publicationDate">Published: ${article.webPublicationDate}</span></div>         
                    <h2 class="title">${article.webTitle}</h2>
                    <div class="columnContainer">
                        <img class="image" src="${article.fields.thumbnail}"</img>
                        <div class="trailText">${article.fields.trailText}</div>
                    </div>
                    <div class="standfirst">${article.fields.standfirst}</div>
                    </a>`;

    });


} catch (error) {
    console.log("error occured");
    resultContainer.innerHTML = errorMessage();
}
}
fetchNews();