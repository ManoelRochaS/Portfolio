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
        $("h1").removeClass("ADD").addClass("REMOVE");
        $("h2").removeClass("ADD").addClass("REMOVE");
        $("h3").removeClass("ADD").addClass("REMOVE");
        $("a").addClass("DisplayConfigure");
        st = false;
    }
    else{
        $(".navLeft").addClass("CONTROL");
        $(".navRight").addClass("CONTROL");
        $("p").removeClass("menuOpen").addClass("menuClosed");
        $("h1").removeClass("REMOVE").addClass("ADD");
        $("h2").removeClass("REMOVE").addClass("ADD");
        $("h3").removeClass("REMOVE").addClass("ADD");
        $("a").removeClass("DisplayConfigure");
        st = true;
    }
}

$(document).ready(()=>{
    $("h3").click(()=>{
        if(control){
            document.getElementById("DisplayOne").style.color="transparent";
            setTimeout(()=>{
                $("#DisplayOne").toggle()
            },2000);
            setTimeout(()=>{
                $("#DisplayTwo").toggle(1000)
                setTimeout(()=>{
                    document.getElementById("DisplayTwo").style.display = "flex";
                },1100)
            },2500)
            control = false;
        }
    })
})

function hoverin(numero){
    document.getElementsByClassName("Central")[numero].style.opacity = 1;
    document.getElementsByClassName("Central")[numero].style.transition = "all 0.7s linear";
}

function hoverout(){
    for(i = 0; i<3; i++){
        document.getElementsByClassName("Central")[i].style.opacity = "0";
    }
}

$(document).ready(()=>{
    $(".currentLink").click(()=>{
        if(!control){
            document.getElementById("DisplayTwo").style.display = "none";
            $("#DisplayOne").toggle();
            setTimeout(()=>{
                document.getElementById("DisplayOne").style.color="white";
            },1000);
            control = true;
        }
    })
})
