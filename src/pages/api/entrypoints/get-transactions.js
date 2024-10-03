import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const accessToken = req.headers.authorization?.split(' ')[1];

        if (!accessToken) {
            return res.status(400).json({ message: 'AccessToken отсутствует' });
        }

        try {
            const response = await axios.get(`https://api.investment.imaninvest.com/v1/investments/${req.query.investmentId}/transactions`, {
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Otp-Secret': 'SU1BTl9JTlZFU1Q6OGRhYTY3ZGMtYjdlZi00NjAwLThmOWMtNzRhODAxZTQ5NDcy',
                    'Authorization': `Bearer ${accessToken}`
                }
            })

            res.status(200).json(response.data);
        } catch (error) {
            console.error('Ошибка при получении:', error);

            if (error.response && error.response.status === 403) {
                return res.status(403).json({ message: 'Доступ запрещен', error: error.message });
            }

            res.status(error.response.status).json({ message: 'Ошибка сервера', error: error.message });
        }
    } else {
        res.status(405).json({ message: 'Метод не разрешён' });
    }
}
