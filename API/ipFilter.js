module.exports = (req, res) => {
  const allowedIPs = ['x.x.x.x', 'y.y.y.y']; // Coloque os endereços IP permitidos aqui

  const clientIP = req.headers['x-real-ip'] || req.socket.remoteAddress;

  if (allowedIPs.includes(clientIP)) {
    res.status(200).send('Acesso permitido');
  } else {
    res.status(403).send('Acesso negado');
  }
};