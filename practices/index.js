const names = ['abir', 'sakil', 'bipu', 'sumon'];

const findName = (source, item) => {
    const findItem = source.findIndex(name => name === item);
    return findItem ? findItem : -1;
};

const contain = item => {
    const contains = findName(names, item);
    if (contains > -1) {
        return 'found';
    } else {
        return 'not found';
    }
};

console.log(contain('bipu'));
