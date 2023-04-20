import supertest from "supertest"
import app from "../src/app"
import { MovieEntity } from "../src/protocols/movies"
import prisma from "../src/config/database"
import { beforeEach } from "node:test"

const api = supertest(app) // chama o supertest passando o servidor

beforeAll(async () => {
  await prisma.movies.deleteMany({})
}) //Limpar o banco - antes de rodar qualquer coisa eu quero fazer uma ação que é limpar o banco.

//beforeEach() - roda antes de cada teste, ou seja, antes de cada "IT"
//after Each() - roda depois de cada teste, ou seja, depois de cada "IT"

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
 /*    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({

        })
    ]) 
    ) *///toEqual para tipos não primitivos
  })
})

/* instalar dotenv-cli
        npm i -D dotenv-cli
*/

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
