"use strict";

interface AuthResponse {
  data: {
    accessToken: string;
    user: {
      firstName: string;
      lastName: string;
      password: string;
      phone: string;
      userId: string;
      email: string;
    };
  };
  message: string;
  status: string;
}

interface AuthLoginBody {
  email: string;
  password: string;
}

interface User {
  firstName: string;
  lastName: string;
  password: string;
  phone: string;
  email: string;
}

export const authLoginPOST = function (
  body: AuthLoginBody
): Promise<AuthResponse | void> {
  return new Promise((resolve, reject) => {
    const examples: { [key: string]: AuthResponse } = {};
    examples["application/json"] = {
      data: {
        accessToken: "accessToken",
        user: {
          firstName: "firstName",
          lastName: "lastName",
          password: "password",
          phone: "phone",
          userId: "userId",
          email: "email",
        },
      },
      message: "message",
      status: "status",
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

export const authRegisterPOST = function (
  body: User
): Promise<AuthResponse | void> {
  return new Promise((resolve, reject) => {
    const examples: { [key: string]: AuthResponse } = {};
    examples["application/json"] = {
      data: {
        accessToken: "accessToken",
        user: {
          firstName: "firstName",
          lastName: "lastName",
          password: "password",
          phone: "phone",
          userId: "userId",
          email: "email",
        },
      },
      message: "message",
      status: "status",
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};
