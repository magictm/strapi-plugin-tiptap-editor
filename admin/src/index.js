import { prefixPluginTranslations } from '@strapi/helper-plugin'
import pluginPkg from '../../package.json'
import pluginId from './pluginId'
import Initializer from './components/Initializer'
import PluginIcon from './components/PluginIcon'
import getTrad from './utils/getTrad'
import WysiwygComponent from './components/Wysiwyg'

const name = pluginPkg.strapi.name

const settingsPageComponent = async () => {
    const component = await import(
        /* webpackChunkName: "strapi-plugin-tiptap-settings-homepage-page" */ './pages/Settings'
    )

    return component
}
const overviewPageComponent = async () => {
    const component = await import(
        /* webpackChunkName: "strapi-plugin-tiptap-settings-overview-page" */ './pages/Overview'
    )

    return component
}

export default {
    register(app) {
        app.createSettingSection(
            {
                id: pluginId,
                intlLabel: {
                    id: getTrad('settings.menulabel'),
                    defaultMessage: 'TipTap Editor',
                },
            },
            [
                {
                    intlLabel: {
                        id: getTrad('settings.menu.overview'),
                        defaultMessage: 'Overview',
                    },
                    id: 'settings',
                    to: '/settings/tiptap-editor/overview',
                    Component: overviewPageComponent,
                    permissions: [],
                },
                // {
                //     intlLabel: {
                //         id: getTrad('settings.menu.settings'),
                //         defaultMessage: 'Settings',
                //     },
                //     id: 'settings',
                //     to: '/settings/tiptap-editor/settings',
                //     Component: settingsPageComponent,
                //     permissions: [],
                // },
            ],
        )

        app.addFields({ type: 'wysiwyg', Component: WysiwygComponent })

        app.registerPlugin({
            id: pluginId,
            initializer: Initializer,
            isReady: false,
            name,
        })
    },

    bootstrap(app) {},
    async registerTrads({ locales }) {
        const importedTrads = await Promise.all(
            locales.map((locale) => {
                return import(
                    /* webpackChunkName: "translation-[request]" */ `./translations/${locale}.json`
                )
                    .then(({ default: data }) => {
                        return {
                            data: prefixPluginTranslations(data, pluginId),
                            locale,
                        }
                    })
                    .catch(() => {
                        return {
                            data: {},
                            locale,
                        }
                    })
            }),
        )

        return Promise.resolve(importedTrads)
    },
}
