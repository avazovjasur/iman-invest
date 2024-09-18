import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { phone_number, email, auth_type } = req.body;

        try {
            const response = await axios.post('https://dev.api.investment.imaninvest.com/v1/investor/send-otp', {
                phone_number,
                email,
                auth_type
            }, {
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Otp-Secret': 'SU1BTl9JTlZFU1Q6OGRhYTY3ZGMtYjdlZi00NjAwLThmOWMtNzRhODAxZTQ5NDcy'
                }
            });

            res.status(200).json(response.data);
        } catch (error) {
            console.error('Ошибка при отправке OTP:', error);
            res.status(500).json({ message: 'Ошибка сервера', error: error.message });
        }
    } else {
        res.status(405).json({ message: 'Метод не разрешён' });
    }
}
