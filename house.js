'use strict'

class House {

  constructor (argument) {
    this.address = argument['address']
    this.square_feet = argument['square_feet']
    this.num_bedrooms = argument['num_bedrooms'] || 3
    this.num_baths = argument['num_baths'] || 2
    this.cost = argument['cost'] || 320000
    this.down_payment = argument['down_payment'] || 0.20
    this.sold = argument['sold'] || false
    this.short_sale = argument['short_sale']
    this.has_tenants = argument['has_tenants'] || false
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
    return `DIJUAL \nAlamat: ${this.obscure_address()} :${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. Harga ${this.cost}`
  }
}

const cool = new House({address: 'Pondok Indah. Aquarius',square_feet: 1000,num_bedrooms: 7,num_baths: 8,cost: 50000000000,down_payment: 10000000000,sold: true,has_tenants: true})

console.log(cool.to_s())
