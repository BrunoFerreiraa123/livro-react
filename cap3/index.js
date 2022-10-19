const busStop = (bus) => {
    let entryBus = 0;
    let outBus = 0;

    for (let val of bus) {

    entryBus += val[0]
    outBus += val[1]
    }

return entryBus - outBus;
}
console.log(busStop([[10, 0], [3, 5], [5, 8]]));