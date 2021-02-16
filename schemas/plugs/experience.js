export default {
  title: "Experience",
  name: "experiences",
  type: "object",
  fields: [
    {
      title: "Label",
      name: "label",
      type: "string",
    },
    {
      title: "Experiences",
      name: "experiences",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "experience" }],
        },
      ],
    },
  ],
};
