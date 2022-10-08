// export const getLesserEvil = (threat1, threat2) => {
//   return threat1;
// }


export const getLesserEvil = (threat1, threat2) => {
    // Primero evalúas y para evaluar, debes entrar en el objeto y evaluar la propiedad evilFactor
    if(threat1.evilFactor < threat2.evilFactor ){
    return threat1
    } else {
    return threat2
    }
    }