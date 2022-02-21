/* 
        Testes dentro do React   

    JEST 

    Link para documentação https://jestjs.io/

    O jest é uma ferramenta de testes completa e também é denominado um Framework de testes 
    a vantagem do jest é que ele contenpla várias ferramentas em uma só.
    Antigamente era necessária várias ferramentas para conseguir executar os testes, o principio do 
    jest é ter uma única ferramenta que contenpla todas as nossas necessidades.

    React Testing Library 

    Também vamos utilizaer essa ferramenta que vai possibilitar testes dentro do ecossistema React 
    tanto no React Native quanto no React Web.
    Embora não necessáriamente seja obrigatório utilizar o React Testing Library  mas utiliza-lo 
    vai possibilitar desenvolver os testes de forma mais rapida e otimizada porém conseguimos criar
    testes sem utilizar o React Testing Library.

    Tipos de testes

    Existem varios tipos de testes , hoje os principais são dois testes unitários esse tipo de teste 
    testa uma unidade uma parte isolada da aplicação exemplificando com react é testar um componente, 
    a menor camada que conseguimos dividir algo dentro da nossa aplicação, o outro tipo de teste é o 
    teste de integração, esse tipo de teste testa como duas unidades ou componentes ou mais , se comunicam ou 
    funcionam juntas, como impactam uma na outra, esse tipo de teste é o teste de integração, existem também os
    famosos testes e2e esse tipo  de teste tenta simular como um usuario interage com a aplicação.

    Testes unitários 

    Para iniciar vou criar um projeto react com o typescript utilizando o seguinte comando abaixo: 
       npm create vite@latest 

    Configurando o ambiente
       
    depois instalo meu pacote de dependencias utilizando o npm i 
    vou abrir o meu projeto com npm run dev 

       Instalando o jest 

    Vamos instalar o jest com o comando     npm i jest -D  
    Após isso eu vou rodar o comando        npx jest --init   
    esse ultimo comando a cima vai instalar as configurações do jest ao projeto 

    também vou instalar o ts-node com o seguinte comando       npm i ts-node -D
    isso é importante para que o jest entenda sua configuração em Typescript

    Feito isso já temos todo o ambiente configurado para executar os nossos testes

    1- Vou criar um arquivo chamado App.spec.tsx / poderia ser também App.test.tsx 

    2- Vou instalar também o comando abaixo por causa da sintaxe do TypeScript
        npm i @types/jest -D

    3- Agora dentro do meu arquivo App.spec.tsx eu posso escrever o meu primeiro teste.

    4- Para rodar meu teste basta executar o comando           npm test 

    5- Por padrão o jest não consegue testar componentes react por ex, e para poder fazer 
    isso eu preciso instalar mais algumas configurações podemos utilizar o swc 
        npm i @swc/core @swc/jest -D
    
    6- feito isso eu preciso fazer uma configuração dentro do arquivo jest.config.ts 
      na linha 175 na parte transform eu vou substituir pelo trecho abaixo:

  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
            decorators: true,
          },
          keepClassNames: true,
          transform: {
            legacyDecorator: true,
            decoratorMetadata: true,
            react: {
              runtime: 'automatic'
            },
          },
        },
        module: {
          type: 'es6',
          noInterop: false,
        },
      },
    ],
  },

  Feito isso eu vou poder rodar arquivo jsx dentro do meu teste.

 8- Eu preciso também instalar as bibliotecas do testing library com os seguintes comando 
        npm i @testing-library/react @testing-library/jest-dom @testing-library/user-event -D
    
  com isso eu posso importar de dentro de @testing-library/react um metodo chamado render 
  e com isso eu posso importar o meu componente react através do render e com isso eu posso fazer 
  uma expect ou seja esperar alguma coisa desse meu componente.

9 - No meu arquivo de App.spect.tsx fiz um pequeno teste de meu componente posso utilizar o comando abaixo para rodar meu 
teste sempre que um arquivo for alterado ele ficará rodando.
    npm test --watchAll
  para que funcione corretamente eu devo ir nos meus scripts em package.json e modificar o meu script de test 

    "test": "jest --watchAll"

10- Quando eu rodo o meu teste e ele não passa ou seja ele da errado , ele mostra o que o teste está retornando e tbm 
mostra a causa da falha no teste.

11- existe um outro pacote que podemos utilizar e para isso eu vou criar umas pasta chamada test, vou criar um arquivo 
chamado setup.ts  após isso eu vou importar o meu import '@testing-library/jest-dom' , após isso eu vou no jest.config.ts
e buscar pela linha do setupFilesAfterEnv (linha 131), vou definir alguns arquivos que eu quero carregar junto com os testes

   setupFilesAfterEnv: [
    '<rootDir>/src/test/setup.ts'
  ],

  Após isso eu vou salvar e executar meus testes novamente
  feito isso eu ganho acesso a acessos que antes eu não tinha, por ex agora eu posso verificar elementos html ou até mesmo 
  classNames.

   
   Anotações importantes com testes na prática utilizando o Library

1 - Quando eu faço o const { getByText } = render(<App />) dentro onde coloco o get eu possuo várias opções 
para encontrar elementos em tela, ByAlt, DisplayValue,Label text, e varias opções, entre essas várias opcões 
podemos encontrar um unico elemento são todos que iniciam com getBy, tofod que iniciam com getAll vai encontrar 
todos os elementos que satisfaçam aquela condiçao, também temos varias outras opções, algumas com query outras com 
find. 
Os que iniciam com query eles não falham caso eu não encontre o elemento, ou seja se eu quero testar se um elemento está 
em tela ou não eu posso utilizar o query por que ele não irá fazer meus testes falharem caso eu ão encontre o elemento.
Diferente do get que caso ele não encontre ele faz o teste falhar, o get o elemento precisa está em tela caso contrario 
o teste irá falhar.

O find é quase a mesma coisa que o get porém ele espera o elemento aparecer em tela.

2- Geralmente quando queremos fazer varios testes em um componente utilizamos o describe  
  e passamos para ele o nome do nosso componente. 
    describe('App Component', () => {
    
})

3- eu posso escrever meu teste utilozando test ou posso utilizar o it que é uma forma mais semantica em que eu posso escrever meu teste
o it faz parte da leitura do teste, após isso fazemos uma descrição que pode ser em ingles.

4- o userEvent permite que eu dispare ações dentro da interface da minha aplicação, para utilizar eu devo importa-lo
import userEvent from '@testing-library/user-event'


*/