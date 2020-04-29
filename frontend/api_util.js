function get(url) {
    return new Promise((res, rej) => {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                res(xmlHttp.response);
            } else if (xmlHttp.status > 302) {
                return rej(xmlHttp.resonse);
            }
        }
        xmlHttp.open("GET", `api/${url}`, true);
        xmlHttp.responseType = 'json';
        xmlHttp.send();
    });
}

export const formatReqWord = w => w.trim().replace(/ /g, '_');
export const formatWord = w => w.replace(/_/g, ' ');

export const getSynonymList = (word) => {
    return get(`synonym_list?word=${formatReqWord(word)}`);
};

export const getSynonymTree = (word) => {
    return get(`synonym_tree?word=${formatReqWord(word)}`);
};

export const getSynonymPath = (source, target) => {
    return get(`synonym_path?source=${formatReqWord(source)}&target=${formatReqWord(target)}`);
};

window.testPath = getSynonymPath;