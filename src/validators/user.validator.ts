import Joi from 'joi';

const userValidator = Joi.object({
    username: Joi.string().pattern(/\w{4,}/).required().messages({
        "string.pattern.base": "Дозволені тільки символи & Має бути не менше 4 символів"
    }),

    password: Joi.string().min(3).max(6).required().messages({
        "string.min": "пароль має бути щонайменше 3 символи",
        "string.max": "пароль не може бути довшим за 6 символів"
    }),

    age: Joi.string().min(1).max(117).required().messages({
        "string.min": "мінімальний вік — 1",
        "string.max": "максимальний вік — 117",
    })
})

export default userValidator;