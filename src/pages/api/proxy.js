export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Метод не разрешен' });
    }
  
    try {
      const amoResponse = await fetch(`${process.env.NEXT_PUBLIC_AMOCRM_BASE_URL}/api/v4/leads`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_AMOCRM_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body),
      });
  
      const data = await amoResponse.json();
      if (!amoResponse.ok) {
        throw new Error(`Ошибка HTTP: ${amoResponse.status}, ${JSON.stringify(data)}`);
      }
  
      res.status(200).json(data);
    } catch (error) {
      console.error('Ошибка при запросе к amoCRM:', error);
      res.status(500).json({ error: 'Ошибка при запросе к amoCRM' });
    }
  }
  