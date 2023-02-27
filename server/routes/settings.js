module.exports = {
    // Accessible only from admin UI
    // type: 'admin',
    type: 'content-api',
    routes: [
        {
            method: 'GET',
            path: '/settings',
            // handler: 'settings.getSettings',
            handler: 'myController.getSettings',
            config: { policies: [], auth: false },
        },
        // {
        //     method: 'POST',
        //     path: '/settings',
        //     handler: 'settings.setSettings',
        //     config: {},
        // },
    ],
}
