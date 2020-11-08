const articleId = document.querySelector(".id");
const articleDetails = document.querySelector(".articleDetails");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const apiKey = "?api-key=05659103-6f5c-43fc-a0aa-2043d1245235";
const showFields = "&show-fields=all";

const url = "https://content.guardianapis.com/" + id + apiKey + showFields;

async function fetchById() {
    try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const singleArticle = data.response.content;

    articleDetails.innerHTML = "";

    createHTML(singleArticle);
    document.title = `${singleArticle.id}`;
    articleId.innerHTML = `<span class="id">${singleArticle.id}</span>`;

} catch (error) {
    console.log("error occured");
    articleDetails.innerHTML = errorMessage();
}
}
fetchById();


function createHTML(singleArticle) {
    articleDetails.innerHTML = `<div class="sectionName"><strong>${singleArticle.sectionName}</strong> <span class="publicationDate">Published: ${singleArticle.webPublicationDate}</span></div>
            <h2 class="title">${singleArticle.webTitle}</h2>
            <div class="columnContainer">
                <div class="columnLeft">
                    <img class="image" src="${singleArticle.fields.thumbnail}"</img>
                    <div class="standfirst">${singleArticle.fields.standfirst}</div>
                </div>
                <div class="columnRight">
                    <div class="trailText">${singleArticle.fields.trailText}</div>
                </div>
            </div>
            <div class="byline">by: ${singleArticle.fields.byline}</div>
            <div class="bodyText">${singleArticle.fields.bodyText}</div>`;
        }