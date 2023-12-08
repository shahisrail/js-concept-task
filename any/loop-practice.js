for (let i = 0; i <= 39; i++) {
    console.log('Ajk amr mon valo nai');
}
for (let i = 58; i <= 98; i++) {
    console.log(i);
}
for (let i = 412; i <= 456; i += 2) {
    console.log(i);
}
for (let i = 581; i <= 623; i += 2) {
    console.log(i);
}

let myLastWeekStudy = ['while lop', 'forloop', 'data type', 'conditoin', 'array ', 'variable declaratoin', 'mathmatical operatoin',];
for (i = 0; i < myLastWeekStudy.length; i++) {
    let topis = myLastWeekStudy[i]
    console.log(topis);
}

let usesMymobile = ['lenovo', 'itel', 'samsung', 'huwai', 'redmi', 'oppo']
let index = 0;
while (index < usesMymobile.length) {
    console.log(usesMymobile[index]);
    index++;

}


let numbers = [10, 20, 30, 34, 40, 50, 60, 86];
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i]
    if (number > 40) {
        break
    }
    console.log(number);
}

let bookPrice = [120, 190, 2200, 220,400,300]
for (let i = 0; i < bookPrice.length; i++) {
    let book = bookPrice[i]
    if (book > 200){
        continue
    }
    console.log(book);
}