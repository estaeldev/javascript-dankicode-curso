var p = document.getElementsByTagName('p')

console.log(p[0].innerHTML);

p[0].innerHTML = "Manipulado via JS"

for(var i=0; i<document.getElementsByTagName('p').length; i++) {
    p[i].innerHTML = "Manipulando via JS - " + (i+1)
}

