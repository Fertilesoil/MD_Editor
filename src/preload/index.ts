/* eslint-disable prettier/prettier */
import { GetNotes } from '../shared/types'
import { contextBridge, ipcRenderer } from 'electron'

if (!process.contextIsolated) {
  throw new Error('ContextIsolated deve estar habilitado no BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    locale: navigator.language,
    getNotes: (...args: Parameters<GetNotes>) => ipcRenderer.invoke('getNotes', ...args),
  })
} catch (e) {
  console.error(e)
}
