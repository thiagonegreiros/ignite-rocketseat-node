# Typescript

 * Superset do Javascript
 * Ele define uma tipagem

 * Passar uma tipagem faz com que o nosso codigo seja mais legivel e mais rapido de entendimento do que a passamos por parametro e o que recebemos na função.

## Repositories

 * A camada que é responsavel por fazer a manipulação de dados da nossa aplicação

## Docker comands (More used to this course)

* Mostra os containers ativos no momento

```bash
  docker ps
```
* Mostra todos os containers na máquina

```bash
  docker ps -a
```

* O container deve estar parado para remover o container

```bash
  docker rm _container_id
```

* Inicia o container

```bash
  docker start _container_id
```
* Para o container

```bash
  docker start _container_id
```

## Docker Compose - Always in root my project

* Para consttruir o container 

```bash
  docker-compose up
```

* Para remover o container 

```bash
  docker-compose down
```

* Para iniciar o container 

```bash
  docker-compose start
```
* Para parar o container 

```bash
  docker-compose stop
```

## Testes

### Testes unitários 

* É quando pegamos uma parte da aplicação, da funcionalidade.

* Testar a regra de negocios da nossa aplicação.

* Serve para garantir que a nossa logica de negocio estão corretos, tanto nos casos de sucesso quanto nos casos de erro.


### Testes de integração

* Serve para quando queremos testar a aplicação de uma forma geral.

* Testa o fluxo completo da nossa aplicação.