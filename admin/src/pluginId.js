const pluginPkg = require('../../package.json')

const pluginId =
    pluginPkg.strapi.name ||
    pluginPkg.name.replace(
        /^(@[^-,.][\w,-]+\/|strapi-)(plugin-|strapi-plugin-)/i,
        '',
    )

module.exports = pluginId
