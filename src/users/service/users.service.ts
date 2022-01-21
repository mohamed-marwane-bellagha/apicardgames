import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {UserInterface} from "../model/user.interface";
import {Repository} from "typeorm";
import {from, Observable} from "rxjs";
import {User} from "../model/entities/user.entity";

@Injectable()
export class UsersService {
  constructor(
      @InjectRepository(User) private readonly userRepository: Repository<UserInterface>
  ){}

    create(user: UserInterface): Observable <UserInterface> {
    return from(this.userRepository.save(user));
  }

  findAll(): Observable <UserInterface[]> {
   return from(this.userRepository.find());
  }

  findOne(id: number) {
    return from(this.userRepository.findOne({id}));
  }

  update(id: number, user:UserInterface): Observable<any> {
    return from(this.userRepository.update(id, user));

  }

  remove(id: number): Observable<any> {
    return from(this.userRepository.delete(id));
  }
}
