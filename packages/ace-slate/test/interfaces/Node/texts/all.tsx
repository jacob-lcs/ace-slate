/** @jsx jsx  */
import { Node } from 'ace-slate'
import { jsx } from 'ace-slate-hyperscript'

export const input = (
  <editor>
    <element>
      <text key="a" />
      <text key="b" />
    </element>
  </editor>
)
export const test = value => {
  return Array.from(Node.texts(value))
}
export const output = [
  [<text key="a" />, [0, 0]],
  [<text key="b" />, [0, 1]],
]
