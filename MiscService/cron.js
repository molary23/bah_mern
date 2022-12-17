// Delete Trash

/*if (isEmpty(req.body.id) || isEmpty(req.body.imageName)) {
  return res.sendStatus(400);
}
const { id, imageName } = req.body;

const filePath = path.join(dirPath, imageName);
try {
  fs.unlinkSync(filePath);

  const deleteProduct = await Product.destroy({
    where: {
      id,
    },
  });

  if (deleteProduct) {
    return res.sendStatus(204);
  }
} catch (err) {
  error.delete = "No Product found";
  res.status(400).json(error);
}
*/
