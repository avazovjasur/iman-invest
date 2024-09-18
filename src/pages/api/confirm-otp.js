import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { code, otp_guid } = req.body;

        try {
            const response = await axios.post('https://dev.api.investment.imaninvest.com/v1/investor/confirm-otp', {
                code,
                otp_guid
            }, {
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            return res.status(200).json(response.data);
        } catch (error) {
            console.error('Ошибка при подтверждении OTP:', error);
            return res.status(500).json({ message: 'Ошибка сервера', error: error.message });
        }
    } else {
        res.status(405).json({ message: 'Метод не разрешён' });
    }
}
