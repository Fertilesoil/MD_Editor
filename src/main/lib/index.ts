/* eslint-disable prettier/prettier */
import { homedir } from "os"
import { appDirectoryName, fileEnconding } from '../../shared/constants'
import { ensureDir, readdir, stat } from "fs-extra"
import { NoteInfo } from '../../shared/models'
import { GetNotes } from "@shared/types"

export const getRootDir = () => {
 return `${homedir()}/${appDirectoryName}`
}

export const getNotes: GetNotes = async () => {
 const rootDir = getRootDir()

 await ensureDir(rootDir)

 const notesFileNames = await readdir(rootDir, {
  encoding: fileEnconding,
  withFileTypes: false
 })

 const notes = notesFileNames.filter((filename) => filename.endsWith('.md'))

 return Promise.all(notes.map(getNoteInfoFromFileName))
}

export const getNoteInfoFromFileName = async (filename: string): Promise<NoteInfo> => {
 const fileStats = await stat(`${getRootDir()}/${filename}`)
 return {
  title: filename.replace(/\.md$/, ''),
  lastEditTime: fileStats.mtimeMs
 }
}