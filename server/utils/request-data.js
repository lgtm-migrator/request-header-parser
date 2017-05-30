var getIP = (req) => {
  var ip = req.headers['x-forwarded-for'] ||
           req.connection.remoteAddress ||
           req.socket.remoteAddress ||
           req.connection.socket.remoteAddress;
  return ip;
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
