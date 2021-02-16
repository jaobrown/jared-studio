import React from "react";

const Icon = () => (
  <span
    style={{ fontSize: `20px` }}
    role="presentation"
    aria-label="jigsaw puzzle icon"
  >
    👩‍💻
  </span>
);

export default {
  title: "Experience",
  name: "experience",
  type: "document",
  icon: Icon,
  fieldsets: [
    {
      title: "Company Information",
      name: "companyInformation",
    },
    {
      title: "Role Information",
      name: "roleInformation",
    },
  ],
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      fieldset: "companyInformation",
    },
    {
      title: "Website",
      name: "website",
      type: "url",
      fieldset: "companyInformation",
    },
    {
      title: "Position",
      name: "position",
      type: "string",
      fieldset: "roleInformation",
    },
    {
      title: "Description",
      name: "description",
      type: "array",
      of: [{ type: "block" }],
      fieldset: "roleInformation",
    },
    {
      title: "Start Date",
      name: "startDate",
      type: "date",
      fieldset: "roleInformation",
      options: {
        dateFormat: "MM-YYYY",
      },
    },
    {
      title: "End Date",
      name: "endDate",
      type: "date",
      fieldset: "roleInformation",
      options: {
        dateFormat: "MM-YYYY",
      },
    },
  ],
};
