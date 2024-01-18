/* eslint-disable prettier/prettier */
import { useRef } from "react"
import { Content, RootLayout, Sidebar, DraggableTopBar, ActionButtonsRow, NotePreviewList, MarkDownEditor, FloatingNoteTitle } from "./components"


/* eslint-disable prettier/prettier */
const App = () => {
  const contentContainerRef = useRef<HTMLDivElement>(null)

  const resetScroll = () => {
  contentContainerRef.current?.scrollTo(0, 0)
}

return (
  <>
    <DraggableTopBar />
    <RootLayout>
      <Sidebar className="p-2">
        <ActionButtonsRow className="flex justify-around" />
        <NotePreviewList className='mt-5 space-y-1' onSelect={resetScroll}/>
      </Sidebar>
      <Content className="border-l bg-zinc-900/50 border-l-white/20">
        <FloatingNoteTitle className="pt-1 font-sans text-[1.3rem]" />
        <MarkDownEditor />
      </Content>
    </RootLayout>
  </>
)
}

export default App
