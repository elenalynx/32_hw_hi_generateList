// Написати функцію generateList(array), яка приймає масив із чисел та масивів чисел (наприклад [1,2, 3])
// і генерує список з елементів

const oneDimensionalArray = [1, 2, 3];
const twoDimensionalArray = [1, 2, [1.1, 1.2, 1.3], 3];

/**
 * @param {Array} array
 */
function generateList(array) {
    if (array instanceof Array) {
        const ul = document.createElement('ul');
        document.body.append(ul);

        array.forEach((elem) => {
            const li = document.createElement('li');
            ul.append(li);

            if (elem instanceof Array) {
                const ul2 = document.createElement('ul');
                li.append(ul2);

                elem.forEach((item) => {
                    const li = document.createElement('li');
                    li.innerText = item;
                    ul2.append(li);
                });

            } else {
                li.innerText = elem;
            }
        });
    } else {
        alert('This is not Array');
    }
}

generateList(oneDimensionalArray);
generateList(twoDimensionalArray);