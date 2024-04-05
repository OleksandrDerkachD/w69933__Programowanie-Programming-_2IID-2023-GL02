//Zad 1
let ksiazka = {
    tytul: "Wiedźmin",
    autor: "Oleksandr Derkach",
    rok: 1999
};

function informacjeOKsiazce(ksiazka) {
    return `${ksiazka.tytul} - ${ksiazka.autor} (${ksiazka.rok})`;
}

console.log(informacjeOKsiazce(ksiazka));


let student = {
    imie: "Jon",
    nazwisko: "Gigachad",
    numerAlbumu: "99991",
    oceny: {
        matematyka: 5,
        fizyka: 4,
        informatyka: 3
    }
};
//Zad 2
function sredniaOcen(student) {
    let sum = 0;
    let count = 0;
    for (let przedmiot in student.oceny) {
        sum += student.oceny[przedmiot];
        count++;
    }
    return sum / count;
}

console.log("Średnia ocen studenta:", sredniaOcen(student));

// Zad 3
let samochod = {
    marka: "Mazda",
    model: "6",
    rokProdukcji: 2006,
    kolor: "czarny",
    predkosc: 0,
    przyspiesz: function(wartosc) {
        this.predkosc += wartosc;
    },
    zwolnij: function(wartosc) {
        if (this.predkosc - wartosc >= 0) {
            this.predkosc -= wartosc;
        } else {
            console.log("Nie zwolnić poniżej zera.");
        }
    },
    informacjeoSamochodzie: function() {
        return `${this.marka} ${this.model} (${this.rokProdukcji}), Kolor: ${this.kolor}, Prędkość: ${this.predkosc}`;
    }
};

console.log(samochod.informacjeoSamochodzie());
samochod.przyspiesz(100);
console.log(samochod.informacjeoSamochodzie());
samochod.zwolnij(21);
console.log(samochod.informacjeoSamochodzie());


// Zad 4
samochod.wiekSamochoda = function() {
    let obecnyRok = new Date().getFullYear();
    return obecnyRok - this.rokProdukcji;
};

console.log("Wiek samochodu:", samochod.wiekSamochoda());


// Zad 5
let prostokat = {
    bokA: 5,
    bokB: 7,
    pole: function() {
        return this.bokA * this.bokB;
    },
    obwod: function() {
        return 2 * (this.bokA + this.bokB);
    },
    czyKwadrat: function() {
        return this.bokA === this.bokB;
    }
};

console.log("Pole prostokąta:", prostokat.pole());
console.log("Obwód prostokąta:", prostokat.obwod());
console.log("Czy prostokąt jest kwadratem?", prostokat.czyKwadrat());

//Zad6 
document.getElementById("utworzProstokat").addEventListener("click", function() {
    let bokA = parseFloat(document.getElementById("bokA").value);
    let bokB = parseFloat(document.getElementById("bokB").value);

    let prostokat = {
        bokA: bokA,
        bokB: bokB,
        pole: function() {
            return this.bokA * this.bokB;
        },
        obwod: function() {
            return 2 * (this.bokA + this.bokB);
        },
        czyKwadrat: function() {
            return this.bokA === this.bokB;
        }
    };

    let wynik = document.getElementById("wyniki");
    wynik.innerHTML = `
        <p>Pole prostokąta: ${prostokat.pole()}</p>
        <p>Obwód prostokąta: ${prostokat.obwod()}</p>
        <p>Czy prostokąt jest kwadratem? ${prostokat.czyKwadrat() ? 'Tak' : 'Nie'}</p>
    `;
});