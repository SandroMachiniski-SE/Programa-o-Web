import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  findAll() {
    // Sua lógica aqui
    // Exemplo: retornar um array de usuários fictícios
    return [
      { id: 1, name: 'Fulano' },
      { id: 2, name: 'Ciclano' },
    ];
  }
}
