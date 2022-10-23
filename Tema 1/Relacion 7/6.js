function onlyUniques(...arguments) {
    let set = new Set(arguments);
    return set;
}

for (item of onlyUniques(2,2,2,1,5,1,6)) {
    document.write(item);
}