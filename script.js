function pesquisar(){
// Obtém a seção HTML onde os resultados da pesquisa serão exibidos
let section = document.getElementById('resultados-pesquisa')
    


 // Inicializa uma string vazia para armazenar os resultados da pesquisa
 let resultados = "";
 

 // Itera sobre cada objeto na lista de dados
 for (let dado of dados) {
   
    // Cria uma nova div para cada resultado
    resultados += `
      <div class="item-resultado">
        <h2>
          ${dado.nome}
          
          <a href="#"onclick="mostrarHabilidades(this)">Skills</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
       
      </div>
    `;
  }
  section.innerHTML = resultados;

}
function mostrarHabilidades(link) {
    // Obtém o elemento pai (div.item-resultado)
    const itemResultado = link.parentNode.parentNode;
  
    // Obtém o índice do elemento atual na lista de resultados
    const indice = Array.from(itemResultado.parentNode.children).indexOf(itemResultado);
  
    // Obtém o objeto do personagem correspondente
    const personagem = dados[indice];
  
    // Cria um novo elemento para exibir a habilidade
    const habilidadeElement = document.createElement('p');
    habilidadeElement.textContent = personagem.habilidade;
  
    // Adiciona o elemento ao item de resultado
    itemResultado.appendChild(habilidadeElement);
 
  }
  


// Seleciona o botão pelo ID

// Adiciona um evento de clique ao botão

// <p>${dado.habilidade}</p>