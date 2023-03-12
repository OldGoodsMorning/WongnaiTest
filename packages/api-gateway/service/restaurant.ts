import { Request, Response } from "express";
const apiAdapter = require("api-gateway/api-adapter");
const express = require("express");
const router = express.Router();
const api = apiAdapter();

router.get("/restaurants/:id", (req: Request, res: Response) => {
  api
    .get(req.path + ".json")
    .then(function (value: any) {
      res.json(value.data);
    })
    .catch(function (error: any) {
      res.json(error.message);
    });
});

module.exports = router;