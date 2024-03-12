const CHARACTERS = "0123456789ABCDEF".split("");

const uuid = () => {
    const uuid = [];
    for (let i = 0; i < 36; i++) {
        switch (i) {
        case 8:
        case 13:
        case 18:
        case 23:
            uuid[i] = "-";
            break;
        case 14:
            uuid[i] = "4";
            break;
        case 19:
            uuid[i] = CHARACTERS[(Math.random() * 4) | 8];
            break;
        default:
            uuid[i] = CHARACTERS[Math.floor(Math.random() * 16)];
        }
    }
    return uuid.join("");
};

export default uuid;
