const entityConfig = {
  name: "PictureFrame",
  collection: "picture_frames",
  fields: {
    id: { type: "Number", unique: true, required: false },
    serial: { type: "String", required: true },
    brand: { type: "String", required: true },
    model: { type: "String", required: true },
    date: { type: "String", required: true },
    price: { type: "Number", required: true },
    pice_time: { type: "Number", required: false },
    description: { type: "String", required: false },
    is_new: { type: "Boolean", required: true }
  },
  seedDataPath: "./data/initialData.json"
};

module.exports = entityConfig;
