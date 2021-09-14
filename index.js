const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
        cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop("Garfield");
}

function destructivelyRemoveFirstCat() {
    cats.shift("Milo");
}

function appendCat(name) {
    const newArray =[...cats]
    newArray.push(name);    
    return newArray;
}

function prependCat(name) {
    const newArray =[...cats]
    newArray.unshift("Arnold");    
    return newArray;
}

function removeLastCat(name) {
    const newArray =[...cats]
    newArray.pop(name);    
    return newArray;
}

function removeFirstCat(name) {
    const newArray =[...cats]
    newArray.shift(name);    
    return newArray;
}