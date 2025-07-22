import mongoose from "mongoose";
import User from "../schemas/usersSchema.js";

class usersRepository {
  async create(user) {
    return await User.create(user);
  }

  async getAll() {
    return await User.find();
  }

  async getSections(filter) {
    const userFiltered = await User.findOne(filter);
    return userFiltered.Usecciones;
  }

  async addSection(email, section) {
  return await User.findOneAndUpdate(
    { email },
    { $push: { Usecciones: section } },
    { new: true }
  );
  }

  async deleteSection(email, section) {
    return await User.findOneAndUpdate(
    { email },
    { $pull: { Usecciones: section } },
    { new: true }
  );
  }

  async getOneById(id) {
    return await User.findById(id);
  }

  async getOne(filter) {
    return await User.findOne(filter);
  }

  async delete(id) {
    return await User.findOneAndDelete({
      _id: new mongoose.Types.ObjectId(id),
    });
  }

  async update(id, user) {
    return await User.findOneAndUpdate(
      {
        _id: new mongoose.Types.ObjectId(id),
      },
      user,
      { new: true }
    );
  }
}

export default new usersRepository();