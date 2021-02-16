export default {
  title: "Educations",
  name: "educations",
  type: "object",
  fields: [
    {
      title: "Label",
      name: "label",
      type: "string",
    },
    {
      title: "Educations",
      name: "educations",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "education" }],
        },
      ],
    },
  ],
};
