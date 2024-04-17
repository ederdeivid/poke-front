## Definição da estrutura inicial do projeto e das escolhas feitas:

>  - **Requisitos**
    - Node.js 20.10 ou superior
    - NPM 10.2.3 ou superior
    - **installing:** npm i (com alguma das versões mencionadas. Isso é obrigatório, os pacotes não serão instalados sem as versões especificadas)
    - **Running:** npm run dev


### Vue 3 vs Nuxt
Framework escolhido foi Vue 3 (composition API) com typescript, a decisão de utilizar o Vue 3 ao invés de Nuxt é devido a falta de rotas no sistema 3 não aproveitaria o direito a convenção nos nomes das rotas.
E o também quase não tem conteúdo para o SSR ser um diferencial na renderização da página.

##

### Axios vs Fetch

Escolhi aqui apenas por preferência pessoal, porém, fiz de uma maneira desacoplada o suficiente (utilizando alguns ladrões do SOLID) para poder trocar isso a qualquer momento sem que quebre nada no sistema e com o menor esforço possível.
(Uma lib para requisição aqui com apenas 3 endpoints a serem consumidos parece overengineering, né)

##

### Padronização de commits
Aqui escolhi o mais popular e o único que conheço (git-commit-msg-linter), acho interessante essa abordagem de ter um padrão nos nomes dos commits ele tem o [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) como base.

##

### Gerenciamento de estado:

A escocha aqui foi Pinia, além de ser mantido e fortemente recomendado pelo core team do Vue, conta com a facilidade de uso muito superior ao do Vuex.
E por ser a recomendação dos devs do Vue, então né, tem alguma credibilidade aqui :s

> **Considerações adicionais :** A aplicação era bastante simples, então, não necessariamente era obrigatório o uso de uma lib de Controle de estado, eu poderia utilizar o próprio **Reactive** do vue, ou uma **classe estática** em typescript, com os métodos que retornassem ou editasse os valores da store (classe estática). A escolha do Pinia foi pela recomendação de uso no desafios..

##

### TDD, testing practices

Aqui comecei com TDD que é basicamente o desenvolvimento com base nos testes. Mas fiquei com o prazo apertado e resolvi voltar atrás na decisão.
**Vitest vs Jest**: Aqui a escolha foi puramente por utilizar uma tecnologia que tenho menos experiência, já trabalhei bastante com Jest, então optei pelo novo.

##

### Infinit scroll vs Paginação manual

Pensando em uma aplicação com maior carga de dados, eu dificilmente (pra não dizer jamais) utilizaria um componente com Infinit scroll, a página fica lenta com o acúmulo de informações o que trás uma experiência de uso péssima. Mas aqui a carga de dados é pequena, Então não deve gerar nenhum B.O.  

> **Considerações adicionais**: Comecei o projeto com paginação normal, não tinha visto a indicação no de infinito scroll no desafio. 😅

##

### Visualização e separação de camadas

Na parte da view, tentei deixar o mais simples possível, sem muitas lógicas atreladas a ela, claro que tem coisas que são inevitáveis.
Mas a parte de requisição a API e retorno dos dados, eu fiz um useCase, onde ele faz toda essa parte e apenas retorna os dados para a view que por sua vez só os exibe.

Tem 3 casos de uso, 1 pra cada um das regras da aplicação, que são elas:
- Listar pokémons por limit e offset
- Listar pokémon por id ou nome
- exibir mais detalhes de um pokémon específico

##

### Pipelines
Github Actions Pipeline Vs Husky
Aqui optei por utilizar o Github Actions para rodar as verificações do lado do server. As vezes rodar as coisas local, como testes do sistema e tal, pode ser um processo demorado dependendo do tamanho do projeto e do computador de quem tá rodando. 
Claro que poderia usar os dois em conjunto, um fazendo validações antes do usuário fazer o push, e depois fazendo validações na pipeline do gh-actions. Aqui optei pela simplicidade devido a falta de tempo,

Mais sobre as pipelines:
Tive que remover algumas coisas da pipeline de PR, porque o pacote que utilizo para verificar dead codes, não funciona muito bem com as classes exportadas que eram utilizadas apenas no arquivo vue, ele dava erro dizendo que não tava sendo usado. Nesse caso era o (ts-prune), então removi e tirei esse step do arquivo YML.

