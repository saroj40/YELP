export function getAll(res = {}) {
  return Object.freeze({
    status: 200,
    results: res.rowCount,
    success: true,
    message: "successfully featched !!",
    data: res.rows,
  });
}

export function getOne(res = {}) {
  return Object.freeze({
    status: 200,
    results: res.rowCount,
    success: true,
    message: "successfully featched !!",
    data: res.rows[0],
  });
}

export function error(res = {}) {
  return Object.freeze({
    status: 406,
    success: true,
    error: res.message,
  });
}

export function notfound(res = {}) {
  return Object.freeze({
    status: 404,
    success: true,
    error: res.message,
  });
}

export function created(res = {}) {
  return Object.freeze({
    status: 201,
    success: true,
    results: res.rowCount,
    message: "successfully created !!",
    data: res.rows[0],
  });
}

export function updated(res = {}) {
  return Object.freeze({
    status: 202,
    success: true,
    results: res.rowCount,
    message: "successfully Updated !!",
    data: res.rows[0],
  });
}
export function deleted(res = {}) {
  return Object.freeze({
    status: 204,
    results: res.rowCount,
    success: true,
    message: "successfully Deleted !!",
    data: res.rows,
  });
}
