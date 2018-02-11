import * as express from 'express'
import { join } from 'path'

const app = express()

const relPath = (path: string) => join(__dirname, path)

// First try to serve anything in the static folder
app.use('/', express.static(relPath('../../client/dist')))

// In any other case serve index.html (Single Page App)
app.get('*', (req, res) => res.sendFile(relPath('../../client/index.html')))

const PORT = 3000
app.listen(PORT, () => {
  console.log("  App is running at http://localhost:%d", PORT)
})
