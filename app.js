function pesquisar() {
    const termoPesquisa = document.getElementById("campo-Pesquisa").value.toLowerCase();

    if (!termoPesquisa) {
        document.getElementById("resultados-pesquisa").innerHTML = "pesquise o atléta acima!";
        return;
    }

    let resultados = "";

    for (let dado of dados) {
        const titulo = dado.titulo.toLowerCase();
        const descricao = dado.descricao.toLowerCase();
        const tags = dado.tags.toLowerCase();

        if (titulo.includes(termoPesquisa) ||
            descricao.includes(termoPesquisa) ||
            tags.split(',').includes(termoPesquisa)) {
            resultados += `<div class="item-resultado">
                <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>`;
        }
    }

    if (resultados === "") {
        document.getElementById("resultados-pesquisa").innerHTML = "Nenhum resultado encontrado para a sua pesquisa.";
    } else {
        document.getElementById("resultados-pesquisa").innerHTML = resultados;
    }
}