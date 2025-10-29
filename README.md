Atividade de Programação WEB 2 

Introdução ao Node.js/Express
prof. Leo Fernandes @ IFAL

# ⚽ Bolão: Flamengo x Racing

Um projeto web simples criado com Node.js e Express. O usuário pode enviar um palpite para o jogo fictício entre Flamengo e Racing e receber uma mensagem de feedback personalizada baseada no palpite.

-----

## 🚀 Funcionalidades

  * **Página Inicial:** Exibe o jogo do dia e um formulário para inserir o palpite (placar de cada time).
  * **Envio de Palpite:** O formulário envia os dados via `POST` para a rota `/palpite`.
  * **Página de Resultado:**
      * Exibe o palpite que o usuário acabou de enviar.
      * Mostra uma mensagem personalizada e clubista, dependendo do resultado inserido (vitória do Flamengo, vitória do Racing ou empate).
      * Permite ao usuário voltar para a página inicial.

-----

## 🛠️ Tecnologias Utilizadas

  * **Backend:** Node.js, Express.js
  * **Frontend (View Engine):** EJS (Embedded JavaScript)
  * **Middleware:**
      * `morgan` (para logs de requisição)
      * `express.json` e `express.urlencoded` (para parsear o corpo das requisições)
      * `cookie-parser`

-----

## 📂 Estrutura do Projeto

```
/
├── app.js             # Arquivo principal do servidor Express
├── package.json       # Dependências e scripts do projeto
├── /public/           # Arquivos estáticos
│   ├── /stylesheets/
│   │   ├── style.css    # Estilos da página inicial
│   │   └── palpite.css  # Estilos da página de resultado
├── /routes/           # Definições de rotas
│   ├── index.js       # Rota para a página inicial (GET /)
│   └── palpite.js     # Rota para receber o palpite (POST /palpite)
└── /views/            # Arquivos EJS (templates)
    ├── index.ejs      # Página inicial com o formulário
    ├── palpite.ejs    # Página de resultado
    └── error.ejs      # Página de erro (gerada pelo Express)
```

-----

## 🏁 Como Executar o Projeto

1.  **Clone o repositório:**

    ```bash
    git clone <url-do-seu-repositorio>
    ```

2.  **Entre na pasta do projeto:**

    ```bash
    cd <nome-da-pasta-do-projeto>
    ```

3.  **Instale as dependências:**
    (Você precisará ter o [Node.js](https://nodejs.org/) instalado)

    ```bash
    npm install
    ```

4.  **Inicie o servidor:**

    ```bash
    npm start
    ```
    
5.  **Acesse no navegador:**
    Abra seu navegador e vá para `http://localhost:3000` (ou a porta que estiver configurada no seu `app.js`)
