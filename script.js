function gerar() {
  const nome = document.getElementById("nome").value;
  const profissao = document.getElementById("profissao").value;
  const descricao = document.getElementById("descricao").value;
  const experiencias = document.getElementById("experiencias").value;
  const habilidades = document.getElementById("habilidades").value;

  document.getElementById("resultado").innerHTML = `
    <h2>${nome}</h2>
    <h3>${profissao}</h3>
    <p><strong>Resumo:</strong> ${descricao}</p>
    <p><strong>Experiências:</strong><br>${experiencias.replace(/\n/g, "<br>")}</p>
    <p><strong>Habilidades:</strong><br>${habilidades.replace(/\n/g, "<br>")}</p>
  `;
}
