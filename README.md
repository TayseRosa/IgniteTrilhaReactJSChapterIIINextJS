<h1 align="center">Ignite - Trilha ReactJS - Chapter III - Next JS </h1>

<img src="/public/images/igNews.png" width="100%" height="auto" />


- [x] Iniciando projeto NextJS - yarn create next-app [nomeDoProjeto]
- [x] Passando o projeto para typescript - yarn add typescript  @types/react @types/node -D
- [x] Renomear os arquivos pages > _app.tsx
- [x] Renomear os arquivos pages > index.tsx.tsx
- [x] Automaticamente o Next vai criar a configuração do typescript (arquivos: tsconfig.json e next-env.d.ts-definição de tipos do Next, que permite fazer importação de imagens, css dentro dos componentes) 
- [x] No arquivo _app.tsx fazer a seguinte alteração:
```js
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
```
- [x] Scoped scss - scss module
- [x] Configurar fonte externa
- [x] Arquivo _document - é carregado apenas 1 vez na aplicação, e não toda vez que a página é recarregada.
- [x] Modelo do arquivo _document.tsx
```js
import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
  render(){
    return(
      <Html>
        <Head>
          <title>Document</title>
        </Head>

        <body>Document

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
```
- [x] Formatar numero para formato ex: americano
```js
amount: new Intl.NumberFormat('en-US',{
  style: 'currency',
    currency: 'USD'
  }).format(price.unit_amount / 100),
```

- [x] SSR - Server Side Rendering - O Next retorna pro browser as informações das API já renderizadas(mais dinâmico, em tempo real)
  
- [x] SSG - Static Site Generation - Além de fazer o que o SSR já faz, ele salva um HTML estático que contém o resultado final daquela tela, sem precisar ter que fazer uma nova chamada a API's(para ter mais performance no carregamento da página) - Tem que ser usada em páginas que podem ser estáticas, nunca em páginas que vão carregar infos de usuários.

## Exemplo SSR (Server Side Rendering):
```js
export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1K4310BfnfJiSTrM5bdOY2Bg')

 const product = {
   priceId: price.id,
  amount: new Intl.NumberFormat('en-US',{
    style: 'currency',
    currency: 'USD'
  }).format(price.unit_amount / 100),
 };

  return{
    props: {
      product,
    }
  }
}  
```

## Exemplo SSG (Static Site Generation):
```js
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1K4310BfnfJiSTrM5bdOY2Bg')

 const product = {
   priceId: price.id,
  amount: new Intl.NumberFormat('en-US',{
    style: 'currency',
    currency: 'USD'
  }).format(price.unit_amount / 100),
 };

  return{
    props: {
      product,
    },
    //Quanto tempo a pagina vai levar para ser recarregada..
    revalidate: 60 * 60 *24, //24horas
  } 
}
```
- [x] Consumir API de pagamentos Stripe



# 🚀 Tecnologias utilizadas neste projeto
O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [x] JAVASCRIPT
- [x] REACT JS
- [x] TYPESCRIPT
- [X] NEXT JS
- [x] SASS

# 📥 Como usar
```js

    //Clonar o repositório
    $ git clone https://github.com/TayseRosa/IgniteTrilhaReactJSChapterIIINextJS.git

    //Entrar no diretório
    $ cd IgniteTrilhaReactJSChapterIIINextJS

    //Instalar dependências
    $ yarn install 

    //Startar o projeto
    $yarn dev
    

``` 

# 🚀 Autor

<a href="https://www.tayserosa.dev">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/31596454?v=4" width="100px;" alt="Tayse Rosa" style="border-radius:50%"/>
 <br />
 <sub><b>Tayse Rosa</b></sub></a> <a href="https://www.tayserosa.dev" title="Tayse Rosa">🚀</a>


Feito com ❤️ por Tayse Rosa 🚀

👋🏽 Entre em contato!

![Linkedin Badge](https://img.shields.io/badge/-TayseRosa-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tayse-rosa-3b683151/)[![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/TayseRosa/)

<h5> Créditos: Rocketseat - Ignite - Trilha React JS </h5>
