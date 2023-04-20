// este arquivo carregará as variáveis de ambiente
import dotenv from "dotenv"

export function loadEnvs() {
  let path = ".env" // apontando para nosso env padrão

  if (process.env.NODE_ENV === "test") {
    let path = ".env.test"
  }

  dotenv.config({ path })
}
