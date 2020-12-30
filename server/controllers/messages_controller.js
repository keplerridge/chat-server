let messages = [];
let id = 0;

module.exports = {
    createMessage: (req, res) => {
        const {text, time} = req.body

        let message = {
            id: id,
            text: text,
            time: time
        }

        messages.push(message);
        id++

        res.status(200).send(messages);
    },
    readMessage: (req, res) => {
        res.status(200).send(messages);
    },
    updateMessage: (req, res) => {
        const {id} = req.params
        const {text} = req.body

        let editMessageIndex = messages.findIndex(el => el.id === +id);
        let editMessage = messages[editMessageIndex]

        messages[editMessageIndex] = {
            id: editMessage.id,
            text: text || editMessage.text,
            time: editMessage.time
        }

        res.status(200).send(messages)
    },
    deleteMessage: (req, res) => {
        const {id} = req.params
        const messageIndex = messages.findIndex(el => el.id === +id);

        messages.splice(messageIndex, 1)

        res.status(200).send(messages);
    }
}