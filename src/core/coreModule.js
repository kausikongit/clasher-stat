/*
 * coreModule.js
 * @CreatedOn: 03-Sep-2017
 * @Author: Kausik Dey
 * @Version: 1.0.0
 * @Description:It is the core library component which load other components.
 */

"use strict";

let dataProvider = require("./../provider/dataProvider");

class coreModule {
    constructor() { }

    initCore() {
        dataProvider.getClanData("kolkata");
    }
}

module.exports = coreModule;

