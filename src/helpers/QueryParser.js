export function generateURL(params){
    var url = "http://localhost:8888/api?"
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

    // There are other parameters.
    return url;
  }
