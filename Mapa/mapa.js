const vaga = document.getElementById('vaga')

// array de vagas ocupadas
const vagasOcupadas = [
  
  {
    id:9,
    placa: 'xxxx-1234',
    nome: 'Matheus Feitosa',
    modelo: 'ferrari f-50'
  },
  {
    id:1,
    placa:'llll-5555',
    nome:'Lucas Damasceno',
    modelo:'fusca'
  },  
  
]

let numuroDasVagasOcupadas = []

// esse for indentifica quais sao as vagas utilizadas e joga elas em numuroDasVagasOcupadas(logo acima)
for( let i = 0 ; i < vagasOcupadas.length ; i++  ){
  numuroDasVagasOcupadas.push(vagasOcupadas[i].id)
}

// funçao carregada ao iniciar para mostrar as vagas
function carregaVagas(){
  for( let i = 1 ; i <= 20 ; i++ ){ // carrega vinte vagas
    if( numuroDasVagasOcupadas.indexOf(i) >= 0 ){ //verifica se a vaga[i] esta ocupada ou livre
  
        vaga.innerHTML += 
        `
          <div class="col-12 col-md-3 col-lg-2 mt-2 mb-2 cartoes" id=${i}> 
            
            <div class="card border-danger" style="cursor:pointer" >
              <div class="card-content">
                <div class="card-body" onclick="abrir(${i}) ">
                  <div>
                    Vaga ${i} Ocupada
                  </div>      
                </div>
              </div>
            </div>

          </div>
        `
      
  
    }else{ //vaga livre
      
    
      vaga.innerHTML += 
      `
        <div class="col-12 col-md-3 col-lg-2 mt-2 mb-2 cartoes" id=${i}> 
          
          <div class="card border-success "style="cursor:pointer">
            <div class="card-content">
              <div class="card-body" onclick="abrir(${i})">
                <span>Vaga ${i} Livre</span>
              </div>
            </div>
          </div>
        
        </div>
      `
    }
    
  }

}
// funçao que mostra o cartao aberto com as informaçoes
function abrir(n){
  const cartoes = document.getElementsByClassName('cartoes') 
  // coloquei essa constante aqui pois do lado de fora o js ainda nao carregou essas classes pois sao escritas com o js

  for( let i = 0 ; i < vagasOcupadas.length ; i++ ){    
    if( numuroDasVagasOcupadas.indexOf(n) >= 0 ){  
      if(n === vagasOcupadas[i].id){
        cartoes[n-1].innerHTML = `
         <div class="card border-danger ">
            <div class="card-content">
            <div class="tamanho">
              <p class=" mr-1 mt-1 brilho" onclick="fechar(${n})">
                <span class=" border rounded danger border-danger" style="padding:5px;cursor:pointer">
                x
                </span>
              </p>
            </div>
              <div class="card-body">   
                  <div>
                    Placa:</br> ${vagasOcupadas[i].placa}</br><hr>
                    Nome:</br> ${vagasOcupadas[i].nome}</br><hr>
                    Modelo:</br> ${vagasOcupadas[i].modelo}</br><hr>
                  </div>
                <button class="btn btn-danger m-2">Check-out</button>
              </div>
            </div>
          </div>
      `
      }
    }else{
      cartoes[n-1].innerHTML = 
      `    
        <div class="card border-success ">
          <div class="card-content">
            <div class="tamanho">
              <p class=" mr-1 mt-1 brilho " onclick="fechar(${n})">
                <span class=" border rounded danger border-danger" style="padding:5px;cursor:pointer">
                x
                </span>
              </p>
            </div>
            <div class="card-body" onclick="abrir(${n})">
              <span>Vaga ${n} Livre</span>
            </div>
            <button class="btn btn-success m-2">Check-in</button>
          </div>
        </div>
      `
    }
    
      
  }
}
// funçao que fecha o cartao
function fechar(n){
  const cartoes = document.getElementsByClassName('cartoes')

  for( let i = 0 ; i < vagasOcupadas.length ; i++ ){
    if( numuroDasVagasOcupadas.indexOf(n) >= 0 ){  
      if(n === vagasOcupadas[i].id){
       cartoes[n-1].innerHTML = `
       <div class="card border-danger " style="cursor:pointer">
          <div class="card-content">
            <div class="card-body" onclick="abrir(${n})">
                <div>
                  Vaga ${n} Ocupada
                </div>
            </div>
          </div>
        </div>
       `
      }
    
    }else{
      cartoes[n-1].innerHTML = 
      `    
        <div class="card border-success "style="cursor:pointer">
          <div class="card-content">
            <div class="card-body" onclick="abrir(${n})">
              <span>Vaga ${n} Livre</span>
            </div>
          </div>
        </div>
      `

    }
  }
}