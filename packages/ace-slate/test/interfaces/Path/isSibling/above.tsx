import { Path } from 'ace-slate'

export const input = {
  path: [],
  another: [0, 1],
}
export const test = ({ path, another }) => {
  return Path.isSibling(path, another)
}
export const output = false