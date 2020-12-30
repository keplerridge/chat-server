const express = require('express');
const ctrl = require('./controllers/messages_controller')

const app = express();
app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

app.post('/api/messages', ctrl.createMessage);
app.get('/api/messages', ctrl.readMessage);
app.put('/api/messages/:id', ctrl.updateMessage);
app.delete('/api/messges/:id', ctrl.deleteMessage)

const port = 3001;
app.listen(port, () => console.log(`Server listening on port ${port}`));