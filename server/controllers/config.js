'use strict'

const pluginId = require('../../admin/src/pluginId')

module.exports = ({ strapi }) => {
    const configService = strapi.plugin(pluginId).service('config')

    const getConfig = (ctx) => {
        try {
            return configService.getConfig()
        } catch (err) {
            ctx.throw(500, err)
        }
    }

    const setConfig = (ctx) => {
        ctx.body = {}
    }

    return {
        getConfig,
        setConfig,
    }
}
