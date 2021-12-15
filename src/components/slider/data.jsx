import nextId from "react-id-generator"
import vlada from "../../images/vlada.jpg"
import milica from "../../images/milica.jpg"
import nikola from "../../images/nikola.jpg"
import steva from "../../images/steva.jpg"

export const slides = [
    {
        id: nextId(),
        img: vlada,
        name: "Vladimir Cvetković",
        title: "customer",
        text:  '"Brate, teretana je vrh! Ekipa je extra. Treniram svaki dan po tri sata keve mi. Posle klopa u Michelangelu"'
    },
    {
        id: nextId(),
        img: milica,
        name: "Milica Bećagol",
        title: "customer",
        text:  '"Brate, teretana je vrh! Ekipa je extra. Treniram svaki dan po tri sata keve mi. Posle klopa u Michelangelu"'
    },
    {
        id: nextId(),
        img: nikola,
        name: "Nikola Šimičić",
        title: "customer",
        text: '"Brate, teretana je vrh! Ekipa je extra. Treniram svaki dan po tri sata keve mi. Posle klopa u Michelangelu"'
    },
    {
        id: nextId(),
        img: steva,
        name: "Stevan Anojčić",
        title: "customer",
        text:  '"Brate, teretana je vrh! Ekipa je extra. Treniram svaki dan po tri sata keve mi. Posle klopa u Michelangelu"'
    }
]