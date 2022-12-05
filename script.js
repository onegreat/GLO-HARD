let lang = prompt("Выберете язык: (ru или en)");
let lang_array = [];
let namePerson = prompt("Введите имя: ")
let authenticationAdm = (namePerson == "Артем") ? "Директор" :
    (namePerson == "Александр") ? "Учитель" :
        "Студент";
// let authenticationTeacher = namePerson == "Александр" ? "Учитель" : "Студент";
console.log(authenticationAdm);

lang_array['ru'] = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
lang_array['en'] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


if (lang == "ru") {
    console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье");
} else if (lang == "en") {
    console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
} else {
    console.log("Допущена ошибка в выборе языка")
}

switch (lang) {
    case "ru":
        console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье")
        break
    case "en":
        console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday")
        break
    default:
        console.log("Допущена ошибка в выборе языка")
}

console.log(lang_array[lang]);





