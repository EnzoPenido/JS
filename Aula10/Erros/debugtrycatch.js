try {
    let pessoa = undefined
    console.log("Nome: ", pessoa.nome)
} catch (error) {
    console.error("Ocorreu um erro: ", error)    
} finally {
    console.log("Fim do bloco try...catch")
}