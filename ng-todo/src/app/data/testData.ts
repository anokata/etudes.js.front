import { Category } from '../model/category';
import { Priority } from '../model/priority';
import { Task } from '../model/task';

export class TestData {
  static categories: Category[] = [
    { id: 1, title: 'Work' },
    { id: 2, title: 'Family' },
    { id: 3, title: 'Study' },
    { id: 4, title: 'Rest' },
    { id: 5, title: 'Sport' },
    { id: 6, title: 'Food' },
    { id: 7, title: 'Finance' },
    { id: 8, title: 'Tech' },
    { id: 9, title: 'Health' },
    { id: 10, title: 'Auto' },
    new Category(11, 'Misc'),
  ];

  static priorities: Priority[] = [
    { id: 1, title: 'Low', color: '#e5e5e5' },
    { id: 2, title: 'Normal', color: '#85D1B2' },
    { id: 3, title: 'High', color: '#F1828D' },
    { id: 4, title: 'Important !', color: '#D1336D' },
  ];

  static tasks: Task[] = [
    {
      id: 1,
      title: 'Залить бензин полный бак',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[9],
      date: new Date('2019-04-10'),
    },

    {
      id: 2,
      title: 'Передать отчеты начальнику управления',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[0],
      date: new Date('2019-04-11'),
    },

    {
      id: 3,
      title: 'Убраться у себя в комнате, полить растения',
      priority: TestData.priorities[2],
      completed: true,
      category: TestData.categories[1],
    },

    {
      id: 4,
      title: 'Сходить в парк с семьей, пригласить друзей',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[1],
      date: new Date('2019-08-17'),
    },
    {
      id: 5,
      title: 'Найти и выучить учебник по квантовой физике',
      completed: false,
      category: TestData.categories[2],
    },
    {
      id: 6,
      title: 'Сходить на семинар по программированию',
      priority: TestData.priorities[1],
      completed: true,
      category: TestData.categories[2],
      date: new Date('2019-06-11'),
    },

    {
      id: 7,
      title: 'Найти билеты в Турцию, выбрать отель',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[3],
    },
    {
      id: 8,
      title: 'Приготовить ужин для всей семьи (семга с картошкой)',
      completed: false,
      category: TestData.categories[5],
    },
    {
      id: 9,
      title: 'Подтянуться 10 раз',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2019-03-12'),
    },
  ];
}
