'use strict'

class House {

  constructor (house_data) {
    this.address = house_data.address
    this.square_feet = house_data.square_feet
    this.num_bedrooms = house_data.num_bedrooms || 3
    this.num_baths = house_data.num_baths || 2
    this.cost = house_data.cost || 320000
    this.down_payment = house_data.down_payment || 0.20
    this.sold = house_data.sold || false
    this.short_sale = house_data.short_sale
    this.has_tenants = house_data.has_tenants || false
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

let informasi = {
  address: 'Jalan Kebon Jeruka Raya',
  square_feet : 20,
  num_bedrooms : 2,
  num_baths : 3,
  cost: 1123456,
  down_payment: 123456,
  sold:true,
  has_tenants:true
}
const cool = new House(informasi)

console.log(cool.to_s())

//console.log(informasi)

