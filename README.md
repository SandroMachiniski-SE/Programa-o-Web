***Estrutura Geral do Projeto
O sistema será uma aplicação web para criptografia de arquivos, com:***

CRUD: Gerenciamento de usuários e chaves criptográficas.
Transação: Criptografia e descriptografia de arquivos.
Arquitetura: microserviço (mais escalável).
Controle de acesso: Login com autenticação via token JWT.
Repositório Git/GitLab: Para versionamento e documentação.


***Definição das Tecnologias
escolhemos tecnologias adequadas para cada camada como:***

Backend (Servidor)
Linguagem: Java (Spring Boot)
Banco de Dados: PostgreSQL
Autenticação: JWT (JSON Web Token)
Criptografia: Bibliotecas do Java (javax.crypto, BouncyCastle)
Padrão Arquitetural: RESTful API com Spring WebFlux (reativo)

***Estrutura das Funcionalidades***
CRUD - Gerenciamento de Usuários e Chaves
Criar, editar, listar e excluir usuários.
Armazenar e gerenciar chaves criptográficas associadas a cada usuário.
Transação - Criptografia/Descriptografia
Upload de arquivos.
Escolha do algoritmo (AES, RSA).
Processo de criptografia/descriptografia.
Download do arquivo processado
