import joi from "joi";

export const loginValidation = (data: any) => {
    const schema = joi.object({
      username: joi.string(),
      password: joi.string(),
    });
    return schema.validate(data);
  };
  