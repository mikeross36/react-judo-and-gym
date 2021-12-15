export const modalVariants = {
    hidden: {
        transform: "scale(0) rotate(720deg)",
        opacity: 0,
        transition: {
          delay: .2,
        },
    },
      visible: {
        transform: " scale(1) rotate(0deg)",
        opacity: 1,
        transition: {
          duration: 1,
        },
    },
      exit: {
        transform: "scale(0) rotate(-720deg)",
        opacity: 0,
        transition: {
          duration: .3,
        },
    },
}