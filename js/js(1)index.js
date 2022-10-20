let control = true;
var st = true;

function loading(){
    document.getElementById("central").style.animation = "loadingAction 4s";
    setTimeout(()=>{
        document.getElementById("Loading").style.backgroundImage = "linear-gradient(to bottom right transparent, #042d5f, #000000)";
        $("#Loading").toggle();
    },2000)
}

function menu(){
    if(st){
        $(".navLeft").removeClass("CONTROL");
        $(".navRight").removeClass("CONTROL");
        $("#DisplayOne").addClass("DisplayConfigure");
        $("#DisplayTwo").addClass("DisplayConfigure");
        st = false;
    }
    else{
        $(".navLeft").addClass("CONTROL");
        $(".navRight").addClass("CONTROL");
        $("#DisplayOne").removeClass("DisplayConfigure");
        $("#DisplayTwo").removeClass("DisplayConfigure");
        st = true;
    }
}

function editDisplay(numero){
    if(numero==1){
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
    }
    else{
        document.getElementById("DisplayOne").style.display = "flex";
        document.getElementById("DisplayOne").style.color = "white";
        document.getElementById("DisplayTwo").style.display = "none";
    }
}



function hoverIn(numero){
    document.getElementsByClassName("Central")[numero].style.opacity = 1;
    document.getElementsByClassName("Central")[numero].style.transition = "all 0.7s linear";
}

function hoverOut(){
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
