// domain/.netlify/functions/hello

const items = [
  { id: 1, name: 'wolfi' },
  { id: 2, name: 'ludwig' },
];

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
