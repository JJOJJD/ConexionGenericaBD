const entityConfig = {
  name: "Student",
  collection: "students",
  fields: {
    id: { type: "Number", unique: true, required: false },
    name: { type: "String", required: true },
    email: { type: "String", required: false },
    course: { type: "String", required: false },
    age: { type: "Number", required: false },
    grade: { type: "Number", required: true },
    nota: { type: "Number", required: false },
    passed: { type: "Boolean", required: false },
    average: { type: "Number", required: false }
  },
  seedDataPath: "./data/initialData.json"
};

module.exports = entityConfig;
