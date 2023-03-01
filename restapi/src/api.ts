import express, { Request, Response, Router } from 'express';
import {check} from 'express-validator';
import { storeMarker } from './database/database';

const api:Router = express.Router()

export interface Marker {
    lat: number;
    lng: number;
}

api.post(
  "/markers/add",[
    check('lat').isNumeric(),
    check('lng').isNumeric(),
  ],
  async (req: Request, res: Response): Promise<Response> => {
    let latReq = req.body.lat;
    let lngReq = req.body.lng;
    let marker: Marker = {lat:latReq ,lng:lngReq}
    console.log("got here");
    storeMarker(marker);
    console.log("POST request saving marker received");
    return res.sendStatus(200);
  }
);

export default api;