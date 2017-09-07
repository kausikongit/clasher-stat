/*
 * dataProvider.js
 * @CreatedOn: 03-Sep-2017
 * @Author: Kausik Dey
 * @Version: 1.0.0
 * @Description:It will provide data by fetching from COC API
 */

"use strict";
const conf = require("./../configuration");
const authTokens = require("./../auth/authTokens");

class DataProvider {
    constructor() {}

    getClanData(filter) {
        this.request(
            "/clans.php", {
                "opt": "name="+filter+"&limit=10"
            }, "GET",
            function success(data, status, xhr) {
                console.log(data);
            },
            function error(err, status, xhr) {
                console.log(err);
            }
        );
    }

    request(reqURL, reqData, reqType, onSuccess, onError) {
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

module.exports = new DataProvider();