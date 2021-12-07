import { NextApiRequest, NextApiResponse } from 'next';

export default ( request: NextApiRequest, response: NextApiResponse ) => {
  const users = [
    { id: 1, name: 'Tayse Rosa' },
    { id: 2, name: 'Théo Leite' },
    { id: 3, name: 'Diego Leite' },
    { id: 4, name: 'Pipiko' },
    { id: 5, name: ' Maicola' },
  ]

  return response.json(users)
}

// 