/* eslint-disable prettier/prettier */
import { GetNotes } from "@shared/types"

declare global {
  interface Window {
    // electron: ElectronAPI
    context: {
      locale: string
      getNotes: GetNotes
    }
  }
}
