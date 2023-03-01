import MDEditor from '@uiw/react-md-editor'
import { marked } from 'marked'
import { useState } from 'react';

type EditorProps = {
  markdown : string
  setMarkdown : (value: React.SetStateAction<string>) => void
}

export default function Editor({ markdown, setMarkdown } : EditorProps) {
  const [showPreview, setShowPreview] = useState(false)

  return (
    <>
      <div className="flex">
        <MDEditor
          value={markdown}
          onChange={(e) => {setMarkdown(e!)}}
          data-color-mode="light"
          preview="edit"
          hideToolbar
          className={`${showPreview? 'flex-1' : 'flex-2'}`}
        />
        { showPreview && 
          <iframe
            title="preview"
            srcDoc={`${marked.parse(markdown)}`}
            className="flex-1"
          />
        }
        <label className="absolute right-4 bottom-4 bg-white p-2 rounded">
          <code className="mr-2">%show-preview</code>
          <input
            type="checkbox"
            checked={showPreview}
            onChange={() => setShowPreview(!showPreview)}
          />
        </label>
      </div>

    </>
  )
}