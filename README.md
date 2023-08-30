# Carrinho de Compras em React

Este é um projeto de uma aplicação de carrinho de compras desenvolvida em React, com o objetivo de aplicar os conceitos de componentização e styled components.

A aplicação consome uma API para obter uma lista de produtos e permite ao usuário adicionar produtos ao carrinho, realizar buscas, remover itens específicos ou todos os itens do carrinho, e exibir o valor total dos produtos no carrinho.

## Funcionalidades

- Exibe uma lista de produtos obtidos da API assim que o componente é montado.
- Permite adicionar produtos ao carrinho.
- Valida se o produto já foi adicionado anteriormente, evitando duplicatas. (Opção 1)
- Implementa um contador para cada produto, permitindo quantidades variadas. (Opção 2)
- Abre o carrinho em um modal.
- Fecha o modal ao clicar no "x", fora do modal ou pressionando a tecla "esc".
- Remove um item específico do carrinho.
- Remove todos os itens presentes no carrinho.
- Exibe o valor total dos produtos no carrinho.
- Realiza buscas por nome ou categoria dos produtos.