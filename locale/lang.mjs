
import { LOCALE } from "../locale/locale.mjs";

class Lang {
	
	#languageCode;
	/**
	 * Creates a new instance of the Lang class object.
	 * @param {string} languageCode The language code to use for the language system.
	 */
	constructor(languageCode="en") {
		this.languageCode = languageCode.toUpperCase();
	}
	/**
	 * Gets the language code to use.
	 */
	get languageCode() {
		return this.#languageCode;
	}
	/**
	 * Sets the language code to use.
	 */
	set languageCode(value) {
		this.#languageCode=value.toUpperCase();
		this.#updateProperties();
	}
	/**
	 * Updates this object's properties with the properties from the LOCALE object.
	 */
	#updateProperties() {
		this.#clearProperties();
		let item,value;
		for([item, value] of Object.entries(LOCALE[this.#languageCode])) {
			this[item] = value;
		}
	}
	/**
	 * Purges the properties of the current instance.
	 */
	#clearProperties() {
		let item,value;
		for([item, value] of Object.entries(this)) {
			if(!(this[item] instanceof Function) && !item.includes("languageCode")) {
				delete this[item];
			}
		}
	}
	
}

const LANGUAGE = new Lang("EN");



export { LANGUAGE };
