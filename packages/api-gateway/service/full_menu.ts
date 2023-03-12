import { Request, Response } from "express";

const express = require("express");
const router = express.Router();
const apiAdapter = require("api-gateway/api-adapter");
const api = apiAdapter();

router.get(
  "/restaurants/:restaurantId/menus/:menuName/full.json",
  (req: Request, res: Response) => {
    api.get(req.path).then(function (item: any) {
      res.json(item.data);
    });
  }
);

module.exports = router;