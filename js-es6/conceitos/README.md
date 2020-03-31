Instrucoes antes de iniciar o projeto
--------------------------------------

Verificar se o node esta instalado 

$ node -v

Verificar se o gerenciador de pacotes yarn esta instalado 

$ yarn -v


Criar arquivo package.json para armazenar informacoes das dependecias do projeto

$ yarn init

Arquivo que serão criados após esse passo

- Arquivo de cash do yarn >> yarn.lock
- Diretorio que armazena as dependecias do projeto >> node_modules/

Instalar o client do babel para permitir que se trabalhe com interface de linha de comando do babel

$ yarn add @babel/cli

Inslatar o modulo @babel/core

$ yarn add @babel/core

Instalar a  o pacote present-env para sinalizar que as funcionalidades do ES6, ES7 e ES8 deve ser convertidos pelo pelo babel para o ambiente browser 

$ yarn add @babel/present-env --dev

Criar aquivo .gitignore e incluir pasta node_modules/ 
Assim esses arquivos ficaram armazenados apens localmente

$ touch .gitignore


Criar arquivo .babelrc e incluir para armazenar as configuracões do babel

$ touch .babelsrc

Incluir o pacote preset-env no arquivo .babelsrc

{
    "presets": ["@babel/preset-env"]
}


Incluir o script dev abaixo no package.json para que o babel inclua o arquivo main.js dentro do do bundle.js

  "scripts": {
    "dev": "babel ./main.js -o bundle.js"
  }

Executar o comando yarn dev para executar o script criado anteriormente, o resultado deve ser a criação do arquivo bundle.js

Dentro do arquivo bundle.js todas funcionalidades do ES6, ES7 e ES8 serao convertidas para javascript em um formato que todos os nagevadores possam entender

$ yarn dev


Alterar o script dev abaixo no package.json incluindo o parametro -w para que todas alteracoes do codigo sejam monitaradas e automaticamente convertidas de ES6, ES7 e ES8 para javascript no bundle.js

  "scripts": {
    "dev": "babel ./main.js -o bundle.js -w"
  }

Instalar o pacote do REST e SPREAD para que essas funcionalidade possam ser reconhecidas pelo Babel e transpiladas do ES6, ES7, ES8 para javascrip no bundle.js

$ yarn add @babel/plugin-proposal-object-rest-spread

Incluir o pacote plugin-proposal-object-rest-spread no arquivo .babelsrc

{
    "presets": ["@babel/preset-env"],
    "plugins" : ['plugin-proposal-object-rest-spread']
}

Executar novamente o yarn dev para que ele enxergue o pacote do rest-spread

$ yarn dev