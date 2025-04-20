window.addEventListener("DOMContentLoaded", () => {
    fetch("components/navbar.html")
        .then(res => res.text())
        .then(data => document.getElementById("header").innerHTML = data);
  
    fetch("components/footer.html")
        .then(res => res.text())
        .then(data => document.getElementById("footer").innerHTML = data);
});