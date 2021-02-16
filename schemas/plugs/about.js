export default {
  title: "About",
  name: "about",
  type: "object",
  fieldsets: [
    {
      title: "Content",
      name: "content",
    },
  ],
  fields: [
    {
      title: "Label",
      name: "label",
      type: "string",
    },
    {
      title: "Gorgeous Photo",
      name: "photo",
      type: "image",
      fieldset: "content",
    },
    {
      title: "Heading",
      name: "heading",
      type: "string",
      fieldset: "content",
    },
    {
      title: "Subheading",
      name: "subheading",
      type: "text",
      fieldset: "content",
    },
    {
      title: "Tidbits",
      name: "tidbits",
      type: "array",
      of: [{ type: "tidbit" }],
    },
  ],
};
