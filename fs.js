const fs = require('fs');
const path = require('path');

//Создание новой пакпи
fs.mkdir(path.join(__dirname, 'test'), err => {
    if (err) throw err;

    console.log("Folder created");
})

//Создание файла
const filePath = path.join(__dirname, "test", "test.txt")

fs.writeFile(filePath, "Test", err => {
    if (err) throw err;

    console.log("File created");
});

//Добавление контента без перезаписывания файла
fs.appendFile(filePath, "\nTest2", err => {
    if (err) throw err;

    console.log("File updated");
});