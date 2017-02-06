'use strict'

class House {

  constructor (newObj) {
    this.address = newObj['address']
    this.square_feet = newObj['square_feet']
    this.num_bedrooms = newObj['num_bedrooms'] || 3
    this.num_baths = newObj['num_baths'] || 2
    this.cost = newObj['cost'] || 320000
    this.down_payment = newObj['down_payment'] || 0.20
    this.sold = newObj['sold'] || false
    this.short_sale = newObj['short_sale']
    this.has_tenants = newObj['has_tenants'] || false
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

let objHouse = { address : 'Address 100',
                square_feet : 12345,
                num_bedrooms : 4,
                num_baths : 2,
                cost : 12345,
                sold : true,
                has_tenants : true
                }

const cool = new House(objHouse)

console.log(cool.to_s())
