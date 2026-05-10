


// let numbers = [1,2,3,4];
// numbers.forEach((i,idx) => console.log(i));
// console.log();

// numbers = [...numbers,5];
// numbers.forEach((i,idx) => console.log(i));


let user = {
    id: 1,
    username: 'dvhoaf'

}

const updates = {
    address: 'TB',
    role: 'admin'
}

user = { ...user, ...updates };

console.log(user);
