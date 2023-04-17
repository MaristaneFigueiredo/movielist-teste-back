/* module.exports = {
    preset: "ts-jest"
    testEnvironment:"node",
    moduleDirectories: ["node-modules", "src"],
    transform: {
        ".+\\.ts$": "ts-jest",
    }, 
    testMatch: ["<rootDir>/tests/*.(test|spec).ts"]
} */


export default {
    preset: "ts-jest", // conjunto de configurações que será executada
    testEnvironment:"node", // qual o ambiente será rodado os testes
    moduleDirectories: ["node-modules", "src"],
    transform: {
        ".+\\.ts$": "ts-jest", // forma de tranformação dos arquivos ts, usando ts-jest
    }, 
    testMatch: ["<rootDir>/tests/*.(test|spec).ts"] // Local onde estará os nossos arquivos de teste e sintaxe de como eles estarão escritos.
    
}

//obs.: projetos diferentes, pode ter configurações diferentes
    

