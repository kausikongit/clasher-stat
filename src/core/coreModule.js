/*
 * coreModule.js
 * @CreatedOn: 03-Sep-2017
 * @Author: Kausik Dey
 * @Version: 1.0.0
 * @Description:It is the core library component which load other components.
 */

"use strict";

let DataProvider = require("./../provider/dataProvider");

class coreModule {
    constructor() {
        this.data = new DataProvider(); 
     }

    initCore() {
        this.data.getClanCurrentWar("#9GC2VPU0", (data)=>{
            console.log(data); 
        });
    }
}

module.exports = coreModule;

