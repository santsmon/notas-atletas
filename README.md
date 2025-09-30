# notas-atletas
Este projeto em Java Script calcula a média de notas de atletas de ginástica artística. O algoritmo desconsidera a maior e a menor nota entre os cinco jurados e garante a média com base nas três notas centrais.
# 🥇 notas-atletas: Cálculo de Média Válida na Ginástica Artística

## Sobre o Projeto

Este projeto em JavaScript foi desenvolvido para atender às regras de uma competição de ginástica artística. A aplicação recebe as notas de cinco jurados e calcula a média válida do atleta.

O principal desafio da lógica de negócio é a regra de avaliação:

> A média do atleta é calculada com base nas **três notas do meio**, desconsiderando-se a maior e a menor nota atribuídas pelos jurados.

## Especificações Técnicas

* **Linguagem:** JavaScript (JS)
* **Entrega:** Solução em JS puro utilizando `console.log()` para a saída, conforme as especificações.
* **Funcionalidades Chave:**
    * Iteração sobre um *array* de objetos (`atletas`).
    * Uso do método **`.sort()`** para ordenação numérica das notas.
    * Uso do método **`.slice()`** para remover as notas extremas (maior e menor).
    * Cálculo da média aritmética das três notas restantes.
    * Saída formatada no console.

## Como Executar

Para ver a solução em ação, siga estes passos:

1.  Clone este repositório para sua máquina local.
2.  Abra o arquivo `notas-atletas.js` em um ambiente de execução JavaScript (como o console do navegador ou Node.js).
3.  Execute o arquivo.

O resultado será exibido no console, seguindo o formato de saída solicitado pelo projeto.

---
