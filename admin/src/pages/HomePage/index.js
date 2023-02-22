/*
 *
 * HomePage
 *
 */

import React from 'react'
import { useQuery, useMutation, useQueryClient } from 'react-query'
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId'

import {
    Box,
    Divider,
    Button,
    Typography,
    Main,
    HeaderLayout,
    ContentLayout,
    Tabs,
    Tab,
    TabGroup,
    TabPanels,
    TabPanel,
} from '@strapi/design-system'
import { Formik } from 'formik'
import {
    Form,
    LoadingIndicatorPage,
    useNotification,
    useOverlayBlocker,
} from '@strapi/helper-plugin'

const HomePage = () => {
    const toggleNotification = useNotification()

    const query = useQuery('settings', {})

    // toggleNotification({
    //     type: 'success',
    //     message: {
    //         id: 'strapi-tiptap-editor-save-success',
    //         defaultMessage: 'Saved',
    //     },
    // })

    // toggleNotification({
    //     type: 'warning',
    //     message: {
    //         id: 'strapi-tiptap-editor-save-error',
    //         defaultMessage: 'Saved failed',
    //     },
    // })

    return (
        <Main aria-busy={query.isLoading}>
            <HeaderLayout
                title={'TipTap Editor Settings'}
                subtitle={
                    "Customize your editing experience with TipTap Editor's Settings"
                }
                primaryAction={<Button disabled>Save</Button>}
            />

            {!query.isLoading && (
                <ContentLayout>
                    <Box
                        paddingTop={6}
                        paddingBottom={6}
                        paddingLeft={7}
                        paddingRight={7}
                        hasRadius
                        background="neutral0"
                        shadow="filterShadow"
                    >
                        <Typography variant="delta">Settings</Typography>
                    </Box>
                </ContentLayout>
            )}

            {/* Loading */}
            {query.isLoading && <LoadingIndicatorPage />}
        </Main>
    )
}

export default HomePage
