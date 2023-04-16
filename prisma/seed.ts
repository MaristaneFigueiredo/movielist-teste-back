import prisma from "../src/config/database.js"

//função que vai executar o prisma
async function main() {
  await prisma.plataforms.createMany({
    data: [
      { name: "Netflix" },
      { name: "HBO Max" },
      { name: "Globo Play" },
      { name: "Amazon Premie" },
    ],
  })

  await prisma.genres.createMany({
    data: [
      { name: "Suspense" },
      { name: "Comédia" },
      { name: "Terror" },
      { name: "Ficção" },
      { name: "Romance" },
    ],
  })
}

// execução da função. Estou fora de uma função, usarei o o then e catch(poderia ser try e catch tbm), pois retorno será uma promise, basta passar o mouse
main()
  .then(() => console.log("Registros inseridos com sucesso!"))
  .catch((e) => {
    console.error(e)
    process.exit(1) // abrindo um processo separado no node para fazer essa execução. Interessante encerrá-lo, caso aconteça algum problema
  })
  // Como estamos tratando direto com o banco de dados, é uma boa prática, usar o "finally" para finalizar se der algum erro, ele finalizará a "promise"
  // quando acontece algum problema, para evitar vazamento de memória e outros problemas relacionados a isso, o interessante é fechar a conexão manualmente
  .finally(async () => {
    await prisma.$disconnect()
  })
