$('#signUpContainer').modal('hide');
$('#modal').modal('hide');



async function fetchShoeCategories() {
    try {
    const response = await fetch(url,headers);
    const json = await response.json();
    console.log(json);
    

    resultContainer.innerHTML = "";

  /* for (let i = 0; i < mensShoes.length; i++) {
   


        resultContainer.innerHTML += `<div>${mensShoes[i].icon}</div>`;
    }

*/
} catch (error) {
    console.log("error occured");
    resultContainer.innerHTML = errorMessage();
}
}
fetchShoeCategories();

