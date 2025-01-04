import { SAY_HELLO } from "./actionTypes";

export const sayHello = (name: string) => ({
    type: SAY_HELLO,
    payload: name
})