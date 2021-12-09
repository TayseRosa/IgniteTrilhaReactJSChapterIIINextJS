import { NextApiRequest, NextApiResponse } from 'next';

export default(request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    {id: 1, name: 'Tayse'},
    {id: 2, name: 'Théo'},
    {id: 3, name: 'Diego'},
  ];

  return response.json(users);
}