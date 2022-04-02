const Users = require("../models/userModel");
const Events = require("../models/eventModel.js");

//Create Product
exports.createUser = async (req, res, next) => {
  const user = await Users.create(req.body);
  res.status(201).json({ status: true, user });
};

exports.getAllUsers = async (req, res) => {
  const users = await Users.find();
  res.status(200).json({ status: true, users });
};
exports.createEvent = async (req, res, next) => {
  const events = await Events.create(req.body);
  res.status(201).json({ success: true, events });
};
exports.getAllEvents = async (req, res) => {
  const events = await Events.find();
  res.status(200).json({ status: true, events });
};

// Update Event

exports.updateEvent = async (req, res, next) => {
  let event = await Events.findById(req.params.id);
  if (!event) {
    return res.status(500).json({
      succes: false,
      message: "Event not found",
    });
  }
  event = await Events.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    event,
  });
};

// Delete Event
exports.deleteEvent = async (req, res, next) => {
  const event = await Events.findById(req.params.id);

  if (!event) {
    return res.status(500).json({
      succes: false,
      message: "Event not found",
    });
  }
  await event.remove();
  res.status(200).json({
    success: true,
    message: "Product Deleted",
  });
};

exports.listEvent = async (req, res, next) => {
  const userId = req.params.id;
  const user = await User.findById(userId);
  if (!user)
    return res
      .status(401)
      .json({ status: "failed", message: "User does not exist" });
  let events = [];
  for (var i = 0; i < user.events.length; i++) {
    var event_ = await Event.findById(user.events[i]._id);
    events[i] = event_;
  }
  res.status(200).json({
    status: "success",
    events,
    message: `Events successfully fetched`,
  });
};
