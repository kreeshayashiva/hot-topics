const container = document.getElementById('dynamic-content');
let links = document.querySelectorAll('nav li');

let url = 'partials/home.html';

const loadContent = (urlFeed) => {
    fetch(urlFeed)
    .then(function (rsp){
        if (rsp.ok){
            return rsp.text();
        }
        throw new Error('Network response was not ok');
    })
    .then (data => {
        container.innerHTML = data;
    })
    .catch (error => {
        console.error ('There was a problem' , error);
    });
};

const selectContent = (event) => {
    event.preventDefault();

    const href = event.target.getAttribute('href');

    if(href){
        loadContent(href);
    }
};

links.forEach(link => {
    link.addEventListener('click', selectContent);
});

loadContent(url);