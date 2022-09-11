// task kyu 6 "Closures and Scopes"

/*We want to create a function, which returns an array of functions, which return their index in the array. For better understanding, here an example:
var callbacks = createFunctions(5); // create an array, containing 5 functions
callbacks[0](); // must return 0
callbacks[3](); // must return 3
We already implemented that function, but when we actually run the code, the result doesn't look like what we expected. Can you spot, what's wrong with it? A test fixture is also available*/

/*Мы хотим создать функцию, которая возвращает массив функций, которые возвращают свой индекс в массиве. Для лучшего понимания, вот пример:
var callbacks = createFunctions(5); // create an array, containing 5 functions
callbacks[0](); // must return 0
callbacks[3](); // must return 3
Мы уже реализовали эту функцию, но когда мы на самом деле запускаем код, результат выглядит не так, как мы ожидали. Можете ли вы заметить, что с ним не так? Также имеется тестовое приспособление*/

function createFunctions(n) {
    const callbacks = [];
    const foo = (x) => {
        return () => {
            return x
        }
    }
    for (let i = 0; i < n; i++) {
        callbacks.push(foo(i));
    }
    return callbacks;
}