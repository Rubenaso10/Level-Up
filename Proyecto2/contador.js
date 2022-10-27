let contador = 0;

document.getElementById("incrementar").onclick = function(){
    contador++;
    document.getElementById("etiq_cont").innerHTML = contador;
    if(contador>0){
        document.getElementById("etiq_cont").style.color="green";
    }
    
}

document.getElementById("resetear").onclick = function(){
    contador=0;
    document.getElementById("etiq_cont").innerHTML = contador;
    if(contador==0){
        document.getElementById("etiq_cont").style.color="black";
    }
    
}

document.getElementById("disminuir").onclick = function(){
    contador--;
    document.getElementById("etiq_cont").innerHTML = contador;
    if(contador<0){
        document.getElementById("etiq_cont").style.color="red";
    }
    
}

