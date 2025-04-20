const path = window.location.pathname.split("/")[1];
const base = path ? `/${path}` : "";

fetch(`${base}/components/navbar.html`)
    .then(res => res.text())
    .then(data => document.getElementById("header").innerHTML = data);

fetch(`${base}/components/footer.html`)
    .then(res => res.text())
    .then(data => document.getElementById("footer").innerHTML = data);