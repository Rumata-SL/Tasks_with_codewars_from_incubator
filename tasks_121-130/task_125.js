// task kyu 6 "+1 Array"
/*Given an array of integers of any length, return an array that has 1 added to the value represented by the array.
the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.
Examples
For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].
[4, 3, 2, 5] would return [4, 3, 2, 6]*/

/*Учитывая массив целых чисел любой длины, верните массив, в котором 1 добавлено к значению, представленному массивом.
массив не может быть пустым
допускаются только неотрицательные однозначные целые числа
Возврат nil(или эквивалент на вашем языке) для недопустимых входных данных.
Примеры
Например, массив [2, 3, 9]равен 239, добавление единицы вернет массив [2, 4, 0].
[4, 3, 2, 5]вернется[4, 3, 2, 6]*/

function upArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            return null
        }
    }
    let res = ((+arr.join("")) + 1).toString().split("").map(el => +el)
    return res
}

upArray([4, 3, 2, 5])


function upArray_(arr) {
    if (!arr.every(el => el >= 0) || arr.length === 0) return null
    if (arr.some(el => el.toString().length > 1)) return null
    let res = [];
    for (let i = 0; i < arr.length; i += 15) {
        res.push(arr.slice(i, i + 15))
    }
    res[res.length - 1] = res[res.length - 1].join('') * 1 + 1
    res = res.map(el => Array.isArray(el) ? el.join('') * 1 : el)
    return (res.join('')).split('').map(el => el * 1)
}