'use strict'

module.exports = ({ strapi }) => ({
    restart() {
        setImmediate(() => strapi.reload())
    },
})
