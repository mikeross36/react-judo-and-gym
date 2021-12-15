export const cardVariants = {
    hidden: {
        transform: "scale(0) rotateX(-360deg)",
        opacity: 0,
        transition: {
          delay: .2,
        },
    },
      visible: {
        transform: " scale(1) rotateX(0deg)",
        opacity: 1,
        transition: {
          duration: .7,
        },
    },
      exit: {
        transform: "scale(0) rotateX(360deg)",
        opacity: 0,
        transition: {
          duration: .2,
        },
    },
}