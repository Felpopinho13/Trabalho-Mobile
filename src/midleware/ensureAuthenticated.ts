import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
interface IPayload {   sub: string; }
export function ensureAuthenticated(  request: Request,  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;
  if (!authToken) {
    return response.status(401).end();   }
  const [, token] = authToken.split(" ");
   try {
    // Validar se token é válido
    const { sub } = verify(
      token,
      "123456"
    ) as IPayload;   
    //request.user_id = sub;
    return next();
  } catch (err) {
    return response.status(401).end();
  }
}