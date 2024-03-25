import React, { FC, useState } from "react";
import './index.less';
import IPResult from "../result";
import { IPResult as IPResultModel } from "../../models";

interface IPSearchProp {
  handleSearch: (o: string) => void;
  ipresult: IPResultModel
}

const IPSearch: FC<IPSearchProp> = ({ handleSearch, ipresult }) => {
  const displayName = 'iptracker-search'

  const [ipAddr, setIPAddr] = useState('');

  const { location: {
    city, postalcode, timezone
  }, ip, isp, } = ipresult;

  return (
    <div className={`${displayName}_container`}>
      <div className="title">IP Address Tracker</div>
      <div className={`${displayName}_container-input`}>
        <input type="text" name="ip-address" id="ip-address"
          placeholder="Search for any IP address or domain"
          className={`${displayName}_container-input-text`}
          onChange={(e) => setIPAddr(e.target.value)} />
        <button className={`${displayName}_container-input-btnsrch`} onClick={(e) => handleSearch(ipAddr)}>
        </button>
      </div>
      <IPResult ipaddress={ip} location={`${city}, ${postalcode}`} timezone={timezone} isp={isp}></IPResult>
    </div>
  )
}

export default IPSearch;