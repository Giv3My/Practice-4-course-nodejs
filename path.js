const path = require('path');

console.log("Путь к файлу: ", __filename);

console.log("Название файла: ", path.basename(__filename));

console.log("Расширение файла: ", path.extname(__filename));

console.log("Название директории ", path.dirname(__filename));

console.log(path.parse(__filename)); // Возвращает объект, св-ми которого являются елементы пути к файлу
