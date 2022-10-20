let control = true;
var st = true;

function loading(){
    document.getElementById("central").style.animation = "loadingAction 4s";
    setTimeout(()=>{
        $("#Loading").toggle();
    },2000)
}

function menu(){
    if(st){
        $(".navLeft").removeClass("CONTROL");
        $(".navRight").removeClass("CONTROL");
        $("p").removeClass("menuClosed").addClass("menuOpen");
        $("section").addClass("REMOVE").removeClass("ADD");
        st = false;
    }
    else{
        $(".navLeft").addClass("CONTROL");
        $(".navRight").addClass("CONTROL");
        $("p").removeClass("menuOpen").addClass("menuClosed");
        $("section").addClass("ADD").removeClass("REMOVE");
        st = true;
    }
}
