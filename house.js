'use strict'

class House {

  constructor (houseComp) {
    this.address = houseComp['address']
    this.square_feet = houseComp['square_feet']
    this.num_bedrooms = houseComp['num_bedrooms'] || 3
    this.num_baths = houseComp['num_baths'] || 2
    this.cost = houseComp['cost'] || 320000
    this.down_payment = houseComp['down_payment'] || 0.20
    this.sold = houseComp['sold'] || false
    this.short_sale = houseComp['short_sale']
    this.has_tenants = houseComp['has_tenants'] || false
  }

  obscure_address () {
    return this.address.replace(/.{10}$/g, '****')
  }

  buy (money, good_credit) {
    if (money >= down_payment && good_credit) {
      this.sold = true
    }
  }

  down_payment () {
    return cost * this.down_payment
  }

  to_s () {
    return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`
  }
}

// const cool = new House('address', 100, 2, 2, 12345, 12345, true, true)
let houseComp = {
  address : 'Jl. Gunung Sahari',
  square_feet : 100,
  num_bedrooms : 2,
  num_baths : 2,
  cost : 123456,
  down_payment : 123456,
  sold : true,
  has_tenants : true
}

console.log(houseComp)
// console.log(cool.to_s())
