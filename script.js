function zmienTekst() {
  alert("witamy na stronie")
}
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

dodawanie()

function dodawanie(){
    var a = prompt("");
    var b = prompt("");

    console.log(+a + +b);
    console.log(parseInt(a) + parseInt(b));
}
setInterval(time, 1000)

function time(){
    var date =new Date()

    var hour =date.getHours();
    var minute =date.getMinutes();
    var second =date.getSeconds();
    
    document.getElementById("tekst").innerHTML =
    `${hour}:${minute}:${second}` 
}

function game(){
    var number = Math.floor(Math.random()*100);
    var shot = -1;
    var count = 0;
    while(number != shot) {
        shot = prompt("");
        count++
        if(number > shot) {
            alert("za mała");
        }
        else if(number < shot){
            alert("za duza")
        }
        else {
            alert(`Zgadłem ${count}`)
        }
    }
}