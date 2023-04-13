function tabuada() {
  let num = document.getElementById('txtn')
  let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
      window.alert('Por favor, digite um número!')
    } else {
      let n = Number(num.value) // aqui estamos convertendo de texto para número.
      let c = 1
      tab.innerHTML = '' // serve para limpar o resultado antes de gerar cada tabuada, para não ficar uma por cima da outra a cada resultado.
      while (c <= 10) {
        let item = document.createElement('option') // estamos criando (adicionando) um elemento HTML pelo JS.
        item.text = `${n} x ${c} = ${n*c}` // estamos chamando o elemento "item" que criamos, text = seria a parte de dentro do option. E logo depois estamos pedindo para somar as vars que criamos de acordo com o número que o usuário colocar.
        item.value = `tab${c}` // serve para deixar selecionado determinada linha se o usuário clicar.
        tab.appendChild(item) // estamos chamando (acionando) esse elemento que criamos no HTML pelo JS.
        c++ // seria o c vai receber ele +1
      }
    }
}