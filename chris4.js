let box = 0;
let mensageiro = document.getElementById("mensageiro");

let mensageiroX = 16;
let mensageiroY = 0;

let dado = document.getElementById("dado");
let valorDado = 0;

function gerarNumero(){
    let numero = Math.floor( (Math.random() * 6) + 1);
    return numero;
}

function jogaDado(){
    dado.removeEventListener("click",jogaDado);
    dado.style.cursor = "not-allowed";

    let repeticao = setInterval ( function(){
        dado.classList.add("mexer");
        valorDado = gerarNumero();

        dado.innerHTML = "";

        for(let i=0; i<valorDado; i++){
            let ponto = document.createElement("div");
            ponto.classList.add("ponto");
            dado.appendChild(ponto);
        }

},80);

setTimeout(function(){
    clearInterval(repeticao);
    dado.classList.remove("mexer");
    let boxFinal = box + valorDado;
    avancar(boxFinal);
},1000);



}

dado.addEventListener("click",jogaDado);







function avancar(boxFinal){

    let repeticao = setInterval(function(){
        mensageiro.className = "";
        
        if(box < 9){
            mensageiro.classList.add("direita");
            mensageiroX += 1;

            if( (mensageiroX-16)%64 == 0){
                box++;
            }
        }else if(box >= 9 && box < 15){
            mensageiro.classList.add("descendo");
            mensageiroY+=1;
            if(mensageiroY%64 == 0){
                box++;
            }
        }else if(box >= 15 && box <24){
            mensageiro.classList.add("esquerda");
            mensageiroX-=1;
            if((mensageiroX-16) %64 == 0){
                box++;
            }
        }else if(box >= 24 && box <29){
            mensageiro.classList.add("subindo");
            mensageiroY-=1;
            if(mensageiroY%64 == 0){
                box++;
            }
        }else if(box >=29 && box < 37){
            mensageiro.classList.add("direita");
            mensageiroX += 1;

            if( (mensageiroX-16)%64 == 0){
                box++;
            }

        }else if(box >= 37 && box < 40){
            mensageiro.classList.add("descendo");
            mensageiroY+=1;
            if(mensageiroY%64 == 0){
                box++;
            }

        }



        mensageiro.classList.add("andando");
        mensageiro.style.left = mensageiroX+"px";

        mensageiro.style.top = mensageiroY+"px";

        if(box >= boxFinal || box == 40){
            clearInterval(repeticao); //para a repetição
            mensageiro.classList.remove("andando");
            dado.addEventListener("click",jogaDado);
            dado.style.cursor = "pointer";
        }
    },10);

}
