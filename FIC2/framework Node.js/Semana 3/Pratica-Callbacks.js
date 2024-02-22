function baixarConteudo(nomeConteudo, callback) {
    console.log(`Iniciando o download de ${nomeConteudo}...`);
    //Simula um tempo de download (em milissegundos)
    setTimeout(() => {
        console.log(`${nomeConteudo} foi baixado com sucesso.`);
        callback(null, nomeConteudo); //Indica que o download foi concluido com sucesso
    }, 5000); //Simula 5 segundos de download
}

//Vamos criar uma função callback simples que será chamada após o download
function callbackConcluirDownload(erro, nomeConteudo) {
    if (erro) {
        console.log(`Erro ao baixar ${nomeConteudo}: ${erro}`);
    } else {
        console.log(`Donlowad de ${nomeConteudo} concluído com sucesso!`);
    }
}

//Agora, vamos usar a função baixarConteudo com callbacks
baixarConteudo('Documento.pdf', callbackConcluirDownload);
baixarConteudo('Imagem.jpg', callbackConcluirDownload);
baixarConteudo('Video.mp4', callbackConcluirDownload);