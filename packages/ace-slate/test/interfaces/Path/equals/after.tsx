import { Path } from 'ace-slate'

export const input = {
  path: [1, 1, 2],
  another: [0],
}
export const test = ({ path, another }) => {
  return Path.equals(path, another)
}
export const output = false