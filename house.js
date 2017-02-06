'use strict'

class House {

  constructor (component) {

    this.address = component['address'] //address
    this.square_feet = component['square_feet'] //square_feet
    this.num_bedrooms = component['num_bedrooms'] || 3 //num_bedrooms || 3
    this.num_baths = component['num_baths'] || 2 //num_baths || 2
    this.cost = component['cost'] //cost || 320000
    this.down_payment = component['down_payment'] || 0.20 //down_payment || 0.20
    this.sold = component['sold'] || false //sold || false
    this.short_sale = component['short_sale'] //short_sale
    this.has_tenants = component['has_tenants'] || false//has_tenants || false
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

const data = {'address': 'Jalan Tanah Kusir II Kebayoran', 'square_feet': 100, 'num_bedrooms': 2, 'num_baths': 2, 'cost': 135000, 'down_payment': 0.15}

const cool = new House(data)

console.log(cool.to_s())
