import { Operation } from 'ace-slate'

export const input = {
  type: 'remove_node',
  path: [0],
  node: {
    children: [],
  },
}
export const test = value => {
  return Operation.isOperation(value)
}
export const output = true
