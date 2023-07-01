export interface User {
  id: string;
  username: string;
  age: number;
  hobbies: string[];
}

export const users: User[] = [
  {
    id: '1',
    username: 'Max Mustermann',
    age: 25,
    hobbies: ['Sport', 'Games'],
  },
  {
    id: '2',
    username: 'Kate Muller',
    age: 27,
    hobbies: ['Games', 'Cooking'],
  },
  {
    id: '3',
    username: 'Hans Gruber',
    age: 33,
    hobbies: [],
  },
];
