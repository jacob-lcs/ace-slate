import { Path } from 'ace-slate'

export const input = {
  path: [0, 1, 2],
  another: [],
}
export const test = ({ path, another }) => {
  return Path.compare(path, another)
}
export const output = 0
