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

    getClanData(tagName) {
        this.request(
            "/clans", {
                "name": tagName
            }, "GET",
            function success(data, status, xhr) {

            },
            function error(err, status, xhr) {

            }
        );
    }

    request(reqURL, reqData, reqType, onSuccess, onError) {
        $.ajax({
            headers: authTokens[conf.env],
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