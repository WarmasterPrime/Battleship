
import { ANSI } from "./ansi.mjs";
import { stdin, stdout } from "node:process";

function appendToEnd(source, count, char) {
    let output = source;
    for (let i = 0; i < count; i++) {
        output += char;
    }
    return output;
}

String.prototype.appendToEnd = (count, char) => appendToEnd(this, count, char);

String.prototype.centerHorizontal = () => `${ANSI.moveCursorTo(0, Math.ceil((stdout.column - this.length) / 2))}${this}`;

String.prototype.setColor = (color) => `${color}${this}${ANSI.COLOR_RESET}`;




export default appendToEnd;