# Cadastro de carros

**RF**
Deve ser possível cadastrar um carro
Deve ser possivel listar todas as categorias

**RN**
 - Não deve ser possível cadastrar um carro com uma placa já existente.

 - Não deve ser possivel alterar a placa de um carro já cadastrado.

 - O carro deve ser disponivel como padrão
 
 - O usuario responsavél pelo cadastro deve ser do tipo administrador

# Listagem de carros

**RF**
 - Deve ser possível listar todos os carros disponíveis.
 - Deve ser possivel listar todos os carros disponiveis pelo nome da categoria.
 - Deve ser possivel listar todos os carros disponiveis pelo nome da marca.
 - Deve ser possivel listar todos os carros disponiveis pelo nome do carro.

**RN**
O usuario não precisa estar logado no sistema.

# Cadastro de Especificação no carro

**RF**
Deve ser possivel cadastrar uma espeficação para um carro.

Deve ser possível listar todas as especificações

Deve ser possível listar todos os carros


**RN**

 - Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
 - Não deve ser possível cadastrar uma espefdicação já existente para o mesmo carro.
 - O usuario responsavel pelo cadastro deve ser um usuário administrador.

# Cadastro de imagens do carro

**RF**
 - Deve ser possivel cadastrar a imagem do carro
 - Deve ser possivel listar todos os carros

**RFN**
 - Ultilizar o multer para upload dos arquivos

**RN**
 - O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
 - O usuário responsável pelo cadastro deve ser um usuário administrador.

# Aluguel de Carro

**RF**
 - Deve ser possível cadastrar um aluguel

**RN**
 - O Aluguel deve ter no minimo 24 horas
 - Não deve ser possível cadastrar um aluguel caso já exista um aberto para um mesmo usuario.
 - Não deve ser possível cadastrar um aluguel caso já exista um aberto para um mesmo carro.
