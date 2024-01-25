let myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["1", "2", "3", "4", "5"]

for (const key in programming) {
    console.log(programming[key]);
}