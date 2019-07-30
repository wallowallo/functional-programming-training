const inspectArguments = fn => {
    return (...args) => {
        console.log(...args);
        return fn(...args);
    }
}

const add = x => y => x + y;

function adding(x) {
    return function (y) {
        return x + y;
    }
}
const user = 'Krister';
const stranger = 'stranger';
const randomDude = 'random dude';
const greet = x => y => `hello ${x}, good to see you with ${y}`;

const helloUser = greet(user);

const helloStranger = greet('stranger');

const greetUserWithRamanan = helloUser('Ramanan');

const add50 = adding(50);
const addTo50 = add50(10);

const normalAdd = (x, y) => x + y;

const add10 = add(10);

const add50ToTen = add10(50);

const gravityMultiplier = add(20.324);

const pluto = 122323;

const inspectAddTo10 = inspectArguments(add10);
const inspectAdd = inspectArguments(add);
const inspectNormalAdd = inspectArguments(normalAdd);


const s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";

printerError = (s) => {
    let nToZ = 'nopqrstuvwxyz';
    const map = Array.prototype.map;
    const errors = map.call(s, letter => {
        return nToZ.includes(letter) ? letter : '';
    }).filter(x => x !== '').length;
    return `${errors}/${s.length}`;
}

// best practice
printerError = (s) => {
    return s.match(/[^a-m]/g).length + "/" + s.length;
}


const largest = (s1, s2) => {
    return Array.from(new Set(Array.from(`${s1}${s2}`))).sort().join('');
} 

// best practice
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')


isSortedAndHow = (array) => {
    const sortedDescending = array.filter((a, i) => a >= (array[i+1] ? array[i+1] : a - 1));
    const sortedAscending = array.filter((a, i) => a <= (array[i+1] ? array[i+1] : a + 1));
    return sortedAscending.length === array.length 
        ? "yes, ascending" 
        : sortedDescending.length === array.length 
            ? "yes, decending" 
            : "no";
}

// best practice
isSortedAndHow = (arr) => {
    return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])
        ?'yes, ascending'
        : arr.every((x,i)=>i==0||arr[i]<=arr[i-1])
            ?'yes, descending'
            :'no'
}


list = (names) => {
    const split2Last = names.splice(-2);
    return names 
        ? split2Last.length === 2 
            ? names.map(x => x.name + ', ').join('') + split2Last.reduce((a, b) => a.name + ' & ' + b.name) 
            : split2Last.length === 1 
                ? split2Last[0].name 
                : '' 
        : '';
}

// best practice
function list(names){
    return names.reduce(function(prev, current, index, array){
      if (index === 0){
        return current.name;
      }
      else if (index === array.length - 1){
        return prev + ' & ' + current.name;
      } 
      else {
        return prev + ', ' + current.name;
      }
    }, '');
}

//clever one-liner
var list = (names) =>  names.map(x => x.name).join(', ').replace(/(.*),(.*)$/, "$1 &$2")



goodVsEvil = (good, evil) => {
    const goodValues = [1, 2, 3, 3, 4, 10];
    const evilValues = [1, 2, 2, 2, 3, 5, 10];
    const goodForces = splitAndCountForces(good, goodValues);
    const evilForces = splitAndCountForces(evil, evilValues);

    return goodForces > evilForces 
        ? 'Battle Result: Good triumphs over Evil' 
        : evilForces > goodForces 
            ? "Battle Result: Evil eradicates all trace of Good" 
            : "Battle Result: No victor on this battle field";
}

splitAndCountForces = ((forces, values) => forces.split(' ').map((unit, i) => parseInt(unit, 10) * values[i]).reduce((acc, curr) => acc + curr ,0));


// best answer
goodVsEvil = (good, evil) => {  
    const getWorth = ( side, worth ) => {
      return side.split(' ').reduce( function(result, value, index) { 
        return result + (worth[index] * value);
      }, 0);
    }
  
    const result = getWorth( good, [1,2,3,3,4,10] ) - getWorth( evil, [1,2,2,2,3,5,10] );
  
    return result > 0 ? "Battle Result: Good triumphs over Evil" :
           result < 0 ? "Battle Result: Evil eradicates all trace of Good" :
                        "Battle Result: No victor on this battle field";
}



validParentheses = (parens) => {
    //TODO 
  }