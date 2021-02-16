import React from "react";

const Icon = () => (
  <span
    style={{ fontSize: `20px` }}
    role="presentation"
    aria-label="jigsaw puzzle icon"
  >
    🎓
  </span>
);

export default {
  title: "Education",
  name: "education",
  type: "document",
  icon: Icon,
  fieldsets: [
    {
      title: "Timeframe",
      name: "timeframe",
    },
  ],
  fields: [
    {
      title: "School",
      name: "school",
      type: "string",
    },
    {
      title: "Degree",
      name: "degree",
      type: "string",
    },
    {
      title: "Start Date",
      name: "startDate",
      type: "date",
      fieldset: "timeframe",
      options: {
        dateFormat: "MM-YYYY",
      },
    },
    {
      title: "End Date",
      name: "endDate",
      type: "date",
      fieldset: "timeframe",
      options: {
        dateFormat: "MM-YYYY",
      },
    },
  ],
};
