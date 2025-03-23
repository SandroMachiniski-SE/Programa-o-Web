import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from './users/user.entity'; // Exemplo de entidade
// import { UserModule } from './users/user.module'; // Exemplo de módulo

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'programacao_web',
      entities: [/* User, ... */], 
      synchronize: true, 
    }),
    // UserModule, // Caso tenha um módulo de usuários
  ],
})
export class AppModule {}
