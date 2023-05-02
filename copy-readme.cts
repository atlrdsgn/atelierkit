/** @format */

import fs from 'fs/promises'
import path from 'path'
;(async () => {
  await fs.copyFile(path.join(__dirname, './README.md'), 'package/atlrdsn-kit/README.md')
})()
