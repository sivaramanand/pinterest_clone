export const registerUser = async (req, res) => {
  try {
    res.send("hello world")
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
