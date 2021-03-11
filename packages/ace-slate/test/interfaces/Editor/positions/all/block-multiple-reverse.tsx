/** @jsx jsx */
import { Editor } from 'ace-slate'
import { jsx } from '../../../..'

export const input = (
  <editor>
    <block>one</block>
    <block>two</block>
    <block>three</block>
  </editor>
)
export const test = editor => {
  return Array.from(Editor.positions(editor, { at: [], reverse: true }))
}
export const output = [
  { path: [2, 0], offset: 5 },
  { path: [2, 0], offset: 4 },
  { path: [2, 0], offset: 3 },
  { path: [2, 0], offset: 2 },
  { path: [2, 0], offset: 1 },
  { path: [2, 0], offset: 0 },
  { path: [1, 0], offset: 3 },
  { path: [1, 0], offset: 2 },
  { path: [1, 0], offset: 1 },
  { path: [1, 0], offset: 0 },
  { path: [0, 0], offset: 3 },
  { path: [0, 0], offset: 2 },
  { path: [0, 0], offset: 1 },
  { path: [0, 0], offset: 0 },
]
