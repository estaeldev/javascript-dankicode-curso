const items = []

document.querySelector('.lista-cadastro button').addEventListener('click', () => {
    const nomeProduto = document.querySelector('input[name=nome_produto]')
    const valorProduto = document.querySelector('input[name=valor_produto]')
    
    if(nomeProduto.value == '' || valorProduto.value == '') {
        alert('Preencha todos os campos!!')
        return
    }
    
    items.push({nome: nomeProduto.value, valor: valorProduto.value})
    

    const listaProdutos = document.querySelector('.lista-produtos')
    let soma = 0
    listaProdutos.innerHTML = ''
    items.map(value => {
        soma += Number.parseFloat(value.valor)
        listaProdutos.innerHTML += `
        <div class="lista-produto-single">
            <h3> <span> X </span> ${value.nome}</h3>
            <strong>R$ <span>${value.valor}</span> </strong>
        </div>
        `
    })
    soma + soma.toFixed(2)

    const somaProdutos = document.querySelector('.soma-produtos span');
    somaProdutos.innerHTML = `R$ ${soma}`

    nomeProduto.value = ''
    valorProduto.value = ''

})

document.querySelector('button[name=limpar]').addEventListener('click', () => {
    items.splice(0, items.length)
    document.querySelector('.lista-produtos').innerHTML = ''
    document.querySelector('.soma-produtos span').innerHTML = 'R$ 0.00'
})


