import fs from 'fs'

const srcDir = 'src'
const commonDir = `${srcDir}/common`
const exchangesDir = `${srcDir}/exchanges`

fs.readdirSync(commonDir).forEach((file: string) => {
  const fileName = file.replace('.js', '').replace('.ts', '')
  const dirPath = `${commonDir}/${fileName}`
  // const distDirPath = `dist/${commonDir}/${fileName}`

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
  }

  // if (!fs.existsSync(distDirPath)) {
  //   fs.mkdirSync(distDirPath)
  // }

  const indexPath = `${dirPath}/index.ts`
  fs.writeFileSync(indexPath, `export * from '../${fileName}';`)

  // const packageJsonPath = `${distDirPath}/package.json`
  // const packageJsonContent =
  //   JSON.stringify({ type: 'module', types: `./index.d.ts`, main: `./index.js` }, undefined, 2) + '\n'
  // fs.writeFileSync(packageJsonPath, packageJsonContent)
})

fs.readdirSync(exchangesDir).forEach((file: string) => {
  const fileName = file.replace('.js', '').replace('.ts', '')
  const dirPath = `${exchangesDir}/${fileName}`
  // const distDirPath = `dist/${exchangesDir}/${fileName}`

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
  }

  // if (!fs.existsSync(distDirPath)) {
  //   fs.mkdirSync(distDirPath)
  // }

  const indexPath = `${dirPath}/index.ts`
  fs.writeFileSync(indexPath, `export * from '../${fileName}';`)

  // const packageJsonPath = `${distDirPath}/package.json`
  // const packageJsonContent =
  //   JSON.stringify({ type: 'module', types: `./index.d.ts`, main: `./index.js` }, undefined, 2) + '\n'
  // fs.writeFileSync(packageJsonPath, packageJsonContent)
})

const packageJsonPath = './package.json'
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath).toString())

const newExports: Record<string, any> = {}

fs.readdirSync(commonDir).forEach((dir: string) => {
  dir = dir.replace('.ts', '')
  const indexPath = `./${commonDir}/${dir}/index.js`
  const typesPath = `./${commonDir}/${dir}/index.d.ts`
  newExports[`./${dir}`] = {
    import: indexPath,
    types: typesPath
  }
})

fs.readdirSync(exchangesDir).forEach((dir: any) => {
  dir = dir.replace('.ts', '')
  const indexPath = `./${exchangesDir}/${dir}/index.js`
  const typesPath = `./${exchangesDir}/${dir}/index.d.ts`
  newExports[`./${dir}`] = {
    import: indexPath,
    types: typesPath
  }
})

packageJson.exports = { ...packageJson.exports, ...newExports }

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))
