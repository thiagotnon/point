const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('../models');
const QRCode = require('qrcode');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('assets'))


const user = models.User;
const tracking = models.Tracking;
const product = models.Product;

//Login
app.post('/login', async (request, response) => {

  const login = await user.findOne({
    where: { name: request.body.name, password: request.body.password }
  });
  if (login === null) {
    response.send(JSON.stringify('error'));
  } else {
    response.send(login);
  }
});

//Authentication
app.post('/verifyPass', async (request, response) => {
  const userData = await user.findOne({
    where: { id: request.body.id, password: request.body.oldPassword }
  });
  if (userData === null) {
    response.send(JSON.stringify('Senha antiga não confere'));
  } else {
    if (request.body.newPassword === request.body.confirmPassword) {
      userData.password = request.body.newPassword;
      userData.save();
      response.send(JSON.stringify('Senha atualizada com sucesso!'));
    } else {
      response.send(JSON.stringify('Nova Senha e Confirmação não conferem!'));
    }
  }
});

//Create package tracking
app.post('/create', async (request, response) => {
  let trackingId = '';
  await tracking.create({
    userId: request.body.userId,
    code: request.body.code,
    local: request.body.local,
  }).then((response) => {
    trackingId += response.id;
  });

  await product.create({
    trackingId: trackingId,
    name: request.body.product,
  });
  QRCode.toDataURL(request.body.code).then(url => {
    QRCode.toFile(
      '../app/assets/img/code.png',
      request.body.code
    );
    response.send(JSON.stringify(url));
  });
});


const port = process.env.PORT || 3000;
app.listen(port, (request, response) => {
  console.log('Serve Started');
});