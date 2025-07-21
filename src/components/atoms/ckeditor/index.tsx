import { CKEditor as Editor } from '@ckeditor/ckeditor5-react'
import EditorModel from 'ckeditor5-signotech'

interface Props {
  value?: string | null
  onChange: (value: string) => void
  disabled?: boolean
}

export default function CKEditor({ value, onChange, disabled }: Props) {
  return (
    <Editor
      editor={EditorModel}
      config={{
        image: {
          insert: {
            integrations: ['url']
          }
        }
      }}
      data={value}
      disabled={disabled}
      onChange={(_, editor) => onChange(editor.data.get())}
    />
  )
}
