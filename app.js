// Server
const app = require("express")();
const PORT = process.env.PORT || 3000;
const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch("3cb2c54d231f24b4fa958a59bcee6f15a038aad59937532b5957d8515747d458");
const params = {
    q: "cats",
    tbm: "isch",
    ijn: "0"
  };

app.get("", (req, res) => {
    //search.json(params, callback);
    //console.log(path.join(__dirname, '/index.html'))
    //console.log(__dirname+ '/index.html')
    res.sendFile( __dirname+ '/index.html');
    // res.send("Hello Lauren");
})

 app.listen(PORT, async () =>  {
    //console.log("------------",__dirname, '\index.html')
    console.log(`App up at port ${PORT}`);
})

// Search API



const callback = function(data) {
    displayPic(data['images_results'][4]);
    // x = 
    // console.log(x);
    // return x;
};



function displayPic(entry){
    console.log(entry['original']);
}
