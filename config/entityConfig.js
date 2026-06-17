const entityConfig = {
  name: "SoccerPlayer",
  collection: "soccerplayers",
  fields: {
    id: { type: "Number", unique: true, required: false },
    name: { type: "String", required: true },
    team: { type: "String", required: false },
    position: { type: "String", required: false },
    nationality: { type: "String", required: false },
    year: { type: "Number", required: true },
    goals: { type: "Number", required: true },
    año: { type: "Number", required: false },
    goles: { type: "Number", required: false }
  },
  seedDataPath: "./data/initialData.json"
};

module.exports = entityConfig;
