import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const accessToken = req.headers.authorization?.split(' ')[1];

        if (!accessToken) {
            return res.status(400).json({ message: 'Personal data отсутствует' });
        }

        try {
            const response = await axios.get('https://dev.api.investment.imaninvest.com/v1/investor/personal-data', {
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
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
