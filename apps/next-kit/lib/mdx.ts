/** @format */

import fs from 'fs'
import path from 'path'

// POSTS_PATH is useful when you want to get the path to a specific file
export const ENTRIES_PATH = path.join(process.cwd(), '@/entries/')

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const enFilePaths = fs
  .readdirSync(ENTRIES_PATH)

  .filter((path) => /\.mdx?$/.test(path))
