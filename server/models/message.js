'use strict';

import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: { type: String, required: true, max: 450 },
  new: { type: Boolean, default: true, required: true }
}, { timestamps: true });

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
