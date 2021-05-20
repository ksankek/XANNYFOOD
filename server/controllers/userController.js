const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const { User, Basket } = require("../models/models");
const jwt = require("jsonwebtoken");

const generateJwt = (id, email, role) => {
  return jwt.sign(
    {
      id: id,
      email,
      role,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "24h",
    }
  );
};

class UserController {
  async registration(req, res) {
    const { email, password, role } = req.body;
    if (!email || !password) {
      const apiError = new ApiError(400, "Incorrect login or password.");
      return res.status(apiError.status).json(apiError);
    }

    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      const apiError = new ApiError(
        400,
        "A user with this login already exists."
      );
      return res.status(apiError.status).json(apiError);
    }

    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email, role, password: hashPassword });
    const basket = await Basket.create({ userId: user.id });
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
  }

  async login(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      const apiError = new ApiError(400, "User not found.");
      return res.status(apiError.status).json(apiError);
    }

    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      const apiError = new ApiError(400, "Invalid password.");
      return res.status(apiError.status).json(apiError);
    }
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
  }

  async check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role);
    return res.json({ token });
  }
}

module.exports = new UserController();
