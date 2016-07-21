'use strict';

import mongoose from 'mongoose';

const tripSchema = new mongoose.Schema({
  airBnB: [{
    bnbId: Number,
    bedrooms: Number,
    name: String,
    pictureUrl: String,
    address: String,
    owner: String
  }],
  expertise: [{ type: String }],
  location: { type: String, required: true },
  plan: { type: String, required: true }
}, { timestamps: true });

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
