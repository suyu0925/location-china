'use strict'

import * as Division from 'china-division'
import { Level, Location } from './location'
import { Province } from './province'
import { quickSearch } from './utils'

export { Level, Location } from './location'
export { Province } from './province'

export function provinces() {
  return Division.provinces
}

export function cities() {
  return Division.cities
}

export function districts() {
  return Division.areas
}

export function streets() {
  return Division.streets
}

export function from(value: number | string, level?: Level) {
  if (typeof (value) === 'number') {
    return this.fromCode(value.toString(), level)
  } else if (typeof (value) === 'string') {
    if (value.match(/\d+/)) {
      return this.fromCode(value, level)
    } else {
      return this.fromString(value, level)
    }
  }
  throw new TypeError('First argument must be a number or string')
}

export function fromCode(code: string, level?: Level): Location {
  if (level === undefined) {
    // find level from upper level to lower level
    if (quickSearch(Division.provinces, code)) {
      level = Level.Province
      // } else if (quickSearch(Division.cities, code)) {
      //   level = Level.City
      // } else if (quickSearch(Division.areas, code)) {
      //   level = Level.District
      // } else if (quickSearch(Division.streets, code)) {
      //   level = Level.Street
    } else {
      throw new Error('not matched')
    }
  }

  if (level === Level.Province) {
    return new Province(code)
  }
}

export function fromString(name: string, level?: Level): Location {
  return null
}
