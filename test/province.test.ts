'use strict'

import * as division from '../src/index'

describe('province', () => {
  describe('from', () => {
    test('fromCode', () => {
      let location: division.Location

      location = division.from(110000)
      expect(location.name).toEqual('北京市')

      location = division.from('650000')
      expect(location.name).toEqual('新疆维吾尔自治区')
    })

    test('fromString', () => {
      let location: division.Location

      location = division.from('天津')
      expect(location.name).toEqual('天津市')

      location = division.from('内蒙')
      expect(location.name).toEqual('内蒙古自治区')
    })
  })

  test('toShort', () => {
    let location: division.Location

    location = division.from(110000)
    expect(location.toShort()).toEqual('北京')

    location = division.from(360000)
    expect(location.toShort()).toEqual('江西')

    location = division.from(650000)
    expect(location.toShort()).toEqual('新疆')

    location = division.from(150000)
    expect(location.toShort()).toEqual('内蒙')
  })
})
