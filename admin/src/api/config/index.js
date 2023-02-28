import { request } from '@strapi/helper-plugin'
import pluginId from '../../pluginId'

const config = {
    get: async () => {
        const data = await request(`/${pluginId}/config`, {
            method: 'GET',
        })
        return data
    },
    set: async (data) => {
        return await request(`/${pluginId}/config`, {
            method: 'POST',
            body: data,
        })
    },
}
export default config
