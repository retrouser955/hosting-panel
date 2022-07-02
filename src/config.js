const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
const config = {
    servers: async () => {
        await delay(3000)
        return [
            {
                id: "000001",
                name: "Hello world one"
            },
            {
                id: "000002",
                name: "Hello world two"
            },
            {
                id: "000003",
                name: "Hello world three"
            },
            {
                id: "000004",
                name: "Hello world four"
            }
        ]
    }, // this will be routing for your servers
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
        homepage: "https://example.com",
        logo: "https://cdn.logo.com/hotlink-ok/logo-social-sq.png" // must be a url
    },
    navBarExtras: [ // this will render out to the navbar
        {
            name: "blog",
            url: "https://example.com"
        }
    ],
    async getConsoleMethod(serverId) {
        console.log(serverId)
        await delay(5000)
        return "Console not set up yet" // this should return a string which contains the console
    },
    async getResourcesMethod(serverId) {
        console.log(serverId)
        await delay(5000)
        return {
            ram: {
                limit: "1000mb",
                used: "10mb"
            },
            cpu: {
                limit: "100%",
                used: "21%"
            },
            storage: {
                limit: "3GB",
                used: "100mb"
            },
            upTime: "10d 12h 35m"
        }
    }
}
export default config