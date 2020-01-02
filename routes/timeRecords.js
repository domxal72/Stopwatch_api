const express = require('express');
const router = express.Router();
const config = require('config');
const { check, validationResult } = require('express-validator/check');

const TimeRecord = require('../models/TimeRecord');

// @route     POST api/users
// @desc      Regiter a user
// @access    Public
router.post(
  '/',
  async (req, res) => {


    const { runningTime, rounds } = req.body;

    try {
      const newTimeRecord = new TimeRecord({
        totalTime: runningTime,
        rounds
      });

      const record = await newTimeRecord.save();

      // console.log(req);

      res.json(record);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }

  }
);

module.exports = router;
