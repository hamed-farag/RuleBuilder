// rules data from API
const workflow = {
  name: "workflow 1",
  rules: [
    {
      entity: "cpt",
      property: "code",
      operator: "equal",
      value: "666",
    },
    // {
    //   entity: "patient",
    //   property: "gender",
    //   operator: "greatOrEqual",
    //   value: "male",
    // },
    // {
    //   entity: "patient",
    //   property: "age",
    //   operator: "greatOrEqual",
    //   value: "50",
    // },
  ],
};
///////////////////////////////////
// lookups API
const constants = {
  entity: {
    values: [
      { key: "condition", value: "condition" },
      { key: "plan", value: "plan" },
      { key: "patient", value: "patient" },
      { key: "provider", value: "provider" },
    ],
  },
  properties: [
    {
      entity: "condition",
      type: "select",
      values: [
        { key: "primary", value: "primary" },
        { key: "secondary", value: "secondary" },
      ],
    },
    {
      entity: "plan",
      type: "select",
      values: [
        { key: "procedures", value: "procedures" },
        { key: "labs", value: "labs" },
        { key: "radiology", value: "radiology" },
        { key: "drugs", value: "drugs" },
      ],
    },
    {
      entity: "patient",
      type: "select",
      values: [
        { key: "gender", value: "gender" },
        { key: "age", value: "age" },
      ],
    },
    {
      entity: "provider",
      type: "select",
      values: [
        { key: "speciality", value: "speciality" },
      ],
    }
  ],
  operator: {
    type: "select",
    values: [
      { key: "equal", value: "equal" },
      { key: "great or equal", value: "greatOrEqual" },
    ],
  },
  values: [
    { property: "code", type: "text", value: "" },
    {
      property: "gender",
      type: "select",
      values: [
        { key: "male", value: "male" },
        { key: "female", value: "female" },
      ],
    },
    {
      property: "speciality",
      type: "select",
      values: [
        { key: "ENT", value: "ENT" },
        { key: "Oby", value: "Oby" },
      ],
    },
    { property: "age", type: "text", value: "" },
  ],
};

export { workflow, constants };
