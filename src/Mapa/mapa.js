const vaga = document.getElementById('vaga')


// Vagas Fakes
const vagasOcupadas = [
  {
    id: 1,
    placa: 'abcd-1234',
    nome: 'Matheus Feitosa',
    modelo: 'ferrari f-50'
  },
  {
    id: 10,
    placa: 'efgh-5678',
    nome: 'Lucas Damasceno',
    modelo: 'fusca'
  },
  {
    id: 22,
    placa: 'ijkl-9101',
    nome: 'Joyce Andrade',
    modelo: 'fusca'
  },
  {
    id: 25,
    placa: 'mnop-1213',
    nome: 'Marcos Andre',
    modelo: 'fusca'
  }


]

let numeroDasVagasOcupadas = []

// verifica quais vagas fakes estao ocupadas e joga os numeros no array num acima
for (let i = 0; i < vagasOcupadas.length; i++) { 
  numeroDasVagasOcupadas.push(vagasOcupadas[i].id)
}

function carregaVagas() {
  for (let i = 1; i <= 36; i++) { 
    //Esse for cria um numero de vagas determinado ( no caso 36 )

    if (numeroDasVagasOcupadas.indexOf(i) >= 0) { // se existir um numero igual ao i no array 'numeroDasVagasOcupadas'... 
      for (let c = 0; c < vagasOcupadas.length; c++) { //roda todas as vagas ocupadas e....
        if (vagasOcupadas[c].id === i) { //verifica se o id da vaga ocupada é igual ao i pra poder escrever o html abaixo

          vaga.innerHTML +=
          `
            <div class="col-12 col-md-3 col-lg-2 mt-2 mb-2 cartoes" id=${i}> 
              <div class="card border-danger" style="cursor:pointer" >
                <div class="card-content " data-toggle="tootip"  title=${vagasOcupadas[c].nome} >
                  <div class="card-body" onclick="abrir(${i}) ">
                    <div>
                        Placa:  ${vagasOcupadas[c].placa}
                    </div> 
                    <div class="d-flex justify-content-center align-itens-center mt-1">
                      <a href="../Forms/checkout.html" class="mr-2">
                        <input type="image" src="../../img/remove_circle_outline_black_24dp.svg" />
                      </a>
                      <a href="../Forms/checkin.html"> 
                        <input type="image" src="../../img/edit_black_24dp.svg" />  
                      </a> 
                    </div>  
                  </div>
                </div>
              </div>
            </div>
          `

        }
      }


    } else { // se nao tiver um numero igual no numeroDasVagasOcupadas cria esse html de vaga vazia


      vaga.innerHTML +=
      `
        <div class="col-12 col-md-3 col-lg-2 mt-2 mb-2 cartoes" id=${i}>   
          <div class="card border-success "style="cursor:pointer">
            <div class="card-content">
              <div class="card-body justify-content-center"  >
                <span>Vaga: ${i}</span>
                <div class="d-flex justify-content-center align-itens-center mt-1">
                  <a href="../Forms/checkin.html">
                    <input type="image" src="../../img/input_black_24dp.svg" data-toggle="tootip"  title="Check in"/>
                  </a>
                </div>
              </div>
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