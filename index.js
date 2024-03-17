const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    try {
        const today = new Date().getDay();
        let advice = '';

        switch (today) {
            case 0:
                advice = 'Söndagar är bra för avkoppling och laddning inför veckan.';
                break;
            case 1:
                advice = 'Måndagar är bra för att sätta upp mål för veckan och börja nytt.';
                break;
            case 2:
                advice = 'Tisdagar är perfekta för att komma igång med arbetsveckan.';
                break;
            case 3:
                advice = 'Onsdagar är mittveckans energiuppladdning, håll dig motiverad!';
                break;
            case 4:
                advice = 'Torsdagar är bra för att reflektera över veckan hittills och justera om det behövs.';
                break;
            case 5:
                advice = 'Fredagar är här! Ta det lite lugnt och njut av helgen snart.';
                break;
            case 6:
                advice = 'Lördagar är perfekta för att göra något roligt och koppla av!';
                break;
            default:
                advice = 'Oj, något verkar vara fel med din kalender!';
        }

        res.render('index', { advice });
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong!');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});