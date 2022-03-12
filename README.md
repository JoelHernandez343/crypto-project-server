# Proyecto de Criptografía 2020

## Problemática

> In a certain company, they have a server to store sensitive information. To keep it secure, every file stored in this server must be encrypted. The CEO have realized that they are storing duplicated files. The company has financial problems, thus it is not possible to buy more servers. Still they need to keep secure the sensitive information, but without duplicates. The CEO has discovered that there is a cryptographic technique to solve this problem, called secure deduplication, but he does not know anything about cryptography.

> Imagine that you have a company that provides security services and designa a software to help the company with the problem.

## Descripción

Este es el servidor de llaves critográficas que se comunica con la aplicación cliente [CryptoDplication](https://github.com/JoelHernandez343/crypto-project).

## Tecnologías utilizadas

| Tecnología                                                       | Uso                   |
| ---------------------------------------------------------------- | --------------------- |
| Express Js                                                       | Servidor Web          |
| [bigint-mod-arith](https://github.com/juanelas/bigint-mod-arith) | Cálculo criptográfico |

## Uso

Instalar dependencias

```
npm i
```

Iniciar servidor de desarrollo

```
npm start
```

Utilizar aplicación cliente [CryptoDplication](https://github.com/JoelHernandez343/crypto-project)
