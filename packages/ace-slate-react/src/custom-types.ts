import { CustomTypes } from 'ace-slate'

declare module 'ace-slate' {
  interface CustomTypes {
    Text: {
      placeholder: string
    }
    Range: {
      placeholder?: string
    }
  }
}
