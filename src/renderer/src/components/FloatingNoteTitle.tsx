/* eslint-disable prettier/prettier */

import { selectedNoteAtom } from "@renderer/store"
import { useAtomValue } from "jotai"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"


export const FloatingNoteTitle = ({className, ...props}: ComponentProps<'div'>) => {
 const selectedNote = useAtomValue(selectedNoteAtom)

 if(!selectedNote) return null

 return (
  <div className={twMerge('flex justify-center content-center', className)} {...props}>
   <span className=" text-slate-300">{selectedNote.title}</span>
  </div>
 )
}
