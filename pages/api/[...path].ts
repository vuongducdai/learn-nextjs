// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy from 'http-proxy'

type Data = {
  name: string
}

// Step 4: in case of you want to stream body, turn off bodyParser
// bodyParser is automatically enabled. If you want to consume the body
// as a Stream or with raw-body, you can set this to false.
export const config = {
  api: {
    bodyParser: false,
  },
}

//Step 1: Create Proxy Server
const proxy = httpProxy.createProxyServer()

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  return new Promise((resolve) => {
    // Step 2: remove cookie from header
    // don't send cookies to API server
    req.headers.cookie = ''

    // Step 3: send request to proxy
    // /api/students
    // https://js-post-api.herokuapp.com/api/students
    proxy.web(req, res, {
      target: 'https://js-post-api.herokuapp.com/',
      // both has the same path api/students so just need to edit origin
      changeOrigin: true,
      // proxy will handle the response, send directly to client
      // so we don't need res.status(200).json({ name: 'Math all post here' })
      selfHandleResponse: false,
    })

    //res.status(200).json({ name: 'Math all post here' })

    proxy.once('proxyRes', () => {
      resolve(true)
    })
  })
}
