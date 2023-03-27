import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const REPO_OWNER = 'vitejs'
export const REPO_NAME = 'vite'
export const MAIN_BRANCH = 'main'
export const CASE_DIR = path.resolve(__dirname, '../../cases')
export const DATA_DIR = path.resolve(__dirname, '../../upload')
export const ARTIFACT_DIR = path.resolve(__dirname, '../../artifacts')
export const PROJECT_DIR = path.resolve(__dirname, '../..')
export const VITE_DIR = path.resolve(PROJECT_DIR, './vite')