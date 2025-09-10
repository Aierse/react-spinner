// scripts/copy-css.js
const fs = require('fs')
const path = require('path')

const srcDir = path.resolve(__dirname, '../src')
const distDir = path.resolve(__dirname, '../dist')

function copyCss(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true })
  }

  for (const file of fs.readdirSync(src)) {
    const srcPath = path.join(src, file)
    const destPath = path.join(dest, file)
    const stat = fs.statSync(srcPath)

    if (stat.isDirectory()) {
      copyCss(srcPath, destPath)
    } else if (srcPath.endsWith('.css')) {
      fs.copyFileSync(srcPath, destPath)
      console.log(`✅ Copied ${srcPath} -> ${destPath}`)
    }
  }
}

copyCss(srcDir, distDir)
