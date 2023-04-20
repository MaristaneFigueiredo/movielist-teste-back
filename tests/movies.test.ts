import supertest from "supertest"
import app from "../src/app"
import { MovieEntity } from "../src/protocols/movies"
import prisma from "../src/config/database"
import { beforeEach } from "node:test"
import { any } from "joi"

const api = supertest(app) // chama o supertest passando o servidor

beforeAll(async () => {
  await prisma.movies.deleteMany({})
})

describe(" POST :/movies", () => {
  it("should respond with status 201. There is no token in this project", async () => {
    const response = await api.post("/movies").send({
      name: "Filme de teste",
      plataformId: 1,
      genreId: 2,
    })
    expect(response.status).toBe(201)
    //  expect(response.body).toEqual({})
  })
})

describe("GET:/movies", () => {
  it("Shoul respond with status 401 if no token", async () => {
    const response = await api.get("/jobs")
    expect(response.status).toBe(401)
  })
  it("Shoul respond with status 401 if invalid token", async () => {
    const response = await api.get("/jobs").set("Authorization", "Bearer XXXX")
    expect(response.status).toBe(401)
  })

  it("Shoul respond with status 200 if valid token", async () => {
    const response = await api.get("/movies")
    expect(response.status).toBe(200)
  })
})

/* Testar APIS
    para testar nossa APi precisamos subir um servidor, para simular nossas requisições p o servidor.  A biblioteca supertest faz essa simulação.
        npm i -D supertest @types/supertest

    1) Para acontecer a simulação do servidor precisamos de no arquivo onde será feitos os testes IMPORTAR o arquivo onde encontra a configuração do servidor e a porta dele. 
        Ex.: server.ts
    2) Importar tbm a lib "supertest" que fará a simulação do servidor

    3) configuração do banco, caso as rotas chegam até o banco
            import supertest from "supertest"
            import server from "../src/server"
            import prisma from "src/config/database"

*/
