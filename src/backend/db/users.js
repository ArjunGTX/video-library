import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

export const users = [
  {
    _id: uuid(),
    firstName: "Guest",
    lastName: "User",
    email: "guestuser@email.com",
    password: "GuestUser@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
