const formFieldsData = [
  {
    name: "name",
    label: "Name",
    placeholder: "Enter your answer",
    type: "text",
    description: null,
    isRequired: true
  },
  {
    name: "client_name",
    label: "Client Name",
    type: "text",
    placeholder: "Enter your answer",
    description: null,
    isRequired: true
  },
  {
    name: "experience",
    label: "Experience Level",
    placeholder: "Enter your answer",
    type: "dropdown",
    choices: [
      {
        label: "Beginner",
        value: "beginner"
      },
      {
        label: "Intermediate",
        value: "intermediate"
      },
      {
        label: "Expert",
        value: "expert"
      }
    ],
    description: null,
    isRequired: true
  },
  {
    name: "interview_domain",
    label: "Domain Of Interview",
    placeholder: "Enter your answer",
    type: "choices",
    choices: [
      {
        label: "Software Development",
        value: "software_development"
      },
      {
        label: "Data Science",
        value: "data_science"
      },
      {
        label: "Data Analytics",
        value: "data_analytics"
      }
    ],
    description: null,
    isRequired: true
  },
  {
    name: "queries",
    label: null,
    placeholder: "Enter your answer",
    type: "dynamic",
    fields: [
      {
        name: "question",
        label: "Question",
        type: "textarea",
        placeholder: "Enter your answer",
        description: null,
        isRequired: true
      },
      {
        name: "category",
        label: "Category",
        placeholder: "Find Items",
        type: "dropdown",
        choices: [
          {
            label: "Beginner",
            value: "beginner"
          },
          {
            label: "Intermediate",
            value: "intermediate"
          },
          {
            label: "Expert",
            value: "expert"
          }
        ],
        description: null,
        isRequired: true
      }
    ],
    description: null,
    isRequired: true
  }
];



export { formFieldsData };
