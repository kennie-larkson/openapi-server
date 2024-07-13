"use strict";

import { Request, Response, NextFunction } from "express";
import * as utils from "../utils";
import * as Default from "../service";

export const authLoginPOST = function (
  req: Request,
  res: Response,
  next: NextFunction,
  body: any
) {
  Default.authLoginPOST(body)
    .then((response: any) => {
      utils.writeJson(res, response);
    })
    .catch((response: any) => {
      utils.writeJson(res, response);
    });
};

export const authRegisterPOST = function (
  req: Request,
  res: Response,
  next: NextFunction,
  body: any
) {
  Default.authRegisterPOST(body)
    .then((response: any) => {
      utils.writeJson(res, response);
    })
    .catch((response: any) => {
      utils.writeJson(res, response);
    });
};
