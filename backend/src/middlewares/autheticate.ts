import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface TokenProps {
  iat: number;
  ext: number;
  sub: string;
}

function autheticate(request: Request, response: Response, next: NextFunction) {

  const authToken = request.headers.authorization;

  if(!authToken) {
    throw new Error('JWT is required this request');
  }

  const [, token] = authToken.split(' ');

  try {
    const decryptToken = verify(token, process.env.SECRET_STRING_HASH);
    const { sub } = decryptToken as TokenProps;
    request.user = {
      id: sub
    }
    return next()
  } catch {
    throw new Error('Invalid JWT');
  }

}

export { autheticate };