// dynamicContent.js

document.getElementById("loadContentBtn").addEventListener("click", function() {
    fetch('content.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById("contentContainer").innerHTML = data;
        })
        .catch(error => console.log('Error loading content:', error));
});
