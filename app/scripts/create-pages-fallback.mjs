import { copyFile, stat, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const outputDirectory = resolve('dist')
const indexFile = resolve(outputDirectory, 'index.html')
const fallbackFile = resolve(outputDirectory, '404.html')

try {
  await stat(indexFile)
} catch {
  throw new Error('dist/index.html was not found. Run `npm run build` before creating the Pages fallback.')
}

await copyFile(indexFile, fallbackFile)
await writeFile(resolve(outputDirectory, '.nojekyll'), '')
console.log('Created dist/404.html for GitHub Pages route fallback.')
