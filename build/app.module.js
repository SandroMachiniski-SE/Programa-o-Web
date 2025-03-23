"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
// src/app.module.ts
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./users/user.entity"); // Exemplo de entidade
const user_module_1 = require("./users/user.module"); // Exemplo de módulo
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            // Aqui configuramos a conexão com o Postgres
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost', // ou IP/host do seu Postgres
                port: 5432, // porta padrão do Postgres
                username: 'postgres', // usuário do banco
                password: 'sua_senha_aqui', // senha do banco
                database: 'nome_do_banco', // nome do seu banco
                entities: [user_entity_1.User], // entidades que você vai usar
                synchronize: true, // cria/atualiza tabelas automaticamente (não use em produção)
            }),
            // Se você tiver um módulo de usuários, por exemplo:
            user_module_1.UserModule,
        ],
    })
], AppModule);
