const config = {
    servers: ['000001', '000002'], // this will be routing for your servers
    serverType: "Javascript", // or python
    async onStart(event, serverId) {
        console.log(serverId)
        console.log(event)
        // Do whatever you want
    },
    async onStop(event, serverId) {
        console.log(serverId)
        console.log(event)
        // Do whatever you want
    },
    async onRestart(event, serverId) {
        console.log(serverId)
        console.log(event)
        // Do whatever you want
    },
    company: {
        name: "hosting service name",
        homepage: "home page"
    }
}
export default config