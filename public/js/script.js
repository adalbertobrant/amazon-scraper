document.getElementById('scraper-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var asin = document.getElementById('asin').value;
    var keyword = document.getElementById('keyword').value;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/your-backend-url', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        asin: asin,
        keyword: keyword
    }));

    xhr.onload = function() {
        document.getElementById('result').textContent = 'Position: ' + this.responseText;
    };
});

