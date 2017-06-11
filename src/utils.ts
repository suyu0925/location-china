'use strict'

import { Location } from 'china-division'

export function quickSearch(locations: Location[], code: string) {
  for (const location of locations) {
    if (location.code === code) {
      return location
    }
  }
}
