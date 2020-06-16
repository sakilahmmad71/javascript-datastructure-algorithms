// ensuring the list item does filtered.
const ignoreWhiteSpace = item => {
    return item.trim().length > 0 ? true : false;
};

const checkType = item => {
    return typeof item === 'string' ? true : false;
};

const filterInputItem = item => {
    return checkType(item) && ignoreWhiteSpace(item);
};

module.exports = { filterInputItem };
