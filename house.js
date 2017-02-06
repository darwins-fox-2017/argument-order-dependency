'use strict'

class House {
  constructor (object) {
    this.address = object['address']
    this.squareFeet = object['squareFeet']
    this.numBedrooms = object['numBedrooms'] || 3
    this.numBaths = object['numBaths'] || 2
    this.cost = object['cost'] || 320000
    this.downPayment = object['downPayment'] || 0.20
    this.sold = object['sold'] || false
    this.shortSale = object['shortSale']
    this.hasTenants = object['hasTenants'] || false
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
    return cost * this.downPayment
  }

  to_s () {
    return `${this.obscure_address()} : ${this.squareFeet} sq. ft., ${this.numBedrooms} bed, ${this.numBaths} bath. ${this.cost}`
  }
}

let dataRumah = {
  address: "bumi serpong damai, di tangerang",
  squareFeet: 200,
  numBedrooms: "5 kamar tidur",
  numBaths: "2 kamar mandi",
  cost: 1500000,
  downPayment: 500000,
  sold: true,
  hasTenants: true
}

const cool = new House(dataRumah)
console.log(cool.address);
console.log(cool.to_s())
