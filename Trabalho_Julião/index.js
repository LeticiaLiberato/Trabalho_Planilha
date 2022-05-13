document.querySelector("#calcular").addEventListener("click", (evento) =>{
event.preventDefault();
let v1= document.querySelector("#v1").value;
let v2=document.querySelector("#v2").value;
let v3=document.querySelector("#v3").value;

let v= Number(v1)+ Number(v2)+ Number(v3);
document.querySelector ('#v4').value=v;

let v5= document.querySelector("#v5").value;
let v6= document.querySelector("#v6").value;

let sh = Number(v5)+ Number(v6);
document.querySelector ('#show').value=sh;

let v4= document.querySelector("#v4").value;
let show= document.querySelector("#show").value;
let l= Number(v4)-Number(show);
 document.querySelector('#total').value=l;
   

})

document.querySelector("#cancelar").addEventListener("click", (evento) =>{
event.preventDefault();

 
 limpar();
})


function limpar() {

    document.querySelector('#v1').value = "";
    document.querySelector('#v2').value = "";
    document.querySelector('#v3').value = "";
    document.querySelector('#v4').value = "";
    document.querySelector('#v5').value = "";
    document.querySelector('#v6').value = "";
    document.querySelectorAll('#sh').value="";
    document.querySelector('#l').value = "";
    document.querySelector('#show').value = "";
    
}
