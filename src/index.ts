// src/user.service.ts
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    // Lógica para criação de usuário
    return { message: 'Usuário criado com sucesso', data: createUserDto };
  }

  findAll() {
    // Lógica para listar todos os usuários
    return [{ id: '1', name: 'Exemplo de Usuário' }];
  }

  findOne(id: string) {
    // Lógica para buscar um usuário por id
    return { id, name: 'Exemplo de Usuário' };
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    // Lógica para atualizar usuário
    return { message: 'Usuário atualizado com sucesso', id, data: updateUserDto };
  }

  remove(id: string) {
    // Lógica para remover usuário
    return { message: 'Usuário removido com sucesso', id };
  }
}
