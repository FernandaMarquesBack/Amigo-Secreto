let amigo = [];
let nomeDoAmigo = document.getElementById("amigo").value;

function adicionarAmigo() { 
    nomeDoAmigo = document.querySelector("input").value;
    
     if (nomeDoAmigo === ''){
      resultado.innerHTML="Por favor, inserira um nome.";
      resultado.style.color = "red";
      return;
    }
      if (amigo.includes(nomeDoAmigo)){
        resultado.innerHTML="Por favor, digite um nome diferente do outro.";
        resultado.style.color = "red";
        return;
      }

    amigo.push(nomeDoAmigo)
      resultado.style.color = "green";
      resultado.innerHTML="Nome registrado com sucesso!";
    
      atualizarListaAmigos();
      limparCampo();
    }

    function atualizarListaAmigos(){
      const listaAmigos = document.getElementById("listaAmigos");
      listaAmigos.innerHTML='';

      amigo.forEach( nome =>{
        const novoItem = document.createElement("li");
        novoItem.textContent = nome; 
        listaAmigos.appendChild(novoItem);
      })
      
    }
    function sortearAmigo(){
      if (amigo.length === 0) {
        resultado.innerHTML="Lista vazia, adicione amigos antes de sortear!";
        resultado.style.color = "red";
      }
      if (amigo.length === 1) {
        resultado.innerHTML="Só tem um amigo na lista, sorteio impossível!";
        resultado.style.color = "red";
      }
      let nomeSorteado = Math.floor(Math.random()* amigo.length)
      let amigoSorteado= amigo [nomeSorteado];

      resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
      resultado.style.color = "green";

      amigo.splice(nomeSorteado, 1);
      atualizarListaAmigos();
    }


        //
    
    
/*   // Seleciona a <ul> pelo ID

    // Cria um novo item <li>
    
      // Adiciona o <li> dentro da <ul>
  */
   

     limparCampo();
   
 function limparCampo(){
  limpar= document.querySelector("input");
  limpar.value = '';
 }












































