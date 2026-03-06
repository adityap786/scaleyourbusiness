// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    description: { type: "string", required: true },
    author: { type: "string", required: true },
    image: { type: "string", required: false },
    tags: { type: "list", of: { type: "string" }, required: false }
  },
  computedFields: {
    url: { type: "string", resolve: (post) => `/blog/${post._raw.flattenedPath.replace("blog/", "")}` },
    slug: { type: "string", resolve: (post) => post._raw.flattenedPath.replace("blog/", "") }
  }
}));
var contentlayer_config_default = makeSource({ contentDirPath: "src/content", documentTypes: [Post] });
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-N6WRROIC.mjs.map
