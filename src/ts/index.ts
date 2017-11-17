import allModels from './model';
import Menu from './menu';

let people: string[] = ['Faridul', 'Milon', 'Enamul'];
people.map(item => {
    console.log(item);
});
let allPeople = ['Shagor', ...people];
console.log(allPeople);

let mainMenu = new Menu();
console.log(Menu);
console.log(mainMenu);
console.log(allModels);
