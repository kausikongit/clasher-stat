/**
 * build.js
 * @createdOn: 03-Sep-2017
 * @author: Kausik Dey
 * @version: 1.0.0
 * @description:It will provide the build description of chart libraray. 
 */


/* Using namespace ClasherStat*/

"use strict";

let CoreModule = require("./core/coreModule");

if (!window.jQuery) {
	throw new Error("No jquery found ! Please load it before...");
}

let ClasherStat = new CoreModule();

module.exports = ClasherStat;

if (typeof window !== 'undefined') {
	window.ClasherStat = ClasherStat;
}