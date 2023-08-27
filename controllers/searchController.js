import App from "../model/AppModel.js";

export const getAllData = async (req, res) => {
  try {
    const { search } = req.query;
    let query = {};
    if (search) {
      query = {
        $or: [
          { title: { $regex: search, $options: "i" } },
          { description: { $regex: search, $options: "i" } },
          { price: parseFloat(search) || 0 },
        ],
      };
    }
    const data = await App.find(query);
    const total = await App.countDocuments(query);
    res.status(200).json({ total, data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
