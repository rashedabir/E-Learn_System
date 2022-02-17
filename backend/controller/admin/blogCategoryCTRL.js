const BlogCategory = require("../../model/blogCategoryModel");

const blogCategoryCTRL = {
  getCategory: async (req, res) => {
    try {
      const categories = await BlogCategory.find();
      res.json({ categories });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  createCategory: async (req, res) => {
    try {
      const { name } = req.body;
      if (!name) {
        return res.status(400).json({ msg: "Invalid Category" });
      }
      const existingCategory = await BlogCategory.findOne({ name });
      if (existingCategory) {
        return res.status(400).json({ msg: "This Category Already Exists" });
      }
      const newCategory = new BlogCategory({ name });
      await newCategory.save();
      res.json({ newCategory });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  deleteCategory: async (req, res) => {
    try {
      await BlogCategory.findByIdAndDelete(req.params.blog_category_id);
      res.json({ msg: "Category Deleted" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  updateCategory: async (req, res) => {
    try {
      const { name } = req.body;
      const existingCategory = await BlogCategory.findOne({ name });
      if (existingCategory) {
        return res.status(400).json({ msg: "This Category Already Exists" });
      }
      await BlogCategory.findOneAndUpdate(
        { _id: req.params.blog_category_id },
        { name }
      );
      res.json({ msg: "Category Updated" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = blogCategoryCTRL;
