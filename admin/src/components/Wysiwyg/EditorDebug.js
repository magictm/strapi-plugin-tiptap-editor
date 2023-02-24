import {
    Box,
    Flex,
    IconButton,
    IconButtonGroup,
    Option,
    Select,
    Button,
    Switch,
    Typography,
    TabGroup,
    Tabs,
    TabPanels,
    TabPanel,
    Tab,
} from '@strapi/design-system'
import { simpleData } from '../../utils/editorData'

import React, { useState } from 'react'

const EditorDebug = ({ editor }) => {
    const insertEditorContent = () => {
        editor.commands.setContent(simpleData, true)
    }

    return (
        <Box
            padding={2}
            background="neutral100"
            overflow={'hidden'}
            className="debug-wrapper"
        >
            <TabGroup
                className="tab-wrapper"
                label="Some stuff for the label"
                id="tabs"
                onTabChange={(selected) => console.log(selected)}
            >
                <Tabs>
                    <Tab>Options</Tab>
                    <Tab>HTML</Tab>
                    <Tab>JSON</Tab>
                </Tabs>
                <TabPanels>
                    <TabPanel>
                        <Box color="neutral800" padding={4} background="neutral0">
                            <Button onClick={insertEditorContent}>
                                Insert content
                            </Button>
                            <Box marginTop={2}>
                                <Typography>WIP</Typography>
                            </Box>
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box
                            className="html-preview"
                            color="neutral800"
                            padding={4}
                            background="neutral0"
                        >
                            <pre>
                                <code>{editor.getHTML()}</code>
                            </pre>
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box
                            className="json-preview"
                            color="neutral800"
                            padding={4}
                            background="neutral0"
                        >
                            <pre>
                                <code>
                                    {JSON.stringify(editor.getJSON(), null, 4)}
                                </code>
                            </pre>
                        </Box>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </Box>
    )
}

export default EditorDebug
