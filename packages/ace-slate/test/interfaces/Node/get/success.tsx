/** @jsx jsx  */
import { Node } from 'ace-slate'
import { jsx } from 'ace-slate-hyperscript'

export const input = (
  <editor>
    <element>
      <text />
    </element>
  </editor>
)
export const test = value => {
  return Node.get(value, [0])
}
export const output = (
  <element>
    <text />
  </element>
)
