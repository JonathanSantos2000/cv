function getElement(id) {
    return document.getElementById(id);
}

function toggleClasses(element, classesNew, classesOld) {
    element.classList.toggle(classesOld);
    element.classList.toggle(classesNew);
}

const chk = getElement('chk');
const body = document.body;

const elements = [
    'Left-Column', 'Left-Column', 'sobre', 'educacao',
    'projetos', 'footer', 'h2-sobre', 'h2-i-sobre',
    'work', 'city', 'email', 'number',
    'i-Skills', 'html', 'css', 'js',
    'php', 'idiomas', 'pt', 'ing',
    'h6EducacaoDIO', 'h2TitleEducacao', 'iTitleEducacao', 'spanDio',
    'h6Uni', 'h2Projetos', 'iProjetos', 'projeto1',
    'projeto2'
];

const classListsOld = [
    'w3-white', 'w3-text-grey', 'w3-white', 'w3-white',
    'w3-white', 'w3-indigo', 'w3-text-grey', 'w3-text-indigo',
    'w3-text-indigo', 'w3-text-indigo', 'w3-text-indigo', 'w3-text-indigo',
    'w3-text-indigo', 'w3-indigo', 'w3-indigo', 'w3-indigo',
    'w3-indigo', 'w3-text-indigo', 'w3-indigo', 'w3-indigo',
    'w3-text-indigo', 'w3-text-grey', 'w3-text-indigo', 'w3-indigo',
    'w3-text-indigo', 'w3-text-grey', 'w3-text-indigo', 'w3-text-indigo',
    'w3-text-indigo'
];

const classListsNew = [
    'w3-dark-grey', 'w3-text-white', 'w3-dark-grey', 'w3-dark-grey',
    'w3-dark-grey', 'w3-dark-grey', 'w3-text-white', 'w3-text-green',
    'w3-text-green', 'w3-text-green', 'w3-text-green', 'w3-text-green',
    'w3-green', 'w3-green', 'w3-green', 'w3-green',
    'w3-green', 'w3-text-green', 'w3-green', 'w3-green',
    'w3-text-green', 'w3-text-white', 'w3-text-green', 'w3-green',
    'w3-text-green', 'w3-text-white', 'w3-text-green', 'w3-text-green',
    'w3-text-green'
];

chk.addEventListener('change', () => {
    body.classList.toggle('w3-light-grey');
    body.classList.toggle('w3-black');

    for (let i = 0; i < elements.length; i++) {
        const element = getElement(elements[i]);
        console.log(element);
        const classesOld = classListsOld[i];
        console.log(classesOld);
        const classesNew = classListsNew[i];
        console.log(classesNew);
        toggleClasses(element, classesNew, classesOld);
        console.log(element);
        console.log("--------");

    }
});

