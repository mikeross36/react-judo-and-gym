import nextId from "react-id-generator"
import hornyGoat from "../../../images/horny-goat.png"
import brainBooster from "../../../images/brain-booster.png"
import femaleLibido from "../../../images/female-libido.png"
import brainDust from "../../../images/brain-dust.png"
import sexDust from "../../../images/sex-dust.png"
import powerDust from "../../../images/power-dust.png"

export const products = [
    {
        id: nextId(),
        title: "Horny Goat Weed",
        image: hornyGoat,
        price: 119.99,
        quantity: 1,
    },
    {
        id: nextId(),
        title: "Brain Booster",
        image: brainBooster,
        price: 175.85,
        quantity: 1,
    },
    {
        id: nextId(),
        title: "Female Libido",
        image: femaleLibido,
        price: 143.99,
        quantity: 1,
    },
    {
        id: nextId(),
        title: "Brain Dust",
        image: brainDust,
        price: 130.55,
        quantity: 1,
    },
    {
        id: nextId(),
        title: "Sex Dust",
        image: sexDust,
        price: 135.55,
        quantity: 1,
    },
    {
        id: nextId(),
        title: "Power-Dust",
        image: powerDust,
        price: 130.55,
        quantity: 1,
    },
]