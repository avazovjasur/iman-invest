import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { refreshToken } = req.body;

        if (!refreshToken) {
            return res.status(400).json({ message: 'RefreshToken отсутствует' });
        }

        try {
            const response = await axios.post('https://dev.api.investment.imaninvest.com/v1/investor/refresh-token', {
                refresh_token: refreshToken,
            }, {
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            res.status(200).json(response.data);
        } catch (error) {
            console.error('Ошибка при обновлении токенов:', error);
            res.status(error.response.status).json({ message: 'Ошибка сервера', error: error.message });
        }
    } else {
        res.status(405).json({ message: 'Метод не разрешён' });
    }
}
