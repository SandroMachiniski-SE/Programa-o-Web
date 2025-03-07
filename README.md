#  Projeto Web de Criptografia

##  Estrutura Geral do Projeto  
O sistema será uma aplicação web para criptografia de arquivos, com:  

- **CRUD**: Gerenciamento de usuários e chaves criptográficas.  
- **Transação**: Criptografia e descriptografia de arquivos.  
- **Arquitetura**: Microserviço.  
- **Controle de Acesso**: Login com autenticação via token JWT.  
- **Repositório Git e Notion**: Para versionamento e documentação.  

---

##  Definição das Tecnologias  

### **Backend (Servidor)**  
- **Linguagem**: Java (Spring Boot)  
- **Banco de Dados**: PostgreSQL  
- **Autenticação**: JWT (JSON Web Token)  
- **Criptografia**: Bibliotecas do Java (`javax.crypto`, `BouncyCastle`)  
- **Padrão Arquitetural**:??

---

##  Estrutura das Funcionalidades  

### **1️⃣ CRUD - Gerenciamento de Usuários e Chaves**  
- Criar, editar, listar e excluir usuários.  
- Armazenar e gerenciar chaves criptográficas associadas a cada usuário.  

### **2️⃣ Transação - Criptografia e Descriptografia**  
- Upload de arquivos.  
- Download do arquivo processado.  

---

##  Requisitos Funcionais  

1️⃣ **Autenticação e Controle de Acesso**  
- Cadastro de usuários com nome, e-mail e senha.  
- Login de usuários com autenticação via JWT.  
- Validação de permissões para funcionalidades específicas.  

2️⃣ **Gerenciamento de Usuários e Chaves**  
- Criar, editar, listar e excluir usuários.  
- Associar uma chave criptográfica a cada usuário.  
- Armazenamento seguro das chaves criptográficas.  

3️⃣ **Criptografia e Descriptografia de Arquivos**  
- Upload de arquivos para criptografia.  
- Download do arquivo criptografado.  
- Descriptografia de arquivos previamente criptografados.  

---

##  Requisitos Não Funcionais  

1️⃣ **Arquitetura e Escalabilidade**  
- Arquitetura baseada em microserviços para escalabilidade.  

2️⃣ **Segurança**  
- Apenas usuários autenticados podem acessar arquivos criptografados.

 3  **Desempenho:
- O sistema deve ser capaz de processar operações de encriptação e desencriptação de forma eficiente, garantindo tempos de resposta adequados para uma experiência de usuário satisfatória.

 4 **Usabilidade:
- O sistema deve possuir uma interface intuitiva e amigável, facilitando a utilização das funcionalidades por usuários com diferentes níveis de conhecimento técnico.

 5 **Confiabilidade:
- O sistema deve ser estável e resiliente, garantindo alta disponibilidade e funcionamento consistente sem falhas inesperadas.

 6 **Portabilidade:
- O sistema deve ser compatível com múltiplas plataformas e dispositivos, permitindo que os usuários acessem as funcionalidades de diferentes ambientes.

 7 **Conformidade Legal:
- O sistema deve estar em conformidade com legislações e regulamentações aplicáveis relacionadas à privacidade e proteção de dados, como a Lei Geral de Proteção de Dados (LGPD) no Brasil.

---

**Desenvolvedores:** Lucas Vinicius Eufrasio e Sandro Machinski.  \
**Plano de trabalho:** https://catolicasc-team.atlassian.net/jira/software/projects/LS/boards/2?atlOrigin=eyJpIjoiY2Y4YjhkNGFlOTQxNGI0OTg2ZmQ5NTg4ZjYxNzhmOWEiLCJwIjoiaiJ9
