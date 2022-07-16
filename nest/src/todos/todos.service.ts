import { Injectable, NotFoundException } from '@nestjs/common'
// import { InjectRepository } from '@nestjs/typeorm'
// import { Repository } from 'typeorm'
// import { Todo } from '../entity/todo.entity'
import { Todo } from './todo.type'
import { CreateTodoDTO } from './todos.dto'

@Injectable()
export class TodosService {
  constructor() {}

  async findAll(): Promise<Todo[]> {
    return [
      {
        name: 'テスト1',
        description: 'テスト1です。',
        startDate: new Date(),
        endDate: new Date(),
        isDone: false,
      },
      {
        name: 'テスト2',
        description: 'テスト1です。',
        startDate: new Date(),
        endDate: new Date(),
        isDone: false,
      },
      {
        name: 'テスト3',
        description: 'テスト1です。',
        startDate: new Date(),
        endDate: new Date(),
        isDone: false,
      },
    ]
    // return await this.todosRepository.find()
  }

  // async findById(id: string): Promise<Todo> {
  //   const todo = await this.todosRepository.findOne(id)
  //   if (!todo) throw new NotFoundException()
  //   return todo
  // }

  // async create(createTodoDTO: CreateTodoDTO): Promise<Todo> {
  //   const { name, description, startDate, endDate } = createTodoDTO
  //   const todo = this.todosRepository.create({
  //     name,
  //     description,
  //     startDate: startDate,
  //     endDate: endDate,
  //     isDone: false,
  //   })

  //   const res = await this.todosRepository.save(todo)
  //   return res
  // }

  // async update(
  //   id: string,
  //   createTodoDTO: Partial<CreateTodoDTO>
  // ): Promise<Todo> {
  //   const todo = await this.findById(id)
  //   if (!todo) throw new NotFoundException()

  //   const updateTodo = { ...todo, ...createTodoDTO }
  //   const res = await this.todosRepository.save(updateTodo)
  //   return res
  // }

  // async updateStatus(id: string): Promise<Todo> {
  //   const todo = await this.findById(id)
  //   if (!todo) throw new NotFoundException()

  //   todo.isDone = !todo.isDone
  //   const res = await this.todosRepository.save(todo)
  //   return res
  // }

  // async delete(id: string): Promise<boolean> {
  //   const todo = await this.findById(id)
  //   if (!todo) throw new NotFoundException()

  //   const res = await this.todosRepository.delete(todo)
  //   return res.affected === 1
  // }
}
