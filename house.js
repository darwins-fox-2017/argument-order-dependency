'use strict'

class House {

  constructor (rumah) {
    this.address = rumah['address']
    this.square_feet = rumah['square_feet']
    this.num_bedrooms = rumah['num_bedrooms'] || 3
    this.num_baths = rumah['num_baths'] || 2
    this.cost = rumah['cost'] || 320000
    this.down_payment = rumah['down_payment'] || 0.20
    this.sold = rumah['sold'] || false
    this.short_sale = rumah['short_sale']
    this.has_tenants = rumah['has_tenants'] || false
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
 return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`    }
  }

  let rincian = {
    address: "Jalan Cisitu no 45b, Dago, Coblong, Kota Bandung, Jawa Barat 40135",
    square_feet: 100,
    num_bedrooms: 3,
    num_baths: 2,
    cost: 100000,
    down_payment: 500000,
    sold: false,
    short_sale : 'for sale',
    has_tenants: true
  }

  const pertama = new House(rincian)
  console.log(pertama.address);
  console.log(pertama.to_s() +"\n");

  console.log(pertama)
