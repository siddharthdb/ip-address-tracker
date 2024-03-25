import React, { useState } from "react";

import IPSearch from "./components/search";
import IPMap from "./components/map";
import { getIPAddrDetails } from "./services";
import { IPResult } from "./models";

const App = () => {

  const [ipresult, setIPResult] = useState<IPResult>();

  const handleSearch = async (ipaddr: string) => {
    const result = await getIPAddrDetails(ipaddr);
    setIPResult(result as IPResult);
  }

  return (
    <>
      <IPSearch handleSearch={handleSearch} ipresult={ipresult as IPResult}></IPSearch>
      <IPMap></IPMap>
    </>
  )
}

export default App;