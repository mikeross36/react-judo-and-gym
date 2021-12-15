import React from "react"
import { motion } from "framer-motion"
import { cardVariants } from "./bannerVariants"

export default function Banner(){
    return (
        <div className="banner-wrapper" id="home">
            <motion.div className="banner-card"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <h2>Judo & Gym club <br /> Dzuns</h2>
                <h3>JudoNS 2008 Teretana/Fitness centar</h3>
            </motion.div>
        </div>
    )
}