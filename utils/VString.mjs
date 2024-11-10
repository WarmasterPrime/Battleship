
import {ANSI} from "./ansi.mjs";
import {stdin, stdout} from "node:process";

class VString extends String {


	constructor(stringValue="") {
		super(stringValue);
	}

	get length() {
		retrun VString.parse(this);
	}

	/**
	 * Centers the string horizontally.
	 * @returns {VString}
	 */
	centerHorizontal() {
		return new VString(`${ANSI.moveCursorTo(0, Math.ceil((stdout.columns - this.length) / 2))}${this}`);
	}
	/**
	 * Sets the color of the entire string value.
	 * @param {string} color The color code to implement.
	 * @returns {VString}
	 */
	setColor(color) {
		return new VString(`${color}${this}${ANSI.COLOR_RESET}`);
	}
	/**
	 * Appends the color code to the string value.
	 * @param {any} color
	 * @returns {VString}
	 */
	addColor(color) {
		return new VString(`${this}${color}`);
	}
	/**
	 * Encapsulates the string value with the {paddingValue}.
	 * @param {string} paddingValue The value to surround the string value with.
	 * @returns {VString}
	 */
	encapsulate(paddingValue) {
		return new VString(`${paddingValue + this + paddingValue}`);
	}
	/**
	 * Removes all formatting and returns the display representation of the string value.
	 * @param {string} text The text to parse.
	 * @returns {string}
	 */
	static parse(text) {
		return this.replace(/[^\w\d\s]+/, "");
	}

}

export default VString;