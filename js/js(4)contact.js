let control = true;
var st = true;

function Loading(){
    document.getElementById("central").style.animation = "loadingAction 4s";
    setTimeout(()=>{
        document.getElementById("Loading").style.backgroundImage = "linear-gradient(to bottom right transparent, #042d5f, #000000)";
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
