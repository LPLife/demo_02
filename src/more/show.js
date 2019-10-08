let a ='df';
console.log(a);
function show(content) { 
    window.document.getElementById("app").innerText = "Hello " + content; 
}
module.exports = show;