import mongoose from "mongoose";
import User from "../models/user.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getData1 = async (req, res) => {
  try {
    const users = await User.find({
      car: { $in: ["BMW", "Mercedes-Benz"] },
    });
    const filteredUsers = users.filter(
      (user) => parseFloat(user.income.substring(1)) <= 5
    );
    res.status(200).json(filteredUsers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getData2 = async (req, res) => {
  try {
    const users = await User.find({
      gender: "Male",
    });
    const filterdUsers = users.filter(
      (user) => parseInt(user.phone_price) >= 10000
    );
    res.status(200).json(filterdUsers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getData3 = async (req, res) => {
  try {
    const users = await User.find({
      last_name: /^M/,
      $expr: { $gt: [{ $strLenCP: "$quote" }, 15] },
    });
    const filterdUsers = users.filter((user) =>
      user.email.toLowerCase().includes(user.last_name.toLowerCase())
    );
    res.status(200).json(filterdUsers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getData4 = async (req, res) => {
  try {
    const users = await User.find({
      car: { $in: ["BMW", "Mercedes-Benz", "Audi"] },
      email: { $not: /\d/ },
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getData5 = async (req, res) => {
  try {
    const cities = await User.aggregate([
      {
        $group: {
          _id: "$city",
          num_users: { $sum: 1 },
          users: {
            $push: {
              id: "$id",
              first_name: "$first_name",
              last_name: "$last_name",
              email: "$email",
              gender: "$gender",
              income: "$income",
              car: "$car",
              quote: "$quote",
              phone_price: "$phone_price",
            },
          },
        },
      },
      {
        $sort: { num_users: -1 },
      },
      {
        $limit: 10,
      },
    ]);

    const filteredCities = cities.map((city) => {
      let avg_inc = 0;
      city.users.map(
        (user) => (avg_inc = avg_inc + parseFloat(user.income.substring(1)))
      );
      avg_inc = avg_inc / city.num_users;
      city = { ...city, avg_inc: avg_inc.toFixed(2) };
      return city;
    });
    res.status(200).json(filteredCities);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
