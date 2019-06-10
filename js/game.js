//Fetch para responder preguntas:

let responderPreguntas = function () {
    let questions = document.getElementById("question").value;
}

fetch("https://preguntadas.herokuapp.com/v1/questions/answer", {
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json;  charset=UTF-8",
        "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hZ2FuIiwiaWF0IjoxNTU5ODMyMTQxfQ.U4HB7Ld3jICdlhmSQP2iwmQyVc5ffcUkDDtJFVwrsug",

    },
    method: "post",
    body: JSON.stringify({
        questions: [
            "Famosa diarista, poeta, periodista y escritora nacida en Suiza y radicada en Argentina.",
            "¿Dónde cierra la puerta Gilda?",
            "Su vida estuvo marcada por el infortunio de contraer poliomielitis y después por un grave accidente en su juventud que la mantuvo postrada en cama durante largos periodos, llegando a someterse hasta a 32 operaciones quirúrgicas… ¿De quién se trata?",
            "Considerada prócer cultural, ícono de casi todas las infancias y autora de canciones como 'Manuelita la tortuga' y 'La reina Batata'.",
            "¿Qué día de la semana se realiza la vuelta a la Plaza de Mayo por las Abuelas?",
            "Los pañuelos que llevan las Abuelas de Plaza de Mayo en sus cabezas son de color blanco. ¿Cuál es su significado?",
            "¿A qué se dedicaba Evita antes de convertirse en dirigente política?",
            "Primer mujer con rango militar en el mundo.",
            "¿Quién fue la primer mujer en dedicarse a la medicina en Argentina?",
            "Primer mujer en ganar dos premios Nobel de distintas especialidades (Física y Química).",
            "¿Cómo se llama la científica que ayudó a crear el algoritmo que hizo posible la primer foto de un agujero negro?",
            "Si decimos 'mujer pionera en la programación', hablamos de...",
        ],
    })
}).then(function (result) {
    return result.json();
}).then(function (result) {
    console.log(result);
}).catch(function (error) {

});

//Fetches para agregar preguntas:

fetch("https://preguntadas.herokuapp.com/v1/questions", {
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json;  charset=UTF-8",
        "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hZ2FuIiwiaWF0IjoxNTU5ODMyMTQxfQ.U4HB7Ld3jICdlhmSQP2iwmQyVc5ffcUkDDtJFVwrsug",
    },
    method: "post",
    body: JSON.stringify({

        //Pregunta 1
        title: "Famosa diarista, poeta, periodista y escritora nacida en Suiza y radicada en Argentina.",
        answer: 2,
        answers: [
            "Mercedes Sosa",
            "Alfonsina Storni",
            "Victoria Ocampo",
            "Violeta Parra",
        ],
        category: "arte",
    })
}).then(function (result) {
    return result.json();
}).then(function (result) {
    if (result.success) {
        alert(result.message)
    } else {
        alert(result.message)
    }
}).catch(function (error) {
});

//______________________________________________

fetch("https://preguntadas.herokuapp.com/v1/questions", {
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json;  charset=UTF-8",
        "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hZ2FuIiwiaWF0IjoxNTU5ODMyMTQxfQ.U4HB7Ld3jICdlhmSQP2iwmQyVc5ffcUkDDtJFVwrsug",
    },
    method: "post",
    body: JSON.stringify({


        //Pregunta 2
        title: "¿Dónde cierra la puerta Gilda?",
        answer: 3,
        answers: [
            "En la cabeza",
            "En la espalda",
            "En la cara",
            "En los pies",
        ],
        category: "arte",

    })
}).then(function (result) {
    return result.json();
}).then(function (result) {
    if (result.success) {
        alert(result.message)
    } else {
        alert(result.message)
    }
}).catch(function (error) {
});

//_______________________________________

//Pregunta 3

fetch("https://preguntadas.herokuapp.com/v1/questions", {
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json;  charset=UTF-8",
        "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hZ2FuIiwiaWF0IjoxNTU5ODMyMTQxfQ.U4HB7Ld3jICdlhmSQP2iwmQyVc5ffcUkDDtJFVwrsug",
    },
    method: "post",
    body: JSON.stringify({


        title: "¿Su vida estuvo marcada por el infortunio de contraer poliomielitis y después por un grave accidente en su juventud que la mantuvo postrada en cama durante largos periodos, llegando a someterse hasta a 32 operaciones quirúrgicas… ¿De quién se trata?",
        answer: 4,
        answers: [
            "Remedios de Escalada",
            "Eva Perón",
            "Juana Azurduy",
            "Frida Kahlo",
        ],
        category: "arte",

    })
}).then(function (result) {
    return result.json();
}).then(function (result) {
    if (result.success) {
        alert(result.message)
    } else {
        alert(result.message)
    }
}).catch(function (error) {
});

//________________________________

//Pregunta 4

fetch("https://preguntadas.herokuapp.com/v1/questions", {
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json;  charset=UTF-8",
        "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hZ2FuIiwiaWF0IjoxNTU5ODMyMTQxfQ.U4HB7Ld3jICdlhmSQP2iwmQyVc5ffcUkDDtJFVwrsug",
    },
    method: "post",
    body: JSON.stringify({

        title: "Considerada prócer cultural, ícono de casi todas las infancias y autora de canciones como 'Manuelita la tortuga' y 'La reina Batata'.",
        answer: 3,
        answers: [
            "Panam",
            "Xuxa",
            "María Elena Walsh",
            "Cris Morena",
        ],
        category: "arte",



    })
}).then(function (result) {
    return result.json();
}).then(function (result) {
    if (result.success) {
        alert(result.message)
    } else {
        alert(result.message)
    }
}).catch(function (error) {
});

//___________________________________

fetch("https://preguntadas.herokuapp.com/v1/questions", {
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json;  charset=UTF-8",
        "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hZ2FuIiwiaWF0IjoxNTU5ODMyMTQxfQ.U4HB7Ld3jICdlhmSQP2iwmQyVc5ffcUkDDtJFVwrsug",
    },
    method: "post",
    body: JSON.stringify({

        //Pregunta 5
        title: "¿Qué día de la semana se realiza la vuelta a la Plaza de Mayo por las Abuelas?",
        answer: 4,
        answers: [
            "Lunes",
            "Martes",
            "Miércoles",
            "Jueves",
        ],
        category: "historia",

    })
}).then(function (result) {
    return result.json();
}).then(function (result) {
    if (result.success) {
        alert(result.message)
    } else {
        alert(result.message)
    }
}).catch(function (error) {
});

//______________________________


fetch("https://preguntadas.herokuapp.com/v1/questions", {
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json;  charset=UTF-8",
        "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hZ2FuIiwiaWF0IjoxNTU5ODMyMTQxfQ.U4HB7Ld3jICdlhmSQP2iwmQyVc5ffcUkDDtJFVwrsug",
    },
    method: "post",
    body: JSON.stringify({


        //Pregunta 6
        title: "Los pañuelos que llevan las Abuelas de Plaza de Mayo en sus cabezas son de color blanco. ¿Cuál es su significado?",
        answer: 1,
        answers: [
            "Porque en sus inicios estaban hechos con pañales de tela para bebés.",
            "Porque es el color de la paz.",
            "Por pura casualidad, no se definió un por qué.",
            "Simboliza lo opuesto a la oscuridad, que sería el negro.",
        ],
        category: "historia",



    })
}).then(function (result) {
    return result.json();
}).then(function (result) {
    if (result.success) {
        alert(result.message)
    } else {
        alert(result.message)
    }
}).catch(function (error) {
});

//________________________


fetch("https://preguntadas.herokuapp.com/v1/questions", {
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json;  charset=UTF-8",
        "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hZ2FuIiwiaWF0IjoxNTU5ODMyMTQxfQ.U4HB7Ld3jICdlhmSQP2iwmQyVc5ffcUkDDtJFVwrsug",
    },
    method: "post",
    body: JSON.stringify({


        //Pregunta 7
        title: "¿A qué se dedicaba Evita antes de convertirse en dirigente política?",
        answer: 1,
        answers: [
            "Actriz",
            "Periodista",
            "Programadora",
            "Vendedora",
        ],
        category: "historia",



    })
}).then(function (result) {
    return result.json();
}).then(function (result) {
    if (result.success) {
        alert(result.message)
    } else {
        alert(result.message)
    }
}).catch(function (error) {
});

//_________________________________

fetch("https://preguntadas.herokuapp.com/v1/questions", {
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json;  charset=UTF-8",
        "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hZ2FuIiwiaWF0IjoxNTU5ODMyMTQxfQ.U4HB7Ld3jICdlhmSQP2iwmQyVc5ffcUkDDtJFVwrsug",
    },
    method: "post",
    body: JSON.stringify({

        //Pregunta 8
        title: "Primer mujer con rango militar en el mundo.",
        answer: 2,
        answers: [
            "Lola Mora",
            "Juana Azurduy",
            "Encarnación Ezcurra",
            "Sor Juana Ines de la Cruz",
        ],
        category: "historia",



    })
}).then(function (result) {
    return result.json();
}).then(function (result) {
    if (result.success) {
        alert(result.message)
    } else {
        alert(result.message)
    }
}).catch(function (error) {
});

//__________________________

//Pregunta 9

fetch("https://preguntadas.herokuapp.com/v1/questions", {
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json;  charset=UTF-8",
        "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hZ2FuIiwiaWF0IjoxNTU5ODMyMTQxfQ.U4HB7Ld3jICdlhmSQP2iwmQyVc5ffcUkDDtJFVwrsug",
    },
    method: "post",
    body: JSON.stringify({

        title: "¿Quién fue la primer mujer en dedicarse a la medicina en Argentina?",
        answer: 2,
        answers: [
            "Remedios de Escalada",
            "Cecilia Grierson",
            "Mariquita Sanchez",
            "Alicia Moreau",
        ],
        category: "ciencia",


    })
}).then(function (result) {
    return result.json();
}).then(function (result) {
    if (result.success) {
        alert(result.message)
    } else {
        alert(result.message)
    }
}).catch(function (error) {
});

//____________________________

fetch("https://preguntadas.herokuapp.com/v1/questions", {
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json;  charset=UTF-8",
        "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hZ2FuIiwiaWF0IjoxNTU5ODMyMTQxfQ.U4HB7Ld3jICdlhmSQP2iwmQyVc5ffcUkDDtJFVwrsug",
    },
    method: "post",
    body: JSON.stringify({

        //Pregunta 10
        title: "Primer mujer en ganar dos premios Nobel de distintas especialidades (Física y Química).",
        answer: 3,
        answers: [
            "Cecilia Grierson",
            "Mirtha Legrand",
            "Maria Curie",
            "Chavela Vargas",
        ],
        category: "ciencia",


    })
}).then(function (result) {
    return result.json();
}).then(function (result) {
    if (result.success) {
        alert(result.message)
    } else {
        alert(result.message)
    }
}).catch(function (error) {
});

//___________________________

fetch("https://preguntadas.herokuapp.com/v1/questions", {
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json;  charset=UTF-8",
        "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hZ2FuIiwiaWF0IjoxNTU5ODMyMTQxfQ.U4HB7Ld3jICdlhmSQP2iwmQyVc5ffcUkDDtJFVwrsug",
    },
    method: "post",
    body: JSON.stringify({

        //Pregunta 11
        title: "¿Cómo se llama la científica que ayudó a crear el algoritmo que hizo posible la primer foto de un agujero negro?",
        answer: 1,
        answers: [
            "Katie Bouman",
            "Victoria Xipolitakis",
            "Rosario Vera Peñaloza",
            "Gabriela Gonzalez",
        ],
        category: "ciencia",



    })
}).then(function (result) {
    return result.json();
}).then(function (result) {
    if (result.success) {
        alert(result.message)
    } else {
        alert(result.message)
    }
}).catch(function (error) {
});

//____________________________

fetch("https://preguntadas.herokuapp.com/v1/questions", {
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json;  charset=UTF-8",
        "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hZ2FuIiwiaWF0IjoxNTU5ODMyMTQxfQ.U4HB7Ld3jICdlhmSQP2iwmQyVc5ffcUkDDtJFVwrsug",
    },
    method: "post",
    body: JSON.stringify({

        //Pregunta 12
        title: "Si decimos 'mujer pionera en la programación', hablamos de...",
        answer: 2,
        answers: [
            "Susana Gimenez",
            "Ada Lovelace",
            "Isabel Allende",
            "Grace Murray Hopper",
        ],
        category: "ciencia",

    })
}).then(function (result) {
    return result.json();
}).then(function (result) {
    if (result.success) {
        alert(result.message)
    } else {
        alert(result.message)
    }
}).catch(function (error) {
});

//____________________

