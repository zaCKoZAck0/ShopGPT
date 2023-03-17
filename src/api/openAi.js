import { BACKEND_URL } from './util';
async function askQuery(query) {
  const res = await fetch(
    `${BACKEND_URL}/chat` +
      new URLSearchParams({
        params: { query: query },
      })
  );
  return res.message;
}

export default askQuery;
