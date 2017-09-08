/*
 * dataProvider.js
 * @CreatedOn: 03-Sep-2017
 * @Author: Kausik Dey
 * @Version: 1.0.0
 * @Description:It will provide data by fetching from COC API
 */

 /*
    kolkata army : #9GC2VPU0
    KDCODER : #P0QJ2LPY0
    ¦Zeus¦ : #2GGYUVRV2
 */

"use strict";
const conf = require("./../configuration");

class DataProvider {
    constructor() {}

    searchClan(filter, onSuccess, onError) {
        this.doRequest(
            "/clans.php", {
                "opt": "name="+filter+"&limit=10"
            }, "GET",
            onSuccess,
            onError
        );
    }

    getClanData(clanTag, onSuccess, onError) {
        this.doRequest(
            "/clans.php", {
                "tag": clanTag
            }, "GET",
            onSuccess, 
            onError
        );
    }

    getClanMembers(clanTag, onSuccess, onError) {
        this.doRequest(
            "/clans.php", {
                "tag": clanTag,
                "subtype":"members"
            }, "GET",
            onSuccess, 
            onError
        );
    }

    getClanWarlog(clanTag, onSuccess, onError) {
        this.doRequest(
            "/clans.php", {
                "tag": clanTag,
                "subtype":"warlog"
            }, "GET",
            onSuccess, 
            onError
        );
    }

    getClanCurrentWar(clanTag, onSuccess, onError) {
        this.doRequest(
            "/clans.php", {
                "tag": clanTag,
                "subtype":"currentwar"
            }, "GET",
            onSuccess, 
            onError
        );
    }

    doRequest(reqURL, reqData, reqType, onSuccess, onError) {
        $.ajax({
            url: conf.baseURL + reqURL,
            data: reqData,
            type: reqType,
            dataType: "json",
            success: onSuccess,
            error: onError
        });
    }

}

module.exports =  DataProvider;