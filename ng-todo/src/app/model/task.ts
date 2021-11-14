import { Priority } from './priority';
import { Category } from './category';

export class Task {
  constructor(
    public id: number,
    public title: string,
    public completed: boolean,
    public priority?: Priority,
    public category?: Category,
    public date?: Date
  ) {}
}
