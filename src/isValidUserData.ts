import { User } from './users';

export const isValidUserData = (user: User) =>
  user.username &&
  typeof user.username === 'string' &&
  user.age &&
  typeof user.age === 'number' &&
  user.hobbies &&
  Array.isArray(user.hobbies) &&
  user.hobbies.every((item) => typeof item === 'string') &&
  Object.keys(user).length === 3;
