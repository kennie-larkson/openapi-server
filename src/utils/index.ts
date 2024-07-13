class ResponsePayload {
  code: number;
  payload: any;

  constructor(code: number, payload: any) {
    this.code = code;
    this.payload = payload;
  }
}

export function respondWithCode(code: number, payload: any): ResponsePayload {
  return new ResponsePayload(code, payload);
}

export function writeJson(response: any, arg1: any, arg2?: number): void {
  let code: number | undefined;
  let payload: any;

  if (arg1 && arg1 instanceof ResponsePayload) {
    writeJson(response, arg1.payload, arg1.code);
    return;
  }

  if (arg2 !== undefined && Number.isInteger(arg2)) {
    code = arg2;
  } else {
    if (arg1 !== undefined && Number.isInteger(arg1)) {
      code = arg1;
    }
  }
  if (code !== undefined && arg1 !== undefined) {
    payload = arg1;
  } else if (arg1 !== undefined) {
    payload = arg1;
  }

  if (!code) {
    // if no response code given, we default to 200
    code = 200;
  }
  if (typeof payload === "object") {
    payload = JSON.stringify(payload, null, 2);
  }
  response.writeHead(code, { "Content-Type": "application/json" });
  response.end(payload);
}
