export default function createFetch() {
  return Object.freeze({
    makeFetch,
  });

  async function makeFetch({ params, method, path }) {
    try {
      const results = await fetch(path, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method,
        body: JSON.stringify(params),
      });
      return results;
    } catch (err) {
      throw err;
    }
  }
}
