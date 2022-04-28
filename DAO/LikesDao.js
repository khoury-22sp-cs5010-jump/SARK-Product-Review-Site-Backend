import LikesModel from "../Models/LikesModel.js";
export const createLikeLdao = (uid, pid) =>
  LikesModel.create({ users: uid, product: pid });
export const removeLikeLdao = (uid, pid) =>
  LikesModel.deleteOne({ users: uid, product: pid });
export const findOneLikeLdao = (uid, pid) =>
  LikesModel.findOne({ users: uid, product: pid });
