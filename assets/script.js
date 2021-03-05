var button = document.querySelectorAll('.button');

button.forEach(btn => {
    btn.addEventListener('click', function() {
        console.log(btn.attributes["data-key"]);
    })
});

