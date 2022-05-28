console.log("Let's get this party started!");

// const form = document.querySelector('#searchform'); 
const $container = $('#gif-area'); 
const $searchInput = $('#search')
const key = 'l8K27PSJDATsnlj65mfC0xeaXznfIZKu';

// async function getGif(search, key) {
//     const res = await axios.get(`http://api.giphy.com/v1/gifs/search`, {params: {q: search, key: key}});
//     appendGif(res.data); 
// }


function appendGif(gif){
    let numResults = gif.data.length; 
    console.log(numResults)
    if (numResults) {
        let randomIdx = Math.floor(Math.random() * numResults); 
        let $newCol = $('<div>', { class: 'col-md-4 col-12 mb-4'});
        let $newGif = $('<img>', {src: gif.data[randomIdx].images.original.url, class: 'w-100'});
        $newCol.append($newGif);
        $container.append($newCol);
    }
}



$('form').on('submit', async function(e){
    e.preventDefault(); 
    let searchTerm = $searchInput.val();
    $searchInput.val('');

    const res = await axios.get(`http://api.giphy.com/v1/gifs/search`, {params: {q: searchTerm, key: key}});
    appendGif(res.data)
    // console.log(res.data)
})

$('#remove').on('click', function(){
    $container.empty();
})



// const $gifArea = $("#gif-area");
// const $searchInput = $("#search");

// /* use ajax result to add a gif */

// function addGif(res) {
//   let numResults = res.data.length;
//   if (numResults) {
//     let randomIdx = Math.floor(Math.random() * numResults);
//     let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
//     let $newGif = $("<img>", {
//       src: res.data[randomIdx].images.original.url,
//       class: "w-100"
//     });
//     $newCol.append($newGif);
//     $gifArea.append($newCol);
//   }
// }

// /* handle form submission: clear search box & make ajax call */

// $("form").on("submit", async function(evt) {
//   evt.preventDefault();

//   let searchTerm = $searchInput.val();
//   $searchInput.val("");

//   const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
//     params: {
//       q: searchTerm,
//       api_key: "l8K27PSJDATsnlj65mfC0xeaXznfIZKu"
//     }
//   });
//   addGif(response.data);
// });

// /* remove gif */

// $("#remove").on("click", function() {
//   $gifArea.empty();
// });