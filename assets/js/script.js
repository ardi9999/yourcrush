function play() {
    var audio = new Audio("./assets/lagu/crush.mp3");
    audio.play();
}

function display(){
    document.getElementById("photo").style.display = "block";
    document.getElementById("content").style.display = "block";
}

function ketiknamamu(){
    if (d < textNamamu.length){
        document.getElementById("namamu").innerHTML += textNamamu.charAt(d);
        d++;
        setTimeout(ketiknamamu, 150);
    }
    if (d == textNamamu.length){
        ketik();
    }
}

function ketik(){
    if(i < text.length){
        document.getElementById("text-isi").innerHTML += text.charAt(i);
        i++;
        setTimeout(ketik, 225);
    }
    if(i == text.length){
        ketikt();
    }
}

function ketikt(){
    if(x < textAuthor.length){
        document.getElementById("text-author").innerHTML += textAuthor.charAt(x);
        x++;
        setTimeout(ketikt, 100);
    }
    if (x == textAuthor.length){ 
        document.getElementById("button").style.display = "block";
    }
}