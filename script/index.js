'use strict'
const nav = document.getElementById("meno");
const navfixa=nav.offsetTop;
// var close = document.getElementById('sai');
// var open = document.querySelector(".p_verde");
let duvidaGeral = document.querySelector('.duvida-geral');
const adicionar = document.querySelectorAll('.quant img');
var soma = document.querySelector("#soma");
const rolagem =document.querySelectorAll('.scroll');
const evento = document.querySelectorAll('.principal .secao .p_verde');

var conta= 0;
var conta1= 1;
var conta2 = 1;
var s = 0;
var d = 10;
var a = 0;
let quanti;
let corClient;
let valor;
let input;
let resu;
let input2 =1;
let non3;
let valor1
let conteine;
let tama;
var dois = 0;
let car;
let novopro;

// Para evitar acesso de HTTP
// if (window.location.protocol !== 'https:') {
//     window.location.href = `https://${window.location.host}${window.location.pathname}`;
// }
/*chama a função fixa scroll ----*/
window.onscroll=function(){fixar();};

/*----função scroll do menu fixado no topo--------*/
function fixar(){
    let logo = document.querySelector(".image")
    if(window.pageYOffset >= navfixa){
        nav.classList.add("fixado");
        logo.style.display = "block";
    }else{nav.classList.remove("fixado");
        logo.style.display = "none";}
 };

 /* ---------butão fechar do popup--------*/
  function sai() {
    var adde = document.getElementById("add");
    if(adde.style.display === 'none'){
        adde.style.display = "none"
    }else{adde.style.display = "none"}
    
    calculo1.forEach((element) =>{tot -= parseInt(element.textContent)})
      soma.innerHTML = tot;
};
 
/*---------entrar no popup------ */
evento.forEach(descri =>{descri.addEventListener('click', disparo);})

//evento disparo
function disparo(event){
    if( duvidaGeral.style.display = 'none'){
        duvidaGeral.style.display = 'block'
    }
    const funcao = event.target.parentNode.parentNode
    conteine = funcao.getElementsByClassName('produt')[0].innerText
    tama = funcao.getElementsByClassName('port-verd')[0].src
    valor = funcao.getElementsByClassName('valor')[0].innerText
    const carrosel = document.querySelector(".carrossel");
    carrosel.style.display = "none"

    novopro = document.createElement('tr');

    novopro.innerHTML = 
    ` <td class='blue' > <img class="itemImg" src=" ${tama} " alt=""></td>    
    <td class='infor'  ><div class="infor">
        <h1 class="fume"> ${conteine}</h1>
        <P class="calcu" id="valor">${valor} </P>
    </div></td>
    
    
    
    <td class='blue'>  <div class="quant">
    <i class="menos">-</i>
    <input class="add" type="text" value="1" >
    <i class="mais">+</i>
    
</div></td>`
 chat = document.querySelector(".seu");
chat.append(novopro);

novopro.getElementsByClassName('menos')[0].addEventListener('click', () => {
   input = novopro.getElementsByClassName('add')[0];
   input.value = Math.max(0, parseInt(input.value) - 1); // Garante que o valor não será negativo

   conta = parseInt(document.getElementById('valor').textContent);
       valor1 = conta - calculo
       document.getElementById('valor').textContent = valor1;;
    
       if(input.value == 0){
        novopro.innerHTML = " ";
        negativo()
        input2 = 0
    }})

 //mais..
 novopro.getElementsByClassName('mais')[0].addEventListener('click', () => {
    input = novopro.getElementsByClassName('add')[0];
     input.value = parseInt(input.value) +1;
     input2 = input.value
     conta = parseInt(document.getElementById('valor').textContent);
     valor1 = conta + calculo
     document.getElementById('valor').textContent = valor1;});

 calculo = novopro.getElementsByClassName("calcu")[0].innerHTML;
 calculo = parseInt(calculo);
 valor1 = valor
 }

    //botão de sair da seleção do carrimho
    function negativo(){
        if( duvidaGeral.style.display = 'block'){
            duvidaGeral.style.display = 'none'
        }
        novopro.innerHTML = " ";
        const carrosel = document.querySelector(".carrossel");
    carrosel.style.display = "block"
    }

    //evento de escolha para seleção ao carrinho
function positivo(){
    car = document.querySelector('.carrinho .car');
    if(car.style.display === 'none'){
        car.style.display = 'block'
    }else{car.style.display = 'block'}
    car.innerHTML = dois +=1
    duvidaGeral.style.display = 'none'
    chat.innerHTML = ' '
    itens ={
        // Nome: 'Maria',
        // Celular: '94 98422-5367',
         Produto: conteine,
         Cor: tama,
        // Descrição: quanti,
         Quantidade: input2,
         Valor: valor1
    }
    cliente(itens)
    lerClient()
    quantidade()
    
};

let formattedText;
 function limpao(productName, element) {
    let dbclient = getobj();
    // Filtrar para remover o produto pelo nome
    dbclient = dbclient.filter(client => client.Produto !== productName);
    // Atualizar o localStorage com o array filtrado
    insert(dbclient);
    car.innerHTML = dois -=1;
    // Remover a linha correspondente da tabela
    const row = element.closest('tr');
    row.remove();
    if(car.innerHTML === '0'){
        car.style.display = 'none'
    }
       
};
let tot = 0;
let novopro1;
let conta4;
let calculo;
let chat;

function horario(){
    const status = document.querySelector('.banner .atendimento');
    const data = new Date();
    const dias = data.getDay();
    const hora = data.getHours();
    
    const aberto = 8;
    const fechado = 18;
    const funcionamento = [1, 2, 3, 4, 5];
    if(funcionamento.includes(dias) && hora >= aberto && hora < fechado){
        status.style.backgroundColor  = "green";
        status.innerHTML = 'Aberto'
    }else {
        
        status.innerHTML = 'Fechado';
    }
}

//Animação Carrossel
let slideIndex = 0;
const intervalTime = 5000; // Tempo em milissegundos
let slides;
function showSlide(index) {
    slides = document.querySelectorAll('.slide');
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
    slides[slideIndex].classList.add('active');
}

function moveSlide(direction) {
    slideIndex += direction;
    showSlide(slideIndex);
}

// Inicializa o carrossel
showSlide(slideIndex);

// Função para passar automaticamente
function autoSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

// Define o intervalo de mudança automática
setInterval(autoSlide, intervalTime);


function escolha(){ 
const add = document.getElementById('add');
if(add.style.display === "block"){
    add.style.display = "none"
}else{add.style.display = "block"}
 clienttable()
 vix()
 
}

function quantidade(){
    if(input2 >=2){
        input2 = 1
    }
}

function vix(){
    calculo1.forEach((element) =>{
        tot += parseInt(element.textContent)})
        soma.innerHTML= tot;
        lerClient()
 }
 
/*acesso ao Controle de Venda*/
    const control = document.getElementById('control')
    const page = document.querySelector('.pageClient')
    let formular;
    function fechar(){
        control.style.display = 'none'
            formular.style.display = 'none'
            const email = document.getElementById('email')
        const senha = document.getElementById('senha')
        email.value = ''
        senha.value = ''
        label.style.display = 'none'
        label1.style.display = 'none'
        page.style.display = 'block'
       }

    // formulario login
    let label;
    let label1;
    function enviar(){
        label = document.getElementById('labe')
         label1 = document.getElementById('labe1')
        const inicial =  document.querySelector('.pageClient')
        const email = document.getElementById('email').value 
        const senha = document.getElementById('senha').value
        if(email == 'francisco@gmail.com' && senha =='Ayla123'){
            control.style.display = 'block'
            formular.style.display = 'none'
            page.style.display = 'none'
           } 
             else{
                formular.style.display = 'block'
                label.style.display = 'block'
                label1.style.display = 'block'
            }
            // clienttable()
    }
horario()
    function sair1(){
        formular.style.display = 'none'
        const email = document.getElementById('email')
        const senha = document.getElementById('senha')
        email.value = ''
        senha.value = ''
        label.style.display = 'none'
        label1.style.display = 'none'
       }

    function entrar(){
        formular = document.querySelector('.corpo-formulario');
        formular.style.display = 'block';
    }

rolagem.forEach(scrol =>{
    scrol.addEventListener("click", interar);
    
})
function interar(event){
    let conteudo = event.target;
    let conca = conteudo.getAttribute('id');
    let sesao =document.querySelector(conca).offsetTop
    
    window.scroll({
        top: sesao -100,
        behavior: "smooth"})

};



//CRUD CREATE, UPDATE, READ, DELETE
//create
const getobj = () => JSON.parse(localStorage.getItem("db_list")) ?? [];
const insert = (dbclient) => localStorage.setItem("db_list", JSON.stringify(dbclient));
    
const formatarDados = () => {
    const dbclient = getobj();  // Pega todos os objetos armazenados no localStorage

    // Usa map para percorrer cada objeto e transformá-lo em uma string formatada
     formattedText = dbclient.map(client => 
        `*Produto:* ${client.Produto}, *Quantidade:* ${client.Quantidade}, *Valor:* ${client.Valor}`
    ).join('\n');  // Usa join para unir todas as strings com uma quebra de linha
};


//READ
const lerClient = () => getobj();
const atualizar = (index, client) => {
    const dbclient = lerClient()
    dbclient[index] = client
    insert(dbclient)
}
//let vid = JSON.stringify(getobj());

const cliente = (client)=>{
    const dbclient = getobj()
    dbclient.push(client)
    insert(dbclient)   
};

let newRow
 const addRow = (client) =>{
    newRow = document.createElement('tr')
    newRow.setAttribute('data-product', client.Produto);
    newRow.innerHTML = ` <td class='blue' > <img class="itemImg" src=" ${client.Cor} " alt=""></td>    
    <td class='infor'>
     
    
       <h1 class="fume"> ${client.Produto}</h1>
        <P class="calcu1" id="valor1">${client.Valor} </P>
    </td>
    
    <td class='blue'>  <div class="quant">
   
    <input class="add" type="text" value="${client.Quantidade}" >
    <i class="mais" id="lixeira">🗑️</i>
    
</div></td>`

//     newRow.innerHTML = `
//     <td class="import">Maria</td>
//     <td class="import">949845-67027</td>
//     <td>${client.Produto}</td>
//     <td>${client.Cor}</td>
//     <td>${client.Descrição}</td>
//     <td>${client. Quantidade}</td>
//     <td>R$ ${client.Valor}</td>
// `;
    const tbody = document.querySelector("#seu1 #tb");
    tbody.appendChild(newRow);
     calculo1 = document.querySelectorAll("#valor1")
    const deleteIcon = newRow.querySelector('#lixeira');
    deleteIcon.addEventListener('click', function() {
        limpao(client.Produto, deleteIcon); // Chama limpao passando o nome do produto e o elemento
    });
    
 }
 let calculo1;
 
const exclurtabela = () =>{
    const linhas = document.querySelectorAll('#seu1>tbody tr')
    linhas.forEach(cada => cada.parentNode.removeChild(cada))
}

//remover todos os Dados do localstorage
const removerChave = (key) => {
    localStorage.removeItem(key);  // Remove a chave e seu conteúdo
    console.log(`Chave '${key}' removida do localStorage.`);
};

//Remover Linhas da tableLayout: 
const removerLinha = () => {
   let lixeira = document.querySelectorAll("#lixeira");
   lixeira.forEach(button =>{
    button.addEventListener('click', (event) =>{
        const linha = event.target.closest('tr');  // Seleciona a linha (tr) onde o botão foi clicado
        const nomeProduto = linha.querySelector('.produto').textContent;  // Pega o nome do produto da célula correspondente
        removerProduto(nomeProduto);
    })
   })
};



const clienttable = () =>{
    const usuario = lerClient()
    exclurtabela()
    usuario.forEach(addRow)
    
}


let input4
let resumo;
let itens;
const popupPrincipal = document.querySelector(".popupAdress-principal");

function save(){
    const params = new URLSearchParams(window.location.search);
  const origem = params.get('utm_source');
  const mesa = params.get('mesa') || "não informada";

  // Se veio por QR Code com mesa
  if (origem === 'qr' && mesa !== "não informada") {
    
    // Vai direto para a função que envia o pedido para a cozinha
    vix()
    sairPopup()
    formatarDados();
    lerClient()
    var observa = document.getElementById("obs").value;
    var Rua = document.getElementById("Rua").value;
    var Bairro = document.getElementById("Bairro").value;
     resumo =
     `
     Olá!
     _Segue o resumo do seu pedido:_
     
     🗒️ *Pedido Da Mesa:* _${mesa}_
     ${formattedText}
     

     
     🚚 *Tempo de Entrega:* 20 minutos
     💳 *Total a Pagar:* R$ ${valor}

     OBS: _${observa}_
     
     Forma de Pagamento:
     PIX
     Credito ou Débito
     _____________________________

     Obrigado pela sua compra! 😊
     _____________________________
     `
    
    
    var mensagem = encodeURIComponent(resumo);
    var linkzap = `https://wa.me/5594984333958?text=${mensagem}`;
    window.location.href = linkzap; 
     removerChave('db_list');
    console.log(resumo) // esta função já trata o pedido direto

    // Limpar interface e variáveis
exclurtabela(); 
car.innerHTML = '0';
car.style.display = 'none';
soma.innerHTML = '0';
tot = 0;
dois = 0;
    return; // Interrompe o restante da função
  }

    sai()
    if( popupPrincipal.style.display = "none"){
   popupPrincipal.style.display = "block"
}else{popupPrincipal.style.display = "none"}
car.style.display = 'none'
    };

   function sairPopup(){
    const limparInput = document.querySelector(".textInput")
    popupPrincipal.style.display = "none"
    limparInput.innerHTML = ' '
    }
    // Formulari de Endereço
  function popupAdress(){
    vix()
    sairPopup()
    formatarDados();
    lerClient()
    var preco = tot + d;
    var observa = document.getElementById("obs").value;
    var Rua = document.getElementById("Rua").value;
    var Bairro = document.getElementById("Bairro").value;
     resumo =
     `
     Olá!
     _Segue o resumo do seu pedido:_
     
     🗒️ *Resumo do Pedido:*
     ${formattedText}
     
     _____________________________
     *Bairro:* _${Bairro}_
     *Rua:* _${Rua}_
     _____________________________

     💰 *Subtotal:* R$ ${tot}
     🚚 *Taxa de Entrega:* R$ 10,00
     💳 *Total a Pagar:* R$ ${preco}

     OBS: _${observa}_
     
     Forma de Pagamento:
     PIX
     
     _____________________________

     Obrigado pela sua compra! 😊
     _____________________________
     `
    
    
    var mensagem = encodeURIComponent(resumo);
    var linkzap = `https://wa.me/5594984333958?text=${mensagem}`;
    window.location.href = linkzap; 
    removerChave('db_list');
    console.log(resumo)
  }



  // Adiciona destaque vermelho no texto do item correspondente à seção visível
  window.addEventListener("scroll", () => {
    const itensMenu = document.querySelectorAll(".scroll div");
  
    itensMenu.forEach(item => {
      const idComHash = item.getAttribute("id");     // "#port"
      const idSecao = idComHash.replace("#", "");    // "port"
      const secao = document.getElementById(idSecao); // <div id="port">
  
      if (!secao) return;
  
      const topo = secao.offsetTop - 120;  // margem de ajuste
      const fundo = topo + secao.offsetHeight;
      const scrollY = window.scrollY;
  
      if (scrollY >= topo && scrollY < fundo) {
        item.classList.add("ativo");
      } else {
        item.classList.remove("ativo");
      }
     

      // Faz o item ativo rolar até o centro visível do menu
if (scrollY >= topo && scrollY < fundo) {
    item.classList.add("ativo");
    item.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    
  } else {
    item.classList.remove("ativo");
  }
    });
  });
  
  