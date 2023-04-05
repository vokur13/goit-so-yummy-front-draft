const { Schema, model } = require('mongoose');
const Joi = require('joi');

const { handleMongooseError } = require('../helpers');
const {getCategoriesList} = require('../controllers/recipes/getCategoriesList')

const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,

      enum: getCategoriesList,
      required: true

    },
    area: {
      type: String,
      required: true,
    },
    instructions: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumb: {
      type: String,
      required: true,
    },
    preview: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    popularity: {
      type: Number,
      required: true,
    },
    favorites: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
    likes: {
      type: Array,
    },
    youtube: {
      type: String,
    },
    tags: {
      type: [String],
    },
    ingredients: {
      type: [Schema.Types.ObjectId],
      required: true,
      ref: 'ingredient',
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  { versionKey: false, timestamps: true }
);

const addSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  category: Joi.string().required(),
  time: Joi.string().required(),
  // ingredients: Joi.objectId().required(),
  ingredients: Joi.array().required(),
  instructions: Joi.string().required(),
});

const schemas = {
  addSchema,
};

recipeSchema.post('save', handleMongooseError);

const Recipe = model('recipe', recipeSchema);

module.exports = {
  Recipe,
  schemas,
};
