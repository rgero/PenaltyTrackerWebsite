var moment = require("moment");

export function generateURL(params){
    var url = "http://localhost:8888/api?"
    console.log(params)
    if(!params) { return; }
    // Parse Season
    if (params["season"]) { url = url + "season=" + params["season"]}

    // Parse Players
    if (params["players"])
    {
      url = url + "&players=" + params["players"]
    }

    // Parse Penalty
    if (params["penalty"])
    {
      url = url + "&penalty=" + params["penalty"]
    }

    if (params["opponents"])
    {
      url = url + "&opponents=" + params["opponents"].join()
    }
    if (params["teams"])
    {
      url = url + "&teams=" + params["teams"].join()
    }

    if(params["location"]){
      if(params["location"] !== "either"){
        url = url + "&location=" + (params["location"] === "home" ? "1" : "0")
      }
    }

    if( params["startDate"] ){
      url = url + "&start=" + moment(params["startDate"]).format("YYYY-MM-DD")
    }

    if( params["endDate"] ){
      url = url + "&end=" + moment(params["endDate"]).format("YYYY-MM-DD")
    }

    console.log(url);
    // There are other parameters.
    return url;
  }
