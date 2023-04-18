import {Router} from "express"
//import moviesRouter from "./moviesRouter.js"
import moviesRouter from "./moviesRouter"

const routes = Router()

routes.use("/movies", moviesRouter)

export default routes

