import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Wrapper from './style'

import { Box, Stack } from '@strapi/design-system'
import { useIntl } from 'react-intl'
import MenuBar from './MenuBar'

import { EditorContent, useEditor } from '@tiptap/react'

// Tiptap Extensions
import BoldExtension from '@tiptap/extension-bold'
import BulletListExtension from '@tiptap/extension-bullet-list'
import CodeExtension from '@tiptap/extension-code'
import DocumentExtension from '@tiptap/extension-document'
import GapcursorExtension from '@tiptap/extension-gapcursor'
import HeadingExtension from '@tiptap/extension-heading'
import HistoryExtension from '@tiptap/extension-history'
import ItalicExtension from '@tiptap/extension-italic'
import ListItemExtension from '@tiptap/extension-list-item'
import ParagraphExtension from '@tiptap/extension-paragraph'
import PlaceholderExtension from '@tiptap/extension-placeholder'
import StrikeExtension from '@tiptap/extension-strike'
import TextExtension from '@tiptap/extension-text'
import UnderlineExtension from '@tiptap/extension-underline'

const Wysiwyg = ({
    hint,
    disabled,
    error,
    intlLabel,
    labelAction,
    name,
    onChange,
    placeholder,
    value,
    required,
}) => {
    const { formatMessage } = useIntl()
    const [mediaLibVisible, setMediaLibVisible] = useState(false)

    const handleToggleMediaLib = () => setMediaLibVisible((prev) => !prev)

    const tiptap = useEditor({
        extensions: [
            DocumentExtension,
            ParagraphExtension,
            TextExtension,
            BoldExtension,
            StrikeExtension,
            ItalicExtension,
            GapcursorExtension,
            ListItemExtension,
            BulletListExtension,
            HeadingExtension,
            UnderlineExtension,
            CodeExtension,
            HistoryExtension,
            PlaceholderExtension.configure({
                placeholder: ({ node }) => {
                    if (node.type.name === 'heading') {
                        console.log('node heading')
                        return 'Write awesome title...'
                    }

                    console.log(node)

                    return 'Write something awesome...'
                },
            }),
        ],
        content: `<h2>Hi there,</h2> <p> this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists: </p> <ul> <li> That's a bullet list with one … </li> <li> … or two list items. </li> </ul> <p> Isn't that great? And all of that is editable. But wait, there's more. Let's try a code block: </p> <pre><code class="language-css">body { display: none; }</code></pre> <p> I know, I know, this is impressive. It's only the tip of the iceberg though. Give it a try and click a little bit around. Don't forget to check the other examples too. </p> <blockquote> Wow, that's amazing. Good work, boy! 👏 <br /> — Mom </blockquote>`,

        parseOptions: {
            preserveWhitespace: 'full',
        },

        onBeforeCreate({ editor }) {},

        onUpdate({ editor }) {
            console.log('onUpdate')
        },
    })

    return (
        <Stack spacing={1}>
            <Wrapper>
                <Box
                    hasRadius
                    overflow={'hidden'}
                    borderWidth="1px"
                    borderStyle="solid"
                    borderColor="neutral200"
                >
                    <MenuBar editor={tiptap} />
                    <Box
                        padding={2}
                        background="neutral0"
                        maxHeight={'600px'}
                        style={{ resize: 'vertical', overflow: 'auto' }}
                    >
                        <EditorContent editor={tiptap} />
                    </Box>
                </Box>
            </Wrapper>
        </Stack>
    )
}

Wysiwyg.defaultProps = {
    disabled: false,
    error: '',
    labelAction: undefined,
    placeholder: null,
    required: false,
    value: '',
    hint: '',
}

Wysiwyg.propTypes = {
    hint: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    disabled: PropTypes.bool,
    error: PropTypes.string,
    intlLabel: PropTypes.shape({
        id: PropTypes.string.isRequired,
        defaultMessage: PropTypes.string.isRequired,
        values: PropTypes.object,
    }).isRequired,
    labelAction: PropTypes.element,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.shape({
        id: PropTypes.string.isRequired,
        defaultMessage: PropTypes.string.isRequired,
        values: PropTypes.object,
    }),
    required: PropTypes.bool,
    value: PropTypes.string,
}

export default Wysiwyg
