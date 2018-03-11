/**
 * dataProvider.js
 * @createdOn: 03-Sep-2017
 * @author: Kausik Dey
 * @version: 1.0.0
 * @description:It will provide data by fetching from COC API
 */

 /*
    kolkata army : #9GC2VPU0
    KDCODER : #P0QJ2LPY0
    ¦Zeus¦ : #2GGYUVRV2
 */

"use strict";

const conf = require("./../configuration");
let Promise = require("bluebird");

class DataProvider {
    constructor() {}

    searchClan(filter, onSuccess, onError) {
      return new Promise((resolve, reject) => {
        this.doRequest("/clans.php", {"opt": "name="+filter+"&limit=10"}, "GET")
          .then(resolve, reject);
      });
    }

    getClanData(clanTag) {
      return new Promise((resolve, reject) => {
        this.doRequest("/clans.php", {"tag": clanTag}, "GET")
          .then(resolve, reject);
      });
    }

    getClanMembers(clanTag, onSuccess, onError) {
      return new Promise((resolve, reject) => {
        this.doRequest("/clans.php", {"tag": clanTag, "subtype": "members"}, "GET")
          .then(resolve, reject);
      });
    }

    getClanWarlog(clanTag, onSuccess, onError) {
      return new Promise((resolve, reject) => {
        this.doRequest("/clans.php", {"tag": clanTag, "subtype": "warlog"}, "GET")
          .then(resolve, reject);
      });
    }

    getClanCurrentWar(clanTag, onSuccess, onError) {
      return new Promise((resolve, reject) => {
        this.doRequest("/clans.php", {"tag": clanTag, "subtype": "currentwar"}, "GET")
          .then(resolve, reject);
      });
    }

    doRequest(reqURL, reqData, reqType, onSuccess, onError) {
      return new Promise((resolve,reject) => {
        $.ajax({
            url: conf.baseURL + reqURL,
            data: reqData,
            type: reqType,
            dataType: "json",
            success: resolve,
            error: reject
        });
      });
        
    }

}

module.exports =  DataProvider;