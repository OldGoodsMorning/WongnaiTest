import { Request, Response, NextFunction } from "express";
require("dotenv").config();

const express = require("express");
const router = express.Router();



const restaurant = require("api-gateway/service/restaurant");
const full_menu = require("api-gateway/service/full_menu")
const short_menu = require("api-gateway/service/short_menu")

router.use((req: Request, res: Response, next: NextFunction) => {
    next();
});

router.use(restaurant)
router.use(full_menu)
router.use(short_menu)


module.exports = router;