import Blog from "../models/blogModel.js";

export const createblog = async (req, res) => {
  try {
    const { title, content, author, category } = req.body;
    if (!title || !content || !author || !category) {
      return res
        .status(400)
        .json({ success: false, message: "All the feilds are required" });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "blog log is required",
      });
    }

    const profileImageUrl = req.file.path;

    const blog = await Blog.create({
      title,
      content,
      author,
      category,
      image: profileImageUrl,
    });
    return res.status(201).json({ success: true, blog });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getblog = async (req, res) => {
  try {
    const blog = await Blog.find();

    if (!blog || blog.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No data in database" });
    }

    return res.status(200).json({ success: true, blog });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getblogbyid = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res
        .status(400)
        .json({ success: false, message: "Id is required" });
    }
    const blog = await Blog.findById(id);

    if (!blog) {
      return res
        .status(400)
        .json({ success: false, message: "blog not found " });
    }
    return res.status(200).json({ success: true, blog });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};
