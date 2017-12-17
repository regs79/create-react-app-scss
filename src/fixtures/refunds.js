import faker from 'faker'
import times from 'lodash/times'

export const refundsData = [
  {
    id: 92345677,
    amount: faker.commerce.price(.10,200.00,2,"$"),
    purchasedby: faker.name.firstName(),
    purchaseddate: faker.date.past(10),
    paidby: 'VISA-XXX XXX XXX 4351',
  }
]
