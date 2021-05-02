const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const twilio = require('twilio');

app.use(bodyParser.urlencoded({ extended: true }));

const commands = [
    'ola',
    'empresa',
    'propaganda',
    'produto',
    'enviar',
    '1',
    '2',
    '3',
    'certo',
    'sim',
    'nao',
    'quero',
    'teve',
    'não teve'
];

const review = [
    'extremamente insatisfatório',
    'insatisfatório',
    'ondiferente',
    'satisfatório',
    'super satisfatório'
];

const rev = [
    'ótima',
    'boa',
    'regular',
    'ruim',
    'péssima'
]

app.post('/', (req, res) => {
    const message = req.body.Body.toLowerCase();

    const commandBody = message.slice();
    const args = commandBody.split(' ');
    text = commandBody.substr(commandBody.indexOf(' ')+1);
    const command = args.shift().toLowerCase();

    if(commands.includes(command) || review.includes(message) || rev.includes(message)) {
        const twiml = new twilio.twiml.MessagingResponse();
        twiml.message(`Você mandou o comando: *${command}*`);

        if(command === commands[0] || command == commands[11]) {
            const twiml = new twilio.twiml.MessagingResponse();
            twiml.message(`Olá! Que bom que você veio!! Meu nome é Crespah, estou aqui para ajudar mulheres com cabelo crespo a se sentirem representadas em peças publicitárias. Aqui sua opinião sobre as propagandas de produtos para cabelos, tem VOZ! O que você quer compartilhar?`);
            twiml.message(`(1) Opinião sobre propaganda web\n(2) Opinião sobre propaganda física\n(3) Opinião sobre empresas`);
            res.send(twiml.toString());
        }
        if (command == commands[5]) {
            const twiml = new twilio.twiml.MessagingResponse();
            twiml.message(`Nos envie o nome da empresa e o link da propaganda!`);
            res.send(twiml.toString());
        }
        if (command == commands[6]) {
            const twiml = new twilio.twiml.MessagingResponse();
            twiml.message(`Nos envie o nome da empresa e o nome do produto!`);
            res.send(twiml.toString());
        }
        if (command == commands[7]) {
            const twiml = new twilio.twiml.MessagingResponse();
            twiml.message(`Nos envie o nome da empresa.`);
            res.send(twiml.toString());
        }
        if (command == commands[1]) {
            const twiml = new twilio.twiml.MessagingResponse();
            let info = commandBody.split('\n');
            twiml.message(`Entendi ques estamos falando sobre a empresa *${info[0]} e a propaganda *${info[1]}*, certo?`);
            res.send(twiml.toString());
        }
        if (command == commands[2]) {
            const twiml = new twilio.twiml.MessagingResponse();
            twiml.message(`Entendi ques estamos falando sobre a propaganda *${text}, certo?`);
            res.send(twiml.toString());
        }
        if (command == commands[3]) {
            const twiml = new twilio.twiml.MessagingResponse();
            let info = commandBody.split('\n');
            twiml.message(`Entendi ques estamos falando sobre a empresa *${info[0]} e o produto *${text}, certo?`);
            res.send(twiml.toString());
        }
        if (command == commands[8]) {
            const twiml = new twilio.twiml.MessagingResponse();
            twiml.message(`Ok, computado! De maneira geral, o que você achou dessa propaganda?`);
            twiml.message(`Extremamente insatisfatório\nInsatisfatório\nIndiferente\nSatisfatório\nSuper satisfatório`);
            res.send(twiml.toString());
        }
        if (review.includes(message)) {
            const twiml = new twilio.twiml.MessagingResponse();
            twiml.message(`Você utilizou o produto em questão para os seus cabelos crespos?`);
            res.send(twiml.toString());
        }
        if (command == commands[9] || command == commands[10]) {
            const twiml = new twilio.twiml.MessagingResponse();
            twiml.message(`OK! A propaganda veiculada teve impacto na sua decisão?, Responda Teve ou Não teve`);
            res.send(twiml.toString());
        }
        if (command == commands[12] || command == commands[13]) {
            const twiml = new twilio.twiml.MessagingResponse();
            twiml.message(`Obrigada pela sua contribuiçao! Nao se esqueça de nos avaliar, ta? Além disso, a qualquer momento você pode fazer outra avaliaçao, basta digitar: "quero avaliar". Até a próxima. `);
            twiml.message(`Ótima\nBoa\nRegular\nRuim\nPéssima`);
            res.send(twiml.toString());
        }
        if (rev.includes(message)) {
            const twiml = new twilio.twiml.MessagingResponse();
            twiml.message(`Obrigada por me contatar, um abraço pra você, tchau!`);
            res.send(twiml.toString());
        }

    } else {
        const twiml = new twilio.twiml.MessagingResponse();
        twiml.message(`Eu não conheço esse comando, me desculpe. Tente novamente`);
        res.send(twiml.toString());
    }

});

app.listen(3000, function(){
    console.log('Servidor ativo na porta 3000!');
})