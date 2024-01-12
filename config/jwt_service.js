const jwt = require('jsonwebtoken');

class JwtService {
  constructor(secretKey) {
    this.secretKey = secretKey;
  }

  generateToken(payload, expiresIn = '1h') {
    return jwt.sign(payload, this.secretKey, { expiresIn });
  }

  verifyToken(token) {
    try {
      return jwt.verify(token, this.secretKey);
    } catch (error) {
      return error;
    }
  }
}

module.exports = JwtService;
