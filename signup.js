

function error(submit){
    var err= document.getElementById('form');
    var err1= document.getElementById('form1');
    var err2= document.getElementById('form2');
    var err3= document.getElementById('form3');
    

    if (!err.checkValidity()){
        err.classList.add("ipbox");
        err1.classList.add("ipbox");
        err2.classList.add("ipbox");
        err3.classList.add("ipbox");
        return false;
    }
    else{
        return false;
    }
}

function opacityremover(){
    var err= document.getElementById('form');
    var remover=document.getElementsByClassName("err");
    if (!err.checkValidity()){
        remover.classList.remove("l");
    }
    else{
        remover.classList.add("l");
    }
}