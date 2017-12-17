import faker from 'faker'
import times from 'lodash/times'

export const issuessData = [
  {
    id: faker.random.number(),
    name: faker.name.firstName(),
    amount: faker.commerce.price(.10,200.00,2,"$"),
    refundTypes: ['partial', 'fullamount'],
    cancelTypes: ['yes', 'no'],
    disabled: false,
    disabledMsg: null,
  },
  {
    id: faker.random.number(),
    name: faker.name.firstName(),
    amount: faker.commerce.price(.10,200.00,2,"$"),
    refundTypes: ['partial', 'fullamount'],
    cancelTypes: ['yes', 'no'],
    disabled: false,
    disabledMsg: null,
  },
  {
    id: faker.random.number(),
    name: faker.name.firstName(),
    amount: faker.commerce.price(.10,200.00,2,"$"),
    refundTypes: ['partial', 'fullamount'],
    cancelTypes: ['yes', 'no'],
    disabled: true,
    disabledMsg: 'Refunded $20 on 02 Nov 2017 at 2:35pm processed by Samantha Bee',
  }
]
