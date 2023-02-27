let grades = [
	1, 
	1.7, 
	1, 
	2.2, 
	1.3, 
	2.4, 
	1.6, 
	1.7, 
	1.8, 
	1.7,
	1.8,
	1.75,
	1.2,
	2,
	0.5,
	1.7,
	1.9,
	1.1,
	2.75,
	0.75,
	2,
	3,
	1.5,
	1.8,
	2.1,
	2.4,
	3.6,
	2.5,
	3.5,
	3.9,
	3.1,
	2.6,
	2.5,
	1.75,
	3,
	3.3,
	4
];

let sum = 0;

grades.forEach(item => {
	sum += item;
});

const mean = sum / grades.length;
console.log(mean);                      // Prints 2.1189

// TO APPEND AN ELEMENT

let copy = [...grades];
let element = 3;

copy.push(element)
console.log(copy[copy.length-1]); // Outputs 3, the last appended item

// TO REMOVE LAST ELEMENT

copy.pop();
console.log(copy[copy.length-1]); // Outputs 4, the last element of grades

// TO SPLIT THE LIST

let index = copy.length/2;
let copyHalf = copy.slice(index);
console.log(copyHalf.length); // Outputs 19, half of the elements of grades

// EXAMPLE OF SPLICE:

let listinha = ['oi', 'mae', 'pai', 'cu'];
listinha.splice(1,0,':)');                  // Remove 0 elements from index 1 and add :)
listinha.splice(3,2,':(');                  // Remove 2 elements from index 3 and add :(

console.log(listinha);

// CONCATENATE

const salaJS = ["Evaldo", "Camis", "Mari"];
const salaPy = ["Ju", "Leo", "Raquel"];

const salas = salaJS.concat(salaPy);

const media = [1,2,3,4,5,6]
const alunos_media = [salas, media];

console.log(salas);                         // Prints the elements ordered starting with salasJS, ending with salasPy


// FINDING ELEMENT IN ARRAY

function showNameAndGrade(aluno) {
    if (salas[0].includes(aluno)) {
        console.log(`${aluno} is registered.`);
        const [alunos, medias] = alunos_media;
        const index = alunos.indexOf(aluno);
        const mean = medias[index];
        console.log(`${aluno} has mean ${mean}`);
    } else {
        console.log(`${aluno} not found.`);
    }
}

showNameAndGrade("Evaldo");                 // Evald has mean 1

// FOR OF IN LISTS

let soma_media = 0;
for (let nota of media) {
    soma_media += nota;
}

console.log('Soma notas: ', soma_media);    // Prints 21

// MAP

let notas = [10, 9, 8, 5, 6];

notas = notas.map((notas) => {
    return notas + 1 >= 10 ? 10 : notas + 1;
});

console.log(notas);                         // Prints [10,10,9,6,7]

// STRINGS and MAP
 
let nomes = ['ana joa', 'BIA silva', 'Caio vini'];

nomes = nomes.map((nome) => {
    return nome.toUpperCase();
});

console.log(nomes);

// FILTERING

let reprovados = salas.filter((aluno, index) => {
    return media[index] < 5;
});

console.log(reprovados);                    // Prints [Evaldo, Camis, Mari, Ju]


// SET

nomes = ["Ana", "Clara", "Maria", "Maria", "Ju", "Ju"];

const set = new Set(nomes);

nomes = [...set];

console.log(nomes);                         // Prints [Ana, Clara, Maria, ju]


