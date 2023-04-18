
import supertest from 'supertest'
//import request from 'supertest';
import server from '../src/server'

//Cannot find module './routes/index.js' from 'src/server.ts'
/* com extensão js
Cannot find module '../src/server.js' from 'tests/movies.test.ts*/


//* import moviesRouter from "../src/routes/index"
//import routes from "../src/routes/index"; 

const api = supertest(server)// chama o supertest passando o servidor
//const api = request(server)// chama o supertest passando o servidor


// simulando as requisições
describe ('Testanto API', () => {
    
    it('Testando GET:/movies', async () => {
        
        // Superteste faz a requisição
        const response = await api.get("/movies")
        
        console.log(response)
    }) 
})