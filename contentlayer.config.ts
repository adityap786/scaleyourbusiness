import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        date: { type: 'date', required: true },
        description: { type: 'string', required: true },
        author: { type: 'string', required: true },
        image: { type: 'string', required: false },
        tags: { type: 'list', of: { type: 'string' }, required: false },
    },
    computedFields: {
        url: { type: 'string', resolve: (post) => `/blog/${post._raw.flattenedPath.replace('blog/', '')}` },
        slug: { type: 'string', resolve: (post) => post._raw.flattenedPath.replace('blog/', '') },
    },
}))

export default makeSource({ contentDirPath: 'src/content', documentTypes: [Post] })
