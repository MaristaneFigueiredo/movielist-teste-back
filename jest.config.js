/* module.exports = {
    preset: "ts-jest",
    testEnvironment:"node",
    moduleDirectories: ["node-modules", "src"],
    transform: {
        ".+\\.ts$": "ts-jest",
    }, 
    testMatch: ["<rootDir>/tests/*.(test|spec).ts"]
} */

 
/* export default {
    preset: "ts-jest", // conjunto de configurações que será executada
    testEnvironment:"node", // qual o ambiente será rodado os testes
  //  moduleDirectories: ["node-modules", "src"],
     moduleDirectories: ["<rootDir>/node_modules", "<rootDir>/src"],
    transform: {
       ".+\\.ts$": "ts-jest", // forma de tranformação dos arquivos ts, usando ts-jest
   //    "^.+\\.(js|ts)$": "ts-jest",
    }, 
    testMatch: ["<rootDir>/tests/*.(test|spec).ts"], // Local onde estará os nossos arquivos de teste e sintaxe de como eles estarão escritos.
    //setupFilesAfterEnv: ['source-map-support/register'],
    moduleFileExtensions: ['ts', 'js'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1', // substitua pelo caminho correto para o diretório do seu projeto
      },
}  */

//obs.: projetos diferentes, pode ter configurações diferentes
export default  {
    preset: "ts-jest",
    testEnvironment:"node",
    moduleDirectories: ["<rootDir>/node_modules", "<rootDir>/src"],
    transform: {
        ".+\\.ts$": "ts-jest",
    }, 
    testMatch: ["<rootDir>/tests/*.(test|spec).ts"],
  /*   server:{
        port:5001,
    } */
    


}