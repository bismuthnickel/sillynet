const silconsole = document.getElementById("sillyconsole");

document.addEventListener("keydown",(e)=>{
    silconsole.innerText += e.key;
});