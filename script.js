
const valorAdicaoRobux = 500;
const valorAdicaoReal = 14;
const valorMinRobux = 500;
const valorMaxRobux = 35000;
const valorMinReal = 14;

function adicionarRobux() {
    const spanRobux = document.getElementById('qnt-robux').querySelector('span');
    const spanReal = document.getElementById('real').querySelector('span');

    let qntRobux = parseInt(spanRobux.textContent);
    let qntReal = parseFloat(spanReal.textContent);

    if (qntRobux + valorAdicaoRobux <= valorMaxRobux) {
        qntRobux += valorAdicaoRobux;
        qntReal += valorAdicaoReal;

        spanRobux.textContent = qntRobux;
        spanReal.textContent = qntReal.toFixed(2);
    } else {
        alert("Você atingiu o valor máximo de Robux!");
    }
}

function removerRobux() {
    const spanRobux = document.getElementById('qnt-robux').querySelector('span');
    const spanReal = document.getElementById('real').querySelector('span');

    let qntRobux = parseInt(spanRobux.textContent);
    let qntReal = parseFloat(spanReal.textContent);

    if (qntRobux - valorAdicaoRobux >= valorMinRobux) {
        qntRobux -= valorAdicaoRobux;
        qntReal -= valorAdicaoReal;

        spanRobux.textContent = qntRobux;
        spanReal.textContent = qntReal.toFixed(2);
    } else {
        alert("Você atingiu o valor mínimo de Robux!");
    }
}