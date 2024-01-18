/* eslint-disable prettier/prettier */
import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('ContextIsolated deve estar habilitado no BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    locale: navigator.language
  })
} catch (e) {
  console.error(e)
}
