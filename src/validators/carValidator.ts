import * as Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string()
        .pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$'))
        .required()
        .messages({'string.pattern.base': 'Your brand value didnt match pattern'}),
    price: Joi.number()
        .integer()
        .min(0)
        .max(1000000)
        .required()
        .messages({
            "number.min": "min price is 0",
            "number.max": "max price is 1 000 000",
    }),
    year: Joi.number()
        .integer()
        .min(1990)
        .max(2026)
        .required()
        .messages({
            "number.min": "min year is 1990",
            "number.max": "max year is 2026",
    }),
})
