var loader = document.getElementById("pre-loader");
window.addEventListener("load", function()
{
    loader.style.display = "none";
})

setInterval(loader, 15000);

function loader() {
  const d = new Date();
  document.getElementById("loader").innerHTML = d.toLocaleTimeString();
}