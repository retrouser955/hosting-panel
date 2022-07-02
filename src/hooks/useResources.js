import config from '../config.js'
async function useResources(serverId) {
    const res = await config.getResourcesMethod(serverId)
    return res
}
export default useResources