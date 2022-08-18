export default function Request(req = {}) {
  return Object.freeze({
    url: req.url,
    baseUrl: req.baseUrl,
    originalUrl: req.originalUrl,
    path: req.path,
    method: req.method,
    params: req.params.id,
    query: req.query,
    queryParams: req.query,
    body: req.body,
  });
}
