export interface IPLocation {
    country: string,
    region: string,
    city: string,
    lat: number,
    lng: number,
    postalcode: string,
    timezone: string
}

export interface AS {
    asn: string,
    name: string,
    route: string,
    domain: string,
    type: string,
}

export interface IPResult {
    ip: string,
    location?: IPLocation,
    domains: Array<string>,
    as: AS,
    isp: string
}