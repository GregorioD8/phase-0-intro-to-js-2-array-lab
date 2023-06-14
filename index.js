// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
console.log(cats);

function destructivelyAppendCat(name) {
   return cats.push(name);
}

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    return cats.pop(cats.length -1);
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
 }

 function prependCat(name) {
    const newCats = [name, ...cats];
    return newCats;
 }

 function removeLastCat() {
    return cats.slice(0, cats.length -1);
}

function removeFirstCat() {
    return cats.slice(1);
}
