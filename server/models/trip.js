'use strict';

import mongoose from 'mongoose';

const tripSchema = new mongoose.Schema({
  airBnB: {
    bnbId: Number,
    bedrooms: Number,
    name: String,
    pictureUrl: String,
    address: String,
    owner: String
  },
  location: { type: String, required: true },
  plan: { type: String, required: true, max: 450 }
}, { timestamps: true });

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
