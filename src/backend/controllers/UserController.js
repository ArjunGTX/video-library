import { Response } from "miragejs";
import { requiresAuth } from "../utils/authUtils";

export const getUserInfoHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(404, {}, { errors: ["User not Found"] });
    }
    return new Response(200, {}, { user });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
