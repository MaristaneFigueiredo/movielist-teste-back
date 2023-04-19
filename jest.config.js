/* module.exports = {
    preset: "ts-jest",
    testEnvironment:"node",
    moduleDirectories: ["node-modules", "src"],
    transform: {
        ".+\\.ts$": "ts-jest",
    }, 
    testMatch: ["<rootDir>/tests/*.(test|spec).ts"]
} */

//obs.: projetos diferentes, pode ter configurações diferentes
export default {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleDirectories: ["<rootDir>/node_modules", "<rootDir>/src"],
  transform: {
    ".+\\.ts$": "ts-jest",
  },
  testMatch: ["<rootDir>/tests/*.(test|spec).ts"],
  /*   server:{
        port:5001,
    } */
}
