/** @jsx jsx */
import { jsx } from 'ace-slate-hyperscript'

export const input = (
  <editor>
    <element>
      <element>
        word
        <cursor />
      </element>
    </element>
  </editor>
)
export const output = {
  children: [
    {
      children: [
        {
          children: [
            {
              text: 'word',
            },
          ],
        },
      ],
    },
  ],
  selection: {
    anchor: {
      path: [0, 0, 0],
      offset: 4,
    },
    focus: {
      path: [0, 0, 0],
      offset: 4,
    },
  },
}