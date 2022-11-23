const data = {
  users: ["ade", "ola", "mo"],
};

const getAllUsers = (req, res) => {
  res.status(200).json(data.users);
};

const getUser = (req, res) => {
  const id = parseInt(req.params.id);
  const user = data.users.find((u) => data.users.indexOf(u) === id);
  const output = user !== undefined ? user : "No users found";

  res.status(200).json(output);
};

module.exports = { getAllUsers, getUser };
