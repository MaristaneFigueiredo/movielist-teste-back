import supertest from "supertest"
import server from "../src/server"
import { MovieEntity } from "../src/protocols/movies"
import prisma from "src/config/database"

const api = supertest(server) // chama o supertest passando o servidor

beforeAll(async () => {
  await prisma.movies.deleteMany({})
}) //Limpar o banco - antes de rodar qualquer coisa eu quero fazer uma ação que é limpar o banco.

// simulando as requisições - o describe é um agrupamento de testes
describe("Testanto as Rotas de Movies", () => {
  //O it é um teste individual

  it("Testando POST :/movies", async () => {
    // await (await api.post("/movies")).send({ MovieEntity })
  })

  it("Testando GET:/movies", async () => {
    // Superteste faz a requisição
    const response = await api.get("/movies")
    console.log(response.status)
    console.log("response.body", response.body)

    //Matcher para status code
    expect(response.status).toBe(200)

    //Matcher para body response
    expect(response.body).toEqual(
      expect.arrayContaining([expect.objectContaining({})])
    ) //toEqual para tipos não primitivos
  })
})

/* instalar dotenv-cli
        npm i -D dotenv-cli
*/
