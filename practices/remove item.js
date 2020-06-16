const names = ['sakil', 'abir', 'bipu', 'sumon'];

const findName = text => {
    return names.find(name => name === text);
};

const findIndex = text => {
    return names.findIndex(name => name === text);
};

const index = findIndex('bipu');

names.splice(index, 1);

console.log(names);
