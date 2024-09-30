import { superbase } from "../lib/superbase";

export const postRepositry = {
  async create(content, userId) {
    const { data, error } = await superbase
      .from("posts")
      .insert([{ content, user_id: userId }])
      .select();
    if (error != null) throw new Error(error.message);
    return data[0];
  },
};
