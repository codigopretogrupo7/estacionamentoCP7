const vaga = document.getElementById('vaga')

for( let i = 1 ; i <= 40 ; i++ ){
  if( i == 10 ){
    vaga.innerHTML += 
    `
      <div class="col-2  mt-2 mb-2" > 
        <div class="card">
          <div class="card-content">
            <div class="card-body">
              <div class="media d-flex">
                <div class="align-self-center">
                  <i class=" primary font-large-2 float-left"></i>
                </div>
                <div class="media-body">
                <p >
                placa: xxxx-1234
                nome: Matheus Feitosa
                modelo: ferrari f-50
              </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }
  
  vaga.innerHTML += 
  `
    <div class="col-1 mt-2 mb-2" > 
      <div class="card">
        <div class="card-content">
          <div class="card-body">
            <div class="media d-flex">
              <div class="align-self-center">
                <i class=" primary font-large-2 float-left"></i>
              </div>
              <div class="media-body">
                <span>Vaga ${i} Livre</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
  
}