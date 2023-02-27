'use strict'

module.exports = ({ strapi }) => ({
    getSettings(ctx) {
        ctx.body = strapi
            .plugin('tiptap-editor')
            .service('myService')
            .getWelcomeMessage()
    },
})
