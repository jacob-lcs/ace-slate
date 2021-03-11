/** @jsx jsx */
import { Transforms } from 'ace-slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.insertText(editor, 'a few words')
}
export const input = (
  <editor>
    <block>
      <cursor />
      word
    </block>
  </editor>
)
export const output = (
  <editor>
    <block>
      a few words
      <cursor />
      word
    </block>
  </editor>
)