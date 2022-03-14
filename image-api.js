const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch("3cb2c54d231f24b4fa958a59bcee6f15a038aad59937532b5957d8515747d458");

const params = {
    q: "cats",
    tbm: "isch",
    ijn: "0"
  };

search.json(params, callback);
a = document.getElementById('api-output');


const callback = function(data) {
    displayPic(data['images_results'][4]);
};

function displayPic(entry){
    a.href = entry['original']
}

