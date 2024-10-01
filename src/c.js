export function g(a) {
    console.log("Function g");
    return a;
}

import("./d").then((m)=>console.warn(m))
