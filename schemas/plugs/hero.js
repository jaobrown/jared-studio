export default {
  title: "Hero",
  name: "hero",
  type: "object",
  fields: [
    {
      title: "Label",
      name: "label",
      type: "string",
    },
    {
      title: "Style",
      name: "style",
      type: "string",
      options: {
        list: ["home", "experience", "work"],
      },
    },
    {
      title: "Heading",
      name: "heading",
      type: "string",
    },
    {
      title: "Subheading",
      name: "subheading",
      type: "string",
    },
    {
      title: "Resume",
      name: "resume",
      type: "file",
    },
  ],
};
