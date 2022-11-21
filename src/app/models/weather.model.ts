export interface WeatherData {
  columns: Columns
  remainingCost: number
  queryCost: number
  messages: any
  locations: Locations
}

export interface Columns {
  wdir: Wdir
  uvindex: Uvindex
  latitude: Latitude
  preciptype: Preciptype
  cin: Cin
  cloudcover: Cloudcover
  pop: Pop
  mint: Mint
  datetime: Datetime
  precip: Precip
  solarradiation: Solarradiation
  dew: Dew
  humidity: Humidity
  longitude: Longitude
  temp: Temp
  address: Address
  maxt: Maxt
  visibility: Visibility
  wspd: Wspd
  severerisk: Severerisk
  solarenergy: Solarenergy
  resolvedAddress: ResolvedAddress
  heatindex: Heatindex
  snowdepth: Snowdepth
  sealevelpressure: Sealevelpressure
  snow: Snow
  name: Name
  wgust: Wgust
  conditions: Conditions
  windchill: Windchill
  cape: Cape
}

export interface Wdir {
  id: string
  name: string
  type: number
  unit: any
}

export interface Uvindex {
  id: string
  name: string
  type: number
  unit: any
}

export interface Latitude {
  id: string
  name: string
  type: number
  unit: any
}

export interface Preciptype {
  id: string
  name: string
  type: number
  unit: any
}

export interface Cin {
  id: string
  name: string
  type: number
  unit: any
}

export interface Cloudcover {
  id: string
  name: string
  type: number
  unit: any
}

export interface Pop {
  id: string
  name: string
  type: number
  unit: any
}

export interface Mint {
  id: string
  name: string
  type: number
  unit: string
}

export interface Datetime {
  id: string
  name: string
  type: number
  unit: any
}

export interface Precip {
  id: string
  name: string
  type: number
  unit: string
}

export interface Solarradiation {
  id: string
  name: string
  type: number
  unit: any
}

export interface Dew {
  id: string
  name: string
  type: number
  unit: string
}

export interface Humidity {
  id: string
  name: string
  type: number
  unit: any
}

export interface Longitude {
  id: string
  name: string
  type: number
  unit: any
}

export interface Temp {
  id: string
  name: string
  type: number
  unit: string
}

export interface Address {
  id: string
  name: string
  type: number
  unit: any
}

export interface Maxt {
  id: string
  name: string
  type: number
  unit: string
}

export interface Visibility {
  id: string
  name: string
  type: number
  unit: string
}

export interface Wspd {
  id: string
  name: string
  type: number
  unit: string
}

export interface Severerisk {
  id: string
  name: string
  type: number
  unit: any
}

export interface Solarenergy {
  id: string
  name: string
  type: number
  unit: any
}

export interface ResolvedAddress {
  id: string
  name: string
  type: number
  unit: any
}

export interface Heatindex {
  id: string
  name: string
  type: number
  unit: string
}

export interface Snowdepth {
  id: string
  name: string
  type: number
  unit: string
}

export interface Sealevelpressure {
  id: string
  name: string
  type: number
  unit: string
}

export interface Snow {
  id: string
  name: string
  type: number
  unit: string
}

export interface Name {
  id: string
  name: string
  type: number
  unit: any
}

export interface Wgust {
  id: string
  name: string
  type: number
  unit: string
}

export interface Conditions {
  id: string
  name: string
  type: number
  unit: any
}

export interface Windchill {
  id: string
  name: string
  type: number
  unit: string
}

export interface Cape {
  id: string
  name: string
  type: number
  unit: any
}

export interface Locations {
  "Washington,DC,USA": WashingtonDcUsa
}

export interface WashingtonDcUsa {
  stationContributions: any
  values: Value[]
  id: string
  address: string
  name: string
  index: number
  latitude: number
  longitude: number
  distance: number
  time: number
  tz: string
  currentConditions: CurrentConditions
  alerts: any
}

export interface Value {
  wdir: number
  uvindex: number
  datetimeStr: string
  preciptype: string
  cin: number
  cloudcover: number
  pop: number
  mint: number
  datetime: number
  precip: number
  solarradiation: number
  dew: number
  humidity: number
  temp: number
  maxt: number
  visibility: number
  wspd: number
  severerisk: number
  solarenergy: number
  heatindex: any
  snowdepth: number
  sealevelpressure: number
  snow: number
  wgust: number
  conditions: string
  windchill?: number
  cape: number
}

export interface CurrentConditions {
  wdir: number
  temp: number
  sunrise: string
  visibility: number
  wspd: number
  icon: string
  stations: string
  heatindex: any
  cloudcover: number
  datetime: string
  precip: number
  moonphase: number
  snowdepth: any
  sealevelpressure: number
  dew: number
  sunset: string
  humidity: number
  wgust: any
  windchill: any
}
