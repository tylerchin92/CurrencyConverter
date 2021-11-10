'use strict';
import express from 'express';
import cors from 'cors'


const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());


app.get('/convert/:from/:to/:value', (req, res) => {

    const convert_from = req.params.from;
    const convert_to = req.params.to;
    const value = req.params.value;
    let conversion_ratio = 20;

    if (convert_from === 'usd') {
        if (convert_to === 'euro') {
            conversion_ratio = 0.86437
        };
        if (convert_to === 'cad') {
            conversion_ratio = 1.24511
        }
        if (convert_to === 'gbp') {
            conversion_ratio = 0.74061
        }
        if (convert_to === 'jpy') {
            conversion_ratio = 113.40
        }
    };

    if (convert_from === 'euro') {
        if (convert_to === 'usd') {
            conversion_ratio = 1.15665
        };
        if (convert_to === 'cad') {
            conversion_ratio = 1.44015
        }
        if (convert_to === 'gbp') {
            conversion_ratio = 0.85645
        }
        if (convert_to === 'jpy') {
            conversion_ratio = 131.16
        }
    };

    if (convert_from === 'cad') {
        if (convert_to === 'usd') {
            conversion_ratio = 0.80256
        };
        if (convert_to === 'euro') {
            conversion_ratio = 0.69370
        }
        if (convert_to === 'gbp') {
            conversion_ratio = 0.59438
        }
        if (convert_to === 'jpy') {
            conversion_ratio = 91.01
        }
    };

    if (convert_from === 'gbp') {
        if (convert_to === 'usd') {
            conversion_ratio = 1.34910
        };
        if (convert_to === 'euro') {
            conversion_ratio = 1.16565
        }
        if (convert_to === 'cad') {
            conversion_ratio = 1.67978
        }
        if (convert_to === 'jpy') {
            conversion_ratio = 152.99
        }
    };

    if (convert_from === 'jpy') {
        if (convert_to === 'usd') {
            conversion_ratio = 0.00882
        };
        if (convert_to === 'euro') {
            conversion_ratio = 0.00762
        }
        if (convert_to === 'cad') {
            conversion_ratio = 0.01098
        }
        if (convert_to === 'gbp') {
            conversion_ratio = 0.00653
        }
    };

    const converted_value = parseFloat(value * conversion_ratio).toFixed(2);
    res.send(converted_value);

})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
})