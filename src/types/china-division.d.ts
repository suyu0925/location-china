declare module 'china-division'

export interface Location {
  code: string
  name: string
  parent_code?: string
}

export interface Address2 {
  [k: string]: string[]
}

export interface Address3 {
  [k: string]: Address2[]
}

export interface Address4 {
  [k: string]: Address3[]
}

export const provinces: Location[]

export const cities: Location[]

export const areas: Location[]

export const streets: Location[]

export const address2: Address2

export const address3: Address3

export const address4: Address4
