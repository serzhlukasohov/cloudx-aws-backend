export const handler = (lambda) => async (event, context) => {
  let json, statusCode;

  try {
    const result = await lambda(event, context);
    statusCode = result.statusCode || 200;
    json = result.json;
  } catch (err) {
    json = { err: err.message };
    statusCode = e.statusCode || 500;
  }

  return {
    statusCode,
    body: JSON.stringify(json),
    headers: { 'Access-Control-Allow-Origin': '*' },
  };
};
