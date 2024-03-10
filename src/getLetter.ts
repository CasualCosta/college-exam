const getLetter = (index: number): string => {
    switch (index){
        case 0: return "A"
        case 1: return "B"
        case 2: return "C"
        case 3: return "D"
        case 4: return "E"
        default: throw new Error(`Unhandled exception ${index}`)
    }
}

export default getLetter