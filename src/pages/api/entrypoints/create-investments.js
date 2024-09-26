import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const accessToken = req.headers.authorization?.split(' ')[1];

        if (!accessToken) {
            return res.status(400).json({ message: 'AccessToken отсутствует' });
        }

        console.log('accesstoken123', accessToken);

        const {
            amount,
            goal_icon_id,
            goal_title,
            initial_amount,
            investor_status,
            is_resident,
            strategy_id,
            tariff_id,
            term
        } = req.body;
  
        const data = {
            amount,
            goal_icon_id,
            goal_title,
            initial_amount,
            investor_status,
            is_resident,
            strategy_id,
            tariff_id,
            term
        }

        const headers = {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        }

        console.log('helloworld123', data);
        console.log('helloworld321', headers);

        try {
            const response = await axios.post('https://dev.api.investment.imaninvest.com/v1/investments', data, headers);

            res.status(201).json(response.data);
        } catch (error) {
            console.error('Ошибка при создании инвестиций:', error);

            if (error.response && error.response.status === 403) {
                return res.status(403).json({ message: 'Доступ запрещен', error: error.message });
            }

            res.status(error.response.status).json({ message: 'Ошибка сервера', error: error.message });
        }
    } else {
        res.status(405).json({ message: 'Метод не разрешён' });
    }
}
