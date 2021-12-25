const res = document.querySelector('#display') //dislpay da calculadora

function começar(num){
     // impressão numerica no display
     let numero = res.innerHTML += num
}

function limpar() {
     // limpeza do display
     res.innerHTML = ''
}

function igual() {
     // logica para calculo
     result = res.innerHTML
     // usp do eval para entender o display
     resultado = eval(result)
     res.innerHTML = resultado
     if (resultado == 171) {
          alert ('Eu só o milior')
     }
}

