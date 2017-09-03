/*
 * build.js
 * @CreatedOn: 03-Sep-2017
 * @Author: Kausik Dey
 * @Version: 1.0.0
 * @Description:It will provide the build description of chart libraray. 
 */


/* Using namespace ClasherStat*/

"use strict";
let CoreModule = require("./core/coreModule"); 
let ClasherStat = new CoreModule(); 

module.exports = ClasherStat;

if (typeof window !== 'undefined') {
	window.ClasherStat = ClasherStat;
}