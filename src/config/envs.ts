// este arquivo carregará as variáveis de ambiente
import dotenv from "dotenv";

export function loadEnvs() {
    let path = '.env'// apontando para nosso env padrão

    if(process.env.NODE_ENV === 'test') {
        let path = '.env.test'
    }

    dotenv.config({path})
}


//---configurando ambientes diferentes
/*
    usar o próprio prisma p criar o meu banco de test

    npx dotenv -e .env.test npx prisma migrate dev --name criando-banco-de-teste postgres-init    
    
*/

/* rodar o jest no ambiente de test
    npx dotenv -e .env.test npx jest
*/