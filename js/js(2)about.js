let control = true;
var st = true;

function Loading(){
    document.getElementById("central").style.animation = "loadingAction 4s";
    setTimeout(()=>{
        $("#Loading").toggle();
    },2000)
}

function Menu(){
    if(st){
        $(".navLeft").removeClass("CONTROL");
        $(".navRight").removeClass("CONTROL");
        $("p").removeClass("menuClosed").addClass("menuOpen");
        st = false;
    }
    else{
        $(".navLeft").addClass("CONTROL");
        $(".navRight").addClass("CONTROL");
        $("p").removeClass("menuOpen").addClass("menuClosed");
        st = true;
    }
}

let texts = [
    "HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores.",
    "Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags <style>.",
    "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma."
]
let c = document.getElementById("Text");
function edit(numero){
    c.innerText = texts[numero];
    c.style.textIndent = "7%";
}

function EDITDISPLAY(numero){
    if(numero==1){
        $("#DisplayOne").addClass("REMOVE");
        $("#DisplayTwo").addClass("ADD").removeClass("REMOVE");
    }
    else{
        $("#DisplayOne").addClass("ADD").removeClass("REMOVE");
        $("#DisplayTwo").addClass("REMOVE").removeClass("ADD");
    }
}

