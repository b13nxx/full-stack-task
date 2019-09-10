const express = require('express')
const router = express.Router()
const axios = require('axios')
const Query = require('../model/Query')

/* GET places listing. */
router.get('/:latitude/:longitude/:radius', (req, res, next) => {
  let document = {
    latitude: parseFloat(req.params.latitude),
    longitude: parseFloat(req.params.longitude),
    radius: parseInt(req.params.radius)
  }

  Query.findOne(document).then(result => {
    if (result) {
      res.json(result.places)
    } else {
      const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json' +
        '?location=' + req.params.latitude + ',' + req.params.longitude +
        '&radius=' + req.params.radius + '&key=AIzaSyCVoWBGZECfDAyUdcqIOnA6z2DIF_HR1G4'

      axios.get(url).then(response => {
        if ('error_message' in response.data) {
          throw Error(response.data.error_message)
        } else {
          document.places = response.data.results
          new Query(document).save().then(() => {
            res.json(response.data.results)
          }).catch(next)
        }
      }).catch(next)
    }
  }).catch(next)
})

module.exports = router
