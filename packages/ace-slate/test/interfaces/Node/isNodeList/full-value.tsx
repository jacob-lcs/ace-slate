import { Node } from 'ace-slate'

export const input = [
  {
    children: [],
    selection: null,
  },
]
export const test = value => {
  return Node.isNodeList(value)
}
export const output = true
