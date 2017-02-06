'use strict'

class House {

  constructor (houseProperties) {
    this.address = houseProperties.address
    this.square_feet = houseProperties.squareFeet
    this.num_bedrooms = houseProperties.numBedrooms || 3
    this.num_baths = houseProperties.numBath || 2
    this.cost = houseProperties.cost || 320000
    this.down_payment = houseProperties.downPayment || 0.20
    this.sold = houseProperties || false
    this.short_sale = houseProperties.shortSale
    this.has_tenants = houseProperties.hasTenant || false
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
let houseProperties={
  'address':'jalan. ini itu nomor 11312 jfjsfkasj jsafkfj.',
  'squareFeet':100,
  'numBedrooms':2,
  'numBath':2,
  'cost':12345,
  'downPayment':12345,
  'sold':true,
  'shortSale':true,
  'hasTenant':false
};

const cool = new House(houseProperties)

console.log(cool.to_s())
