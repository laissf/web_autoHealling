Este é o projeto base para o curso de automação de testes com Cypress, com integração de IA local para suporte à automação. O objetivo é fornecer um ambiente de aplicação web controlado, robusto e 100% offline (qa_bank.html) para que possamos focar exclusivamente nos conceitos de automação e explorar o uso de IA para melhorar a eficiência dos testes.

🏦 A Aplicação: QA Bank
O qa_bank.html é uma aplicação "Single Page Application" (SPA) local que simula um banco digital. Toda a persistência de dados (criação de usuários, saldos) é simulada usando o LocalStorage do navegador.

Funcionalidades Principais
Autenticação: Cadastro de novos usuários e Login.
Painel: Interface com sidebar de navegação.
Operações:
Depósito
Saque
Transferência entre contas
Por que um App Local?
Estabilidade: O app nunca cai e funciona 100% offline.
Velocidade: Os testes rodam instantaneamente, sem latência de rede.
Controle: Permite o uso das melhores práticas (como seletores [data-cy]) desde o início.
🚀 Integração com IA Local
O projeto inclui uma integração com IA local, utilizando o modelo TinyLlama-1.1B-Chat-v1.0, para sugerir seletores CSS automaticamente durante os testes. A IA é carregada diretamente no navegador e utiliza WebGPU ou WASM para execução.

Funcionalidades da IA
Sugestão de seletores CSS: A IA analisa o HTML da página e retorna o seletor mais adequado com base em uma descrição fornecida.
Cache de respostas: Respostas da IA são armazenadas para melhorar o desempenho.
Fallback: Caso o navegador não suporte WebGPU, a execução é feita em WASM.
🛠️ Tecnologias Utilizadas
Cypress: Framework para testes E2E.
JavaScript (ES6+): Linguagem usada para escrever os testes.
Page Object Model (POM): Padrão de design para separar lógica de teste e seletores.
LocalStorage: Simulação de persistência de dados.
TinyLlama-1.1B-Chat-v1.0: Modelo de IA para suporte à automação.
📂 Estrutura do Projeto
▶️ Como Executar os Testes
1. Instale as Dependências
Execute o comando abaixo para instalar as dependências do projeto:

2. Inicie o Test Runner do Cypress
Abra o Test Runner do Cypress para executar os testes de forma interativa:

3. Execute os Testes em Linha de Comando
Para executar os testes diretamente no terminal:

🧠 Como Funciona a Integração com IA
A integração com IA é feita através do arquivo localAI.js. Ele utiliza o modelo TinyLlama-1.1B-Chat-v1.0 para sugerir seletores CSS com base em uma descrição fornecida.

Exemplo de Uso
No arquivo LoginPage.js, a IA é usada para localizar o botão de login:

🛠️ Configuração do Cypress
O arquivo cypress.config.js contém as configurações do Cypress, incluindo a ativação de gravação de vídeos:

📄 Licença
Este projeto é licenciado sob a licença ISC. Sinta-se à vontade para usá-lo e modificá-lo conforme necessário.

🤝 Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests no repositório do projeto.