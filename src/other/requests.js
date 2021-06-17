const axios = require("axios");


export default function postRequest()
{
    axios.post("localhost:8080", {
        testing: "pogchamp?"
    })
        .then(function (res) {
            console.log(res);
        })
    
        .catch(function(err) {
            console.error(err);
            console.log("ERROR has occurred");
        })
}
