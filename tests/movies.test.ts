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

/*obs.:No Jest, o describe é uma FUNÇÃO de agrupamento usada para organizar e categorizar casos de teste em BLOCOS. 
Ele é usado para criar blocos de testes relacionados, permitindo que você forneça uma descrição e agrupe vários casos de teste sob esse contexto
Os descritores devem ser usados APENAS para fornecer uma DESCRIÇÃO do contexto dos casos de teste
Sintaxe:    
    describe('Testes de exemplo', () => {
        // Casos de teste aqui
    });
test ou it: É usado para escrever casos de teste individuais dentro de um bloco "describe"
expect: é usada para verificar se um valor atende a uma determinada condição
        expect(valor).toBe(3); // Verifica se o valor é igual a 3
toBe: É uma função de asserção que verifica se dois valores são estritamente iguais em valor e tipo. 
toEqual: É uma função de asserção que verifica se dois OBJETOS ou ARRAYS são iguais em termos de propriedades/elementos e seus respectivos valores.
        expect(objeto).toEqual({ chave: 'valor' }); // Verifica se o objeto possui a chave com o valor esperado

        expect (result.body).toEqual({
            id: expect.any(Number), // Espero QUALQUER VALOR desde que seja numero
            title: expect.any(String) //Espero QUALQUER VALOR desde que seja string
        })
toBeTruthy e toBeFalsy: São funções de asserção que verificam se um valor é verdadeiro ou falso, respectivamente
toBeGreaterThan e toBeLessThan: São funções de asserção que verificam se um valor é maior ou menor do que um valor específico, respectivamente
toContain: É uma função de asserção que verifica se um valor específico está presente em um array ou em uma string
toThrow e toThrowError: São funções de asserção que verificam se uma função lança uma exceção ou erro quando é chamada.
            expect(() => minhaFuncao()).toThrow(); // Verifica se minhaFuncao() lança uma exceção
            expect(() => minhaFuncao()).toThrowError('Mensagem de erro'); // Verifica se minhaFuncao() lança um erro com uma determinada mensagem

not: É um modificador que pode ser usado em conjunto com outras funções de asserção para verificar a negação de uma condição.
    expect(valor).not.toBe(3); // Verifica se o valor não é igual a 3
toHaveLength: comparar tamanho. Ex.: tamanho de um array
arrayContaining: Qdo desejo um subjconjunto de um array, ou seja, um recorte de um array principal
        Ex.:  expect(response.body).toEqual(expect.arrayContaining([])) 
toMatchObject: Quando considero partes de um objeto
        Ex.:  expect(response.body).toMatchObject({"title": "Developer III"})
                expect(objetoTestado).toMatchObject(objetoEsperado);

         É importante notar que toMatchObject faz uma comparação parcial dos objetos, ou seja, não é necessário que todos os pares de propriedade-valor do objetoEsperado estejam presentes no objetoTestado. Propriedades adicionais no objetoTestado não serão consideradas na comparação.
*/
/* instalar dotenv-cli
        npm i -D dotenv-cli
*/
