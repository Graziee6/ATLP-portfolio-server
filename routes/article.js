const router = require("express").Router();

const Article = require("../models/Article");

const getAllArticles = async (req, res) => {
  const Article = await Article.find();
  res.send(Article);
};

const createArticle = async (req, res) => {
  const Article = new Article({
    title: req.body.title,
    content: req.body.content,
    // password: req.body.password,
  });
  await Article.save();
  res.send(Article);
};

const updateArticle = async (req, res) => {
  try {
    const Article = Article.findOne({ _id: req.params.id });
    if (req.body.title) {
      Article.title = req.body.title;
    }
    if (req.body.content) {
      Article.content = req.body.content;
    }
    await Article.save();
    res.send(Article);
  } catch {
    res.status(404);
    res.send({ error: "Article doesn't exist" });
  }
};

const getArticle = async (req, res) => {
  try {
    const Article = Article.findOne({ _id: req.params.id });
    res.send(Article);
  } catch {
    res.status(404);
    res.send({ error: "Article doesn't exist" });
  }
};

const deleteArticle = async (req, res) => {
  try {
    await Article.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "Article was not found - Couldn't delete" });
  }
};

router.route("/").get(getAllArticles).post(createArticle);
router.route("/:id").get(getArticle).patch(updateArticle).delete(deleteArticle);

module.exports = router;
