import { Node } from 'ace-slate'

export const input = {
  children: [],
  custom: true,
}
export const test = value => {
  return Node.isNode(value)
}
export const output = true
