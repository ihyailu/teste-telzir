class Ligacao {
    constructor(dddorigem, ddddestino, tempoliga, planoescolha) {
    this.dddorigem = dddorigem
    this.ddddestino = ddddestino
    this.tempoliga = tempoliga
    this.planoescolha = planoescolha
    this.valormin = "placeHolder"
    this.planoliga = "placeHolder"
    this.semplanoliga = "placeHolder"
    }

    validacao () {
        for(let i in this) {
            if(this[i] == undefined || this[i] == '' || this[i] == null) {
                return false
            }
        }
        return true
    }

    calcularligacao () {

        this.tempoliga = parseInt(this.tempoliga)
        this.planoescolha = parseInt(this.planoescolha)

        switch (true) {
            case this.dddorigem === "011" && this.ddddestino === "016":
                this.valormin = 1.9
                break
            case this.dddorigem === "016" && this.ddddestino === "011":
                this.valormin = 1.9
                break
            case this.dddorigem === "011" && this.ddddestino === "017":
                this.valormin = 1.7
                break
            case this.dddorigem === "017" && this.ddddestino === "011":
                this.valormin = 2.7
                break
            case this.dddorigem === "011" && this.ddddestino === "018":
                this.valormin = 0.9
                break
            case this.dddorigem === "018" && this.ddddestino === "011":
                this.valormin = 1.9
                break
        }

        this.planoliga = (this.tempoliga - this.planoescolha) * (this.valormin * 1.1)
        this.semplanoliga = this.tempoliga * this.valormin

        this.planoliga = this.planoliga.toFixed(2)
        this.semplanoliga = this.semplanoliga.toFixed(2)

        if (this.planoliga < 0) {
            this.planoliga = 0
        }

    }
}

function resultadoliga () {
    let dddorigem = document.getElementById ("ddd-origem")
    let ddddestino = document.getElementById ("ddd-destino")
    let tempoliga = document.getElementById ("tempo-liga")
    let planoescolha = document.getElementById ("plano-escolha")

    let resultadoliga= new Ligacao(
        dddorigem.value, 
        ddddestino.value, 
        tempoliga.value, 
        planoescolha.value, 
    )

    if(resultadoliga.validacao()) {
        resultadoliga.calcularligacao()

        
        document.getElementById('origem').innerHTML = resultadoliga.dddorigem
        document.getElementById('destino').innerHTML = resultadoliga.ddddestino
        document.getElementById('tempominutos').innerHTML = resultadoliga.tempoliga
        document.getElementById('planosfm').innerHTML = resultadoliga.planoescolha
        document.getElementById('tabelacom').innerHTML = resultadoliga.planoliga
        document.getElementById('tabelasem').innerHTML = resultadoliga.semplanoliga
        $('#mostrarmodal').modal('show')

        
    }
    else{
        $('#erromodal').modal('show')
    }

}

function apagar () {
    document.getElementById ("ddd-origem").value = ''
    document.getElementById ("ddd-destino").value  = ''
    document.getElementById ("tempo-liga").value = ''   
    document.getElementById ("plano-escolha").value = ''
    

}