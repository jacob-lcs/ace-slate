import { Node } from 'ace-slate'

export const input = {}
export const test = value => {
  return Node.isNode(value)
}
export const output = false
