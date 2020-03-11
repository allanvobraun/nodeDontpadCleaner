
const axios = require('axios');
const cheerio = require('cheerio');


async function fetchData(url) {
    console.log("Crawling data...")
    // make http call to url    
    let response = await axios(url).catch((err) => console.log(err));

    if(response.status !== 200){
        console.log("Error occurred while fetching data");
        console.log(`Error ${response.status}`);
        return;
    }
    return response;
}

async function deleteData(url) {
    // console.log('Delete data');
    var url_full = `http://dontpad.com/${url}`;
    const  params = {
        params: {"text": "hacked by allan"}
    }
    let response = await axios.post(url_full, null, params);
    return response;
}

// fetchData(url).then( (res) => {
//     const html = res.data;
//     const $ = cheerio.load(html);
//     const textarea = $('#text');
//     console.log(textarea.html());
// });

const urls = ['allan', 'joao', 'matheus'];


urls.forEach(element => {

    deleteData(element).then( (res) => {
        console.log(res.config.url);
    });
    
    
});


console.log('Isso é executado antes');

