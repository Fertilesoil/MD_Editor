/* eslint-disable prettier/prettier */

declare global {
  interface Window {
    // electron: ElectronAPI
    context: {
      locale: string; 
    }
  }
}
