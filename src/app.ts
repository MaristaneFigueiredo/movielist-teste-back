import express, { json } from "express"
import cors from "cors"
import "express-async-errors"
import routes from "./routes/index"

import { handleApplicationErros } from "./middlewares/handleApplicationErrors"


const app = express()
app.use(json())
app.use(cors())

app.use(routes)
app.use(handleApplicationErros)


export default app
