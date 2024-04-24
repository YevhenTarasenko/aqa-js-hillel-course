import { faker } from '@faker-js/faker';
import chalk from 'chalk';

let randomText = faker.word.words(5);
let randomTextWithColor = chalk.blue.bold(randomText);
let colorRandomText = `This is random text with color: ${randomTextWithColor}`
// Щоб побачити текс з кольором використовуйте node <file path>
console.log(colorRandomText);


// Як через термінал оновити node js та npm?
// Чому щось ми імпортуємо з {} а щось без них ?