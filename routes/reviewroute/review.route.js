import { Router } from "express";
import { AddReview, getReviews, UpdateReview,getSpecificReview, DeleteReview } from "../../controllers/review/review.controller.js";
import { isAuth } from "../../middlewares/isAuth.middleware.js";

const ReviewRoute = Router();
ReviewRoute.route("/review/:id")
.post( isAuth,AddReview)
.patch(isAuth,UpdateReview)
.get(isAuth,getSpecificReview)
.delete(isAuth,DeleteReview)

ReviewRoute.route("/review")
.get(isAuth,getReviews)

export default ReviewRoute;
