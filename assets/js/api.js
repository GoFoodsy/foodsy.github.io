"use strict";

window.ACCESS_POINT = "https://api.edamam.com/api/recipes/v2";
const /** {String} */ APP_ID = "900da95e";
const /** {String} */ API_KEY = "40698503668e0bb3897581f4766d77f9";
const /** {String} */ TYPE = "public";

/**
 * @param {Array} queries Query array
 * @param {Function} succesCallback Success callback function
 */

export const fetchData = async function (queries, succesCallback) {
    const /** {String} */ query = queries?.join("&")
        .replace(/,/g, "=")
        .replace(/ /g, "%20")
        .replace(/\+/g, "%2B");

    const /** {String} */ url = `${ACCESS_POINT}?type=${TYPE}${query ? `&${query}` : ""}&app_id=${APP_ID}&app_key=${API_KEY}`;

    const /** {Object} */ response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        succesCallback(data);
    }
}