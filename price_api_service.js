const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.get("/products/:product", (req, res) => {
  const productId = req.params.product;
  const db = router.db;
  const product = db.get("products").find({ id: productId }).value();
  
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

server.use(router);

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Price API is running at http://localhost:${PORT}/`);
});
