export default {
  name: "news",
  title: "News Element",
  type: "document",
  fields: [
    {
      title: "Text",
      name: "text",
      type: "string",
    },
    {
      title: "Date",
      name: "date",
      type: "datetime",
    },
    {
      title: "Header",
      name: "header",
      type: "string",
    },
    {
      title: "Paragraph",
      name: "paragraph",
      type: "text",
    },
    {
      title: "Image",
      name: "image",
      type: "image",
    },
    {
      title: "Link text",
      name: "linkText",
      type: "string",
    },
    {
      title: "Link URL",
      name: "linkUrl",
      type: "url",
    },
  ],
};
