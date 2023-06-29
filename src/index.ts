const func = (str: string, str2: string) => str + str2;

const message = 'Hello, TypeScript!';
console.log(message);

const message2 = 'Hello, TypeScript!';
console.log(message2);

const message3 = func(message, message2);
console.log(message3);
