/* eslint-disable prettier/prettier */

import { MDXEditor, headingsPlugin, listsPlugin, markdownShortcutPlugin, quotePlugin } from "@mdxeditor/editor"
import { useMarkdownEditor } from "@renderer/hooks/useMarkdownEditor"

export const MarkDownEditor = () => {
  const { selectedNote } = useMarkdownEditor()

  if(!selectedNote) return null

  return <MDXEditor
    key={selectedNote.title}
    markdown={selectedNote.content}
    plugins={[headingsPlugin(), listsPlugin(), quotePlugin(), markdownShortcutPlugin()]}
    contentEditableClassName="outline-none font-sans main-h-screen max-w-none text-[1.15rem] px-6 py-1 caret-yellow-400/70 text-amber-500/80 selection:bg-white/10 
  selection:text-emerald-50/40 prose prose-invert prose-p:my-0 prose-p:leading-relaxed prose-headings:my-1 prose-blockquote:my-0 prose-ul:my-0 prose-li:my-0
  prose-code:px-1 prose-code:text-red-500 prose-code:before:content-[''] prose-code:after:content-['']" />
}
