const findItem = (source, item) => {
    const index = source.find(data => data === item);
    return index ? index : -1;
};

const findItemIndex = (source, item) => {
    const index = source.findIndex(data => data === item);
    return index ? index : -1;
};

module.exports = { findItem, findItemIndex };
