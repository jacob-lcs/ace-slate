import { Text } from 'ace-slate'

export const input = [
  {
    text: '',
  },
]
export const test = value => {
  return Text.isTextList(value)
}
export const output = true
