module.exports = {
    // Accessible only from admin UI
    type: 'admin',
    routes: [
        {
            method: 'GET',
            path: '/config',
            handler: 'config.getConfig',
            config: { policies: [] },
        },
        {
            method: 'POST',
            path: '/config',
            handler: 'config.setConfig',
            config: { policies: [] },
        },
    ],
}
