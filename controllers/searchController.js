import App from "../model/AppModel.js";

export const getAllData = async (req, res) => {
  try {
    //search
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
    //pagination
     const page = Number(req.query.page) || 1;
     const limit = 10;
     const skip = (page - 1) * limit;


    const data = await App.find(query).skip(skip).limit(limit);
    const total = await App.countDocuments(query);
    const numOfPages = Math.ceil(total / limit);

    res.status(200).json({ total, numOfPages, currentPage: page, data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
