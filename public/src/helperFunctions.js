function findById(array, targetId) {
    return array.find((arrayIndex) => arrayIndex.id === targetId);
}

module.exports = findById 