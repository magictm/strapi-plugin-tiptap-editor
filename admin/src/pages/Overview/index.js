/*
 *
 * Overview
 *
 */

import React, { useState, useEffect, useRef } from 'react'
import { useQuery, useMutation, useQueryClient } from 'react-query'
// import PropTypes from 'prop-types';
import WysiwygEditor from '../../components/Wysiwyg'

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
    Badge,
    Status,
    Flex,
    Loader,
} from '@strapi/design-system'
import { Formik } from 'formik'
import {
    Form,
    LoadingIndicatorPage,
    useNotification,
    useOverlayBlocker,
} from '@strapi/helper-plugin'

const Overview = () => {
    const toggleNotification = useNotification()

    const isLoading = false
    const [loadingUpdatesStatus, setLoadingUpdatesStatus] = useState(true)

    setTimeout(() => {
        setLoadingUpdatesStatus(false)
    }, 2000)

    const query = useQuery('settings', {})

    const onChange = (x) => {
        console.log('onChange', x)
    }

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
        <Main aria-busy={isLoading}>
            <HeaderLayout
                title={'Overview'}
                subtitle={'TipTap Editor information'}
            />

            {!isLoading && (
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
                        <Box>
                            <Typography variant="delta">Details</Typography>

                            <Box marginTop={4}>
                                <Flex>
                                    <Typography variant="epsilon">
                                        Version: {''}
                                        <Typography
                                            variant="epsilon"
                                            fontWeight="bold"
                                        >
                                            v0.1.0
                                        </Typography>
                                    </Typography>

                                    {loadingUpdatesStatus ? (
                                        <Box marginLeft={2}>
                                            <Loader small>
                                                Checking updates...
                                            </Loader>
                                        </Box>
                                    ) : (
                                        <Box marginLeft={2}>
                                            <Status
                                                variant="success"
                                                size="S"
                                                showBullet={false}
                                            >
                                                Latest
                                            </Status>
                                        </Box>
                                    )}
                                    {/* <Box marginLeft={2}>
                                        <Status
                                            variant="danger"
                                            size="S"
                                            showBullet={false}
                                        >
                                            Outdated! New version{' '}
                                            <Typography fontWeight="bold">
                                                v0.2.3
                                            </Typography>{' '}
                                            available!
                                        </Status>
                                    </Box> */}
                                </Flex>
                            </Box>
                        </Box>

                        <Box marginTop={4}>
                            <Typography variant="delta">Author</Typography>
                            <Box marginTop={4}>Marcin Stawowczyk (m7rlin)</Box>
                        </Box>
                    </Box>

                    <Box
                        marginTop={6}
                        paddingTop={6}
                        paddingBottom={6}
                        paddingLeft={7}
                        paddingRight={7}
                        hasRadius
                        background="neutral0"
                        shadow="filterShadow"
                    >
                        <Box>
                            <Typography variant="delta">Playground</Typography>
                        </Box>
                        <Box marginTop={1}>
                            <Typography variant="omega">
                                Craft Perfect Content with Strapi's Tiptap Editor
                                Playground: Experiment and Customize Your Writing
                                Process.
                            </Typography>

                            <Box marginTop={4} marginBottom={4}>
                                <Divider />
                            </Box>

                            <Box marginTop={4}>
                                <WysiwygEditor
                                    name={'playground'}
                                    onChange={onChange}
                                    intlLabel={{
                                        id: 'asgasdffksd',
                                        defaultMessage: 'TipTap Editor',
                                    }}
                                ></WysiwygEditor>
                            </Box>
                        </Box>
                    </Box>

                    <Box
                        marginTop={6}
                        paddingTop={6}
                        paddingBottom={6}
                        paddingLeft={7}
                        paddingRight={7}
                        hasRadius
                        background="neutral0"
                        shadow="filterShadow"
                    >
                        <Typography variant="delta">Tutorials</Typography>
                    </Box>
                </ContentLayout>
            )}

            {/* Loading */}
            {isLoading && <LoadingIndicatorPage />}
        </Main>
    )
}

export default Overview