
function get(url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.response);
    }
    xmlHttp.open("GET", `api/${url}`, true);
    xmlHttp.responseType = 'json';
    xmlHttp.send();
}

export const getSynonymList = (word, cb) => {
    return get(`synonym_list?word=${word}`, cb);
};

export const getSynonymTree = (word, cb) => {
    return get(`synonym_tree?word=${word}`, cb);
};