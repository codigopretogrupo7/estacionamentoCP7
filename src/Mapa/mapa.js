const vaga = document.getElementById('vaga')

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
  {
    id:20,
    placa:'llll-5555',
    nome:'Joyce Andrade',
    modelo:'fusca'
  }
  
  
]

let num = []

for( let i = 0 ; i < vagasOcupadas.length ; i++  ){
  num.push(vagasOcupadas[i].id)
}

function carregaVagas(){
  for( let i = 1 ; i <= 20 ; i++ ){
    if( num.indexOf(i) >= 0 ){
  
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
      
  
    }else{
      
    
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

function abrir(n){
  const cartoes = document.getElementsByClassName('cartoes')

  for( let i = 0 ; i < vagasOcupadas.length ; i++ ){    
    if( num.indexOf(n) >= 0 ){
      if(n === vagasOcupadas[i].id){
        cartoes[n-1].innerHTML = `
         <div class="card border-danger ">
            <div class="card-content">
            <div class="tamanho">
              <img src="./img/cancel_black_24dp.svg" onclick="fechar(${n})"/>   
            </div>
              <div class="card-body">   
                  <div>
                  <ul class="list-group list-group-flush">
                  <li class="list-group-item">${vagasOcupadas[i].placa}</li>
                  <li class="list-group-item">${vagasOcupadas[i].modelo}</li>
                  </div>
                  <input type="image" src="./img/remove_circle_outline_black_24dp.svg" onclick="location.href='1.html" />
                  <input type="image" src="./img/edit_black_24dp.svg"/>
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
            <img src="./img/cancel_black_24dp.svg" onclick="fechar(${n})"/>   
            </div>
            <div class="card-body" onclick="abrir(${n})">
              <span>Vaga ${n} Livre</span>
            </div>
            <input type="image" src="./img/input_black_24dp.svg"/>
          </div>
        </div>
      `
    }
    
      
  }
}

function fechar(n){
  const cartoes = document.getElementsByClassName('cartoes')

  for( let i = 0 ; i < vagasOcupadas.length ; i++ ){
    if( num.indexOf(n) >= 0 ){  
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