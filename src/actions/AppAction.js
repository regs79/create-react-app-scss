import { createAction } from 'redux-actions'

export const sayHello = createAction('SAY_HELLO', (count) => {
  return {
    counter: count,
  }
})

// Example of actions
// const { increment, decrement } = createActions({
//   'INCREMENT': amount => ({ amount: 1 }),
//   'DECREMENT': amount => ({ amount: -1 })
// })
