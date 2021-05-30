const vaga = document.getElementById('vaga')

const vagasOcupadas = [
  {
    id:1,
    placa: 'xxxx-1234',
    nome: 'Matheus Feitosa',
    modelo: 'ferrari f-50'
  },
  {
    id:10,
    placa:'llll-5555',
    nome:'Lucas Damasceno',
    modelo:'fusca'
  },
  {
    id:22,
    placa:'llll-5555',
    nome:'Joyce Andrade',
    modelo:'fusca'
  },
  {
    id:25,
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
  for( let i = 1 ; i <= 36 ; i++ ){
    if( num.indexOf(i) >= 0 ){
      for( let c = 0 ; c < vagasOcupadas.length ; c++ ){
        if(vagasOcupadas[c].id === i){

          vaga.innerHTML += 
        `
          <div class="col-12 col-md-3 col-lg-2 mt-2 mb-2 cartoes" id=${i}> 
            
            <div class="card border-danger" style="cursor:pointer" >
              <div class="card-content" data-toggle="tootip"  title=${vagasOcupadas[c].nome} >
                <div class="card-body" onclick="abrir(${i}) ">
                  <div>
                    Placa:  ${vagasOcupadas[c].placa}
                  </div>  
                <input type="image" src="../../img/remove_circle_outline_black_24dp.svg" />
                 <input type="image" src="../../img/edit_black_24dp.svg"/>    
                </div>
              </div>
            </div>

          </div>
        `

        }
      }
      
  
    }else{
      
    
      vaga.innerHTML += 
      `
        <div class="col-12 col-md-3 col-lg-2 mt-2 mb-2 cartoes" id=${i}> 
          
          <div class="card border-success "style="cursor:pointer">
            <div class="card-content">
              <div class="card-body justify-content-center"  >
                <span> ${i}</span>
              </div>
              <input type="image" src="../../img/input_black_24dp.svg" data-toggle="tootip"  title="Check in"/>
            </div>
          </div>
        
        </div>
      `
    }
    
  }

}



//data-toggle="tootip"  title=${vagasOcupadas[i]}

/*

    <input type="image" src="../../img/remove_circle_outline_black_24dp.svg" />
                  <input type="image" src="../../img/edit_black_24dp.svg"/>  

*/ 