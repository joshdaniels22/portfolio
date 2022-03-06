// Server
const app = require("express")();

const PORT = process.env.PORT || 3000;

app.get("", (req, res) => {
    res.send("Hello Lauren");
})

 app.listen(PORT, async () =>  {
    console.log(`App up at port ${PORT}`);
})

// Search API
const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch("3cb2c54d231f24b4fa958a59bcee6f15a038aad59937532b5957d8515747d458");

const params = {
    q: "Apple",
    tbm: "isch",
    ijn: "0"
  };

  const callback = async function(data) {
    x = data['images_results'][0]
    console.log(x);
    return x;
};

search.json(params, callback);








console.log("----------------------------------------------")
// console.log(x)
