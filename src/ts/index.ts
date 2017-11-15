let people: string[] = ['Farid', 'Milon', 'Enamul'];
people.map(item => {
    console.log(item);
});
let allPeople = ['Shagor', ...people];
console.log(allPeople);