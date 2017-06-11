'use strict'

import * as Division from 'china-division'
import { Province } from './province'
import { quickSearch } from './utils'

export enum Level {
  Province = 1,
  City = 2,
  District = 3,
  Street = 4
}

export abstract class Location {
  public code: string
  public name: string
  public level: Level
  public parent: string

  constructor(code: string, level: Level) {
    this.code = code
    this.level = level

    let location: Division.Location
    switch (level) {
      case Level.Province:
        location = quickSearch(Division.provinces, code)
        if (location) {
          this.name = location.name
        }
        break
      case Level.City:
        location = quickSearch(Division.cities, code)
        if (location) {
          this.name = location.name
          this.parent = location.parent_code
        }
        break
      case Level.District:
        location = quickSearch(Division.areas, code)
        if (location) {
          this.name = location.name
          this.parent = location.parent_code
        }
        break
      case Level.Street:
        location = quickSearch(Division.streets, code)
        if (location) {
          this.name = location.name
          this.parent = location.parent_code
        }
        break
      default:
        this.code = null
        break
    }
  }

  public abstract toString(): string

  public abstract toShort(): string
}
