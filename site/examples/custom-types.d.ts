import { Text, Editor, Descendant } from 'ace-slate'

declare module 'ace-slate' {
  interface CustomTypes {
    Element: CustomElement

    Node: CustomNode
  }
}

interface CustomElement {
  type?: string
  checked?: boolean
  url?: string
  children: Descendant[]
}

type CustomNode = Editor | CustomElement | Text
