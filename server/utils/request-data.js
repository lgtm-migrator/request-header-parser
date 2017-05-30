var getIP = (req) => {
  return req.ip;
}

var getLanguage = (req) => {
  return req.headers['accept-language'].split(",")[0];
}

var getOS = (req) => {
   return req.headers['user-agent'].split(/[()]+/)[1];
}

module.exports = {
  getIP,
  getLanguage,
  getOS
}
