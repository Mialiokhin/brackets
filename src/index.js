module.exports = function check(str, bracketsConfig) {
    let configString = bracketsConfig.join('').replace(/,/g, ''); // Соединяем все скобки из массива в одну строку
    let stack = [];// Создаем пустой стек для хранения индексов скобок
    for (let bracketElement of str) {// Проходим по каждой скобке во входной строке
        let configIndexElement = configString.indexOf(bracketElement) // Получаем индекс скобки в строке со всеми скобками
        if (configIndexElement % 2 === 0) {
            if (bracketElement === configString[configIndexElement + 1] && stack[stack.length - 1] === configIndexElement) {
                stack.pop();// Проверяем на закрытие для скобок в виде линии которые не проверить по индексу
            } else {
                stack.push(configIndexElement) // Если индекс скобки четный - добавляем его в стек
            }
        }
        if (configIndexElement % 2 !== 0) {// Если индекс нечетный -  удаляем закрывающиеся скобки
            if (stack.pop() !== configIndexElement - 1) {
                return false;
            }
        }
    }
    return stack.length === 0 // Если в стеке ничего не осталось - все скобки совпадают

}

