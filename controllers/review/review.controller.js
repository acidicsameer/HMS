import Review from "../../models/Review.model.js";
import Room from "../../models/room.model.js";

export const AddReview = async (req, res) => {
  const id = req.params.id;
  const { reviewmessage, rating, images } = req.body;

  if (!reviewmessage || !rating || !images) {
    return res.json({
      message: "provide required fields",
    });
  }
  const room = await Room.findOne({ _id: id });
  const user = req.user.id
console.log(user)
  if (!room) {
    return res.json({
      message: "No rooms on provided id ",
    });
  }
  const data = await Review.create({
    user,
    room: id,
    reviewmessage,
    rating,
    images,
  });
  if (!data) {
    return res.json({
      message: "no data found ",
    });
  }
  res.status(201).json({
    message: "successfully added a review ",
    data,
  });
};
export const UpdateReview = async (req, res) => {
  const id = req.params.id;
  const { reviewmessage, rating, images } = req.body;

  const review = await Review.findOne({ _id: id });
  const user = req.user.id

  if (!review) {
    return res.json({
      message: "No rooms on provided id ",
    });
  }
  const data = await Review.findByIdAndUpdate({ _id: id },{
    user,
    room: id,
    reviewmessage,
    rating,
    images,
  },
 { new: true, runValidators: true }
);
  if (!data) {
    return res.json({
      message: "no data found ",
    });
  }
  res.status(201).json({
    message: "successfully updated a review ",
    data,
  });
};
export const getReviews = async (req, res) => {
  const data = await Review.find({});
  if (data.length == 0) {
    res.status(500).json({
      message: "no reviews found ",
    });
  }
  res.status(200).json({
    message: "Reviews fetched successfully ",
    data,
  });
};
export const getSpecificReview = async (req, res) => {
  const id = req.params.id;

  const data = await Review.findOne({ _id: id });
  console.log(data);
  if (!data) {
    return res.status(500).json({
      message: "no Review found ",
    });
  }
  res.status(200).json({
    message: "Review fetched successfully ",
    data,
  });
};
export const DeleteReview = async (req, res) => {
  const id = req.params.id;

  const data = await Review.findByIdAndDelete({ _id: id });
  console.log(data);
  if (!data) {
    return res.status(500).json({
      message: "no Review found on provided id ",
    });
  }
  res.status(200).json({
    message: "Review removed successfully ",
    data: null,
  });
};
