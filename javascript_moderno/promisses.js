function teste() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const erro = false
    
            
            if(erro) {
                reject('Erro...')
            } else {
                resolve('A promise foi resolvido com sucesso!')
            }
        }, 2000);


    })
}

/*
teste().then(res => {
    console.log(res);
}).catch(erro => {
    console.log(erro);
})
*/

async function teste2() {
    await teste().then(res => {
        console.log(res);
    })
    console.log('Resolveu...');
}

teste2()