import { superbase } from "../lib/superbase";

export const authRepository = {
  async signup(name, email, password) {
    const { data, error } = await superbase.auth.signUp({
      email,
      password,
      options: { data: { name } },
    });
    if (error != null) throw new Error(error.message);
    return { ...data.user, userName: data.user.user_metadata.name };
  },

  async signin(email, password) {
    const { data, error } = await superbase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw new Error(error.message);
    return {
      ...data.user,
      userName: data.user.user_metadata.name,
    };
  },
};
