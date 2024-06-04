const users = [
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 18 },
    { name: 'David', age: 15 },
    { name: 'Eve', age: 20 }
];


const sortedUsers = users.sort((a, b) => a.age - b.age);

console.log(sortedUsers);