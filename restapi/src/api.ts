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
    storeMarker(marker);
    return res.sendStatus(200);
  }
);

api.post("/login",
    [check('username').isLength({min: 1}),
    check('password').isLength({min: 1})],
  async (req: Request, res: Response) => {
    // ----- TO-DO -----
});

api.post("/signup",
    [check('username').isLength({min: 1}),
    check('email').isEmail().normalizeEmail(),
    check('password').isLength({min: 1})],
  async (req: Request, res: Response) => {
    // ----- TO-DO -----
});

export default api;
