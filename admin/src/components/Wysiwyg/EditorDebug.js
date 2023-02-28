import {
    Box,
    Button,
    Option,
    Select,
    Tab,
    TabGroup,
    TabPanel,
    TabPanels,
    Tabs,
    Typography,
    NumberInput,
    Tooltip,
    Status,
} from '@strapi/design-system'
import { Information as InformationIcon } from '@strapi/icons'
import {
    knowledgeBaseArticleData,
    simpleData,
    blogPostData,
    newsArticleData,
    simpleWithImageData,
    emailNewsletterData,
    forumPostData,
    recipeInstructionsData,
    academicPaperData,
    legalDocumentData,
    codingTutorialData,
} from '../../utils/editorData'

import React, { useState } from 'react'

const EditorDebug = ({ editor }) => {
    const defaultDataSet = 'simple'
    const [selectedDataSet, setSelectedDataSet] = useState(defaultDataSet)
    const [characterLimit, setCharacterLimit] = useState(0)

    const insertEditorContent = () => {
        let dataset = simpleData
        switch (selectedDataSet) {
            case 'simpleWithImage':
                dataset = simpleWithImageData
                break
            case 'blogPost':
                dataset = blogPostData
                break
            case 'newsArticle':
                dataset = newsArticleData
                break
            case 'emailNewsletter':
                dataset = emailNewsletterData
                break
            case 'forumPost':
                dataset = forumPostData
                break
            case 'recipeInstructions':
                dataset = recipeInstructionsData
                break
            case 'knowledgeBaseArticle':
                dataset = knowledgeBaseArticleData
                break
            case 'academicPaper':
                dataset = academicPaperData
                break
            case 'legalDocument':
                dataset = legalDocumentData
                break
            case 'codingTutorial':
                dataset = codingTutorialData
                break
        }

        editor.commands.setContent(dataset, true)
    }

    const tabChangedEvent = (selected) => {
        // console.log(selected)
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
                label=""
                id="tabs"
                onTabChange={tabChangedEvent}
            >
                <Tabs>
                    <Tab>Options</Tab>
                    <Tab>HTML</Tab>
                    <Tab>JSON</Tab>
                </Tabs>
                <TabPanels>
                    <TabPanel>
                        <Box color="neutral800" padding={4} background="neutral0">
                            <Box marginBottom={2}>
                                <Status
                                    variant="secondary"
                                    size="S"
                                    showBullet={false}
                                >
                                    <Typography
                                        fontWeight="bold"
                                        textColor="alternative700"
                                    >
                                        ⚠ This section is under development.
                                    </Typography>
                                </Status>
                            </Box>
                            <Box>
                                <NumberInput
                                    placeholder="240"
                                    label="Character limit"
                                    name="character-limit"
                                    hint="Limit the number of characters in your editor."
                                    size="S"
                                    error={undefined}
                                    onValueChange={(value) =>
                                        setCharacterLimit(value)
                                    }
                                    value={characterLimit}
                                    labelAction={
                                        <Tooltip description="0 - unlimited characters">
                                            <button
                                                aria-label="Information about the character limit"
                                                style={{
                                                    border: 'none',
                                                    padding: 0,
                                                    background: 'transparent',
                                                }}
                                            >
                                                <InformationIcon aria-hidden />
                                            </button>
                                        </Tooltip>
                                    }
                                />
                                {characterLimit > 0 && (
                                    <Box
                                        as="p"
                                        padding={4}
                                        marginTop={2}
                                        background="neutral100"
                                    >
                                        <Typography>
                                            If you cannot insert dataset, please
                                            check if the character limit is set
                                            correctly. Too low character limit will
                                            prevent data set from beeing inserted.
                                        </Typography>
                                    </Box>
                                )}
                            </Box>
                            <Box marginTop={4}>
                                <Typography variant="delta">
                                    Insert content
                                </Typography>
                            </Box>
                            <Box marginTop={1}>
                                <Typography variant="omega">
                                    Sample Content for Testing WYSIWYG Editor
                                </Typography>
                            </Box>
                            <Box
                                className="button-group"
                                marginBottom={2}
                                marginTop={4}
                            >
                                <Select
                                    id="insert-data"
                                    label="Choose data set"
                                    required={false}
                                    size="S"
                                    placeholder="Data set"
                                    value={selectedDataSet}
                                    onClear={() =>
                                        setSelectedDataSet(defaultDataSet)
                                    }
                                    onChange={setSelectedDataSet}
                                >
                                    <Option value={'simple'}>Simple</Option>
                                    <Option value={'simpleWithImage'}>
                                        Simple with Image
                                    </Option>
                                    <Option value={'blogPost'}>Blog Post</Option>
                                    <Option value={'newsArticle'}>
                                        News Article
                                    </Option>
                                    <Option value={'emailNewsletter'}>
                                        Email Newsletter
                                    </Option>
                                    <Option value={'forumPost'}>Forum Post</Option>
                                    <Option value={'recipeInstructions'}>
                                        Recipe Instruction
                                    </Option>
                                    <Option value={'knowledgeBaseArticle'}>
                                        Knowledge Base Article
                                    </Option>
                                    <Option value={'academicPaper'}>
                                        Academic Paper
                                    </Option>
                                    <Option value={'legalDocument'}>
                                        Legal Document
                                    </Option>
                                    <Option value={'codingTutorial'}>
                                        Coding Tutorial
                                    </Option>
                                </Select>
                            </Box>
                            <Button onClick={insertEditorContent}>
                                Insert content
                            </Button>
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
