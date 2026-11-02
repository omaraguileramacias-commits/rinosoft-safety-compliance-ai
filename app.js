function setQuestion(text){

    document.getElementById("question").value = text;

}

function sendQuestion(){

    const question =
        document.getElementById("question").value;

    if(question.trim()===""){
        return;
    }

    document.getElementById("response").innerHTML =

    `
    <h3>Consulta enviada</h3>

    <p><strong>Pregunta:</strong> ${question}</p>

    <hr style="margin:15px 0">

    <h4>Estado</h4>

    <p>
        Consulta preparada para ser enviada a
        Azure AI Foundry.
    </p>

    <h4>Fuente documental</h4>

    <p>
        Azure AI Search + Normas STPS
        (NOM‑017, NOM‑019, NOM‑026,
        NOM‑030 y NOM‑035).
    </p>

    <h4>Próximo paso</h4>

    <p>
        Conectar esta interfaz a la API del agente
        RINOSOFT Safety & Compliance AI.
    </p>
    `;
}