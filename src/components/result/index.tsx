import React, { FC } from "react";

interface IPResultProps {
    ipaddress: string,
    location: string,
    timezone: string,
    isp: string
}

const IPResult: FC<IPResultProps> = ({ ipaddress, location, timezone, isp }) => {

    const displayName = 'iptracker-result';

    return (
        <div className={`${displayName}-wrapper`}>
            <div className={`${displayName}-detail`}>
                <div className="title">Ip Address</div>
                <div className="value">{ipaddress}</div>
            </div>
            <div className={`${displayName}-detail`}>
                <div className="title">Location</div>
                <div className="value">{location}</div>
            </div>
            <div className={`${displayName}-detail`}>
                <div className="title">Timezone</div>
                <div className="value">{timezone}</div>
            </div>
            <div className={`${displayName}-detail`}>
                <div className="title">ISP</div>
                <div className="value">{isp}</div>
            </div>
        </div>
    )

}

export default IPResult;