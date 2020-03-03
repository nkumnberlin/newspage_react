const BACKENDURL = 'https://tv7vnviejg.execute-api.us-east-1.amazonaws.com/api/';
const proxyURL = 'https://cors-anywhere.herokuapp.com/';


export async function awsQueryNewspages(query) {
    const url =   BACKENDURL + `sources?language=${query.language}&category=${query.category}`
    const token = tokenGenerator();
    const response = await fetch(proxyURL + url, {
        method: 'get',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'text/plain',
            'X-My-Custom-Header': 'value-v',
            'Authorization': token,
        }
    });
    //2Az2Zahlen2Sonderzeichen
    return await response.json();
}
export async function awsQueryHeadlines(id) {
    const url = BACKENDURL + `news?sources=${id}`
    const token = tokenGenerator();
    const response = await fetch(proxyURL + url, {
        method: 'get',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'text/plain',
            'X-My-Custom-Header': 'value-v',
            'Authorization': token,
        }
    });
    return await response.json();
}


function tokenGenerator() {
    let number =  (Math.random() * (100 - 10)+10).toString().split('.');
    let letters = letterGen();
    let specialSigns = specialSignsGen();
    return letters + number[0] + specialSigns
}

function letterGen() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < 2; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function specialSignsGen() {
    let result = '';
    const characters = '!§$%&/()=?#-.;,';
    for (let i = 0; i < 2; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
