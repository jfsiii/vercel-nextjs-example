import { VercelRequest, VercelResponse } from '@vercel/node';
import { request } from 'undici';

export default async function (req: VercelRequest, res: VercelResponse) {
  const usersRes = await request('https://jsonplaceholder.typicode.com/users');
  const users = await usersRes.body.json();

  return res.json(users);
}
