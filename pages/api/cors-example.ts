import type { NextApiRequest, NextApiResponse } from 'next'

 export default function handler(req: NextApiRequest, res: NextApiResponse) {
   res.setHeader('Access-Control-Allow-Origin', '*')
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')

   if (req.method === 'OPTIONS') {
     res.status(200).end()
     return
   }

   // Your API logic here
   res.status(200).json({ message: 'Hello from the API!' })
 }