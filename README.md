# Next.js 15: `node-fetch` Client-Side Error

This repository demonstrates a common error in Next.js 15 applications when using `node-fetch` for client-side API calls.  The issue arises from attempting to use the `node-fetch` library directly in a page component without proper consideration for the execution environment. The `fetch` API, available natively in browsers, is not the same as `node-fetch`, which is intended for Node.js environments.

## Steps to Reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`. You should see an error message.

## Solution
This is caused by using `node-fetch` in client-side code.  A better solution would be to use the browser's native `fetch` API or another isomorphic fetch library designed for both client and server environments.