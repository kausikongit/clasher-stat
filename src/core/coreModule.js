/**
 * coreModule.js
 * @createdOn: 03-Sep-2017
 * @author: Kausik Dey
 * @version: 1.0.0
 * @description:It is the core library component which load other components.
 */

"use strict";

let DataProvider = require("./../provider/dataProvider");

class coreModule {
  constructor() {
    this.provider = new DataProvider();
  }

  initCore() {
    this.provider.getClanData("#9GC2VPU0", (data) => {
      console.log(data);
    });
  }
}

module.exports = coreModule;

