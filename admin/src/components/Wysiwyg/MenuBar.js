import {
    Box,
    Flex,
    IconButton,
    IconButtonGroup,
    Option,
    Select,
} from '@strapi/design-system'
import {
    Bold as BoldIcon,
    Italic as ItalicIcon,
    StrikeThrough as StrikeThroughIcon,
    Underline as UnderlineIcon,
} from '@strapi/icons'
import React from 'react'

const onHeadingChange = (editor, type) => {
    switch (type) {
        case 'h1':
        case 'h2':
        case 'h3':
        case 'h4':
        case 'h5':
        case 'h6':
            editor
                .chain()
                .focus()
                .toggleHeading({ level: parseInt(type.replace('h', '')) })
                .run()
            break
        case 'paragraph':
            editor.chain().focus().setParagraph().run()
            break
    }
}

const MenuBar = ({ editor }) => {
    if (!editor) {
        return null
    }

    let selectedTextStyle = 'none'

    if (editor.isActive('heading', { level: 1 })) selectedTextStyle = 'h1'
    if (editor.isActive('heading', { level: 2 })) selectedTextStyle = 'h2'
    if (editor.isActive('heading', { level: 3 })) selectedTextStyle = 'h3'
    if (editor.isActive('heading', { level: 4 })) selectedTextStyle = 'h4'
    if (editor.isActive('heading', { level: 5 })) selectedTextStyle = 'h5'
    if (editor.isActive('heading', { level: 6 })) selectedTextStyle = 'h6'
    if (editor.isActive('paragraph')) selectedTextStyle = 'paragraph'

    return (
        <div>
            <Box padding={2} background="neutral100" className="menubar">
                <Flex justifyContent="space-between">
                    <Flex style={{ flexWrap: 'wrap' }}>
                        <Box className="button-group">
                            <Select
                                required
                                size="S"
                                placeholder="Text style"
                                onChange={(val) => onHeadingChange(editor, val)}
                                value={selectedTextStyle}
                            >
                                <Option value={'paragraph'}>Paragraph</Option>
                                <Option value={'h1'}>Heading 1</Option>
                                <Option value={'h2'}>Heading 2</Option>
                                <Option value={'h3'}>Heading 3</Option>
                                <Option value={'h4'}>Heading 4</Option>
                                <Option value={'h5'}>Heading 5</Option>
                                <Option value={'h6'}>Heading 6</Option>
                            </Select>
                        </Box>

                        <IconButtonGroup className="button-group">
                            <IconButton
                                icon={<BoldIcon />}
                                label="Bold"
                                onClick={() =>
                                    editor.chain().focus().toggleBold().run()
                                }
                                disabled={
                                    !editor.can().chain().focus().toggleBold().run()
                                }
                                className={
                                    editor.isActive('bold') ? 'is-active' : ''
                                }
                            />
                            <IconButton
                                icon={<ItalicIcon />}
                                label="Italic"
                                onClick={() =>
                                    editor.chain().focus().toggleItalic().run()
                                }
                                disabled={
                                    !editor
                                        .can()
                                        .chain()
                                        .focus()
                                        .toggleItalic()
                                        .run()
                                }
                                className={
                                    editor.isActive('italic') ? 'is-active' : ''
                                }
                            />
                            <IconButton
                                icon={<StrikeThroughIcon />}
                                label="Strikethrough"
                                onClick={() =>
                                    editor.chain().focus().toggleStrike().run()
                                }
                                disabled={
                                    !editor
                                        .can()
                                        .chain()
                                        .focus()
                                        .toggleStrike()
                                        .run()
                                }
                                className={
                                    editor.isActive('strike') ? 'is-active' : ''
                                }
                            />
                            <IconButton
                                icon={<UnderlineIcon />}
                                label="Underline"
                                className={
                                    editor.isActive('underline') ? 'is-active' : ''
                                }
                                onClick={() =>
                                    editor.chain().focus().toggleUnderline().run()
                                }
                            />
                        </IconButtonGroup>
                    </Flex>
                </Flex>
            </Box>

            <button
                onClick={() => editor.chain().focus().toggleCode().run()}
                disabled={!editor.can().chain().focus().toggleCode().run()}
                className={editor.isActive('code') ? 'is-active' : ''}
            >
                code
            </button>
            <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
                clear marks
            </button>
            <button onClick={() => editor.chain().focus().clearNodes().run()}>
                clear nodes
            </button>
            <button
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={editor.isActive('paragraph') ? 'is-active' : ''}
            >
                paragraph
            </button>
            <button
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 1 }).run()
                }
                className={
                    editor.isActive('heading', { level: 1 }) ? 'is-active' : ''
                }
            >
                h1
            </button>
            <button
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
                className={
                    editor.isActive('heading', { level: 2 }) ? 'is-active' : ''
                }
            >
                h2
            </button>
            <button
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 3 }).run()
                }
                className={
                    editor.isActive('heading', { level: 3 }) ? 'is-active' : ''
                }
            >
                h3
            </button>
            <button
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 4 }).run()
                }
                className={
                    editor.isActive('heading', { level: 4 }) ? 'is-active' : ''
                }
            >
                h4
            </button>
            <button
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 5 }).run()
                }
                className={
                    editor.isActive('heading', { level: 5 }) ? 'is-active' : ''
                }
            >
                h5
            </button>
            <button
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 6 }).run()
                }
                className={
                    editor.isActive('heading', { level: 6 }) ? 'is-active' : ''
                }
            >
                h6
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive('bulletList') ? 'is-active' : ''}
            >
                bullet list
            </button>
            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={editor.isActive('orderedList') ? 'is-active' : ''}
            >
                ordered list
            </button>
            <button
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={editor.isActive('codeBlock') ? 'is-active' : ''}
            >
                code block
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={editor.isActive('blockquote') ? 'is-active' : ''}
            >
                blockquote
            </button>
            <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                horizontal rule
            </button>
            <button onClick={() => editor.chain().focus().setHardBreak().run()}>
                hard break
            </button>
            <button
                onClick={() => editor.chain().focus().undo().run()}
                disabled={!editor.can().chain().focus().undo().run()}
            >
                undo
            </button>
            <button
                onClick={() => editor.chain().focus().redo().run()}
                disabled={!editor.can().chain().focus().redo().run()}
            >
                redo
            </button>
        </div>
    )
}

export default MenuBar
