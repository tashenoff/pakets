export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Метод не поддерживается" });
    }
  
    const {
      fullName,
      phone,
      email,
      additionalPhone,
      comment,
      deliveryMethodId,
      deliveryAddress,
      cart,
      totalPrice,
    } = req.body;
  
    if (!fullName || !phone || !email || !cart.length) {
      return res.status(400).json({ error: "Заполните все обязательные поля" });
    }
  
    const CLIENT_ID = "af410264-6c80-439d-9740-a8bd26c6029b";
    const CLIENT_SECRET = "CkZ4rSX1ysrYmLaXRkobjYaCrvNhOgiq3NDRttqZ8YHCjHBGpQf1ve2eA9FCJrMZ";
    const REDIRECT_URI = "https://paketi.kz";
    const AUTH_CODE = "def50200e4b13..."; // Подставь актуальный код авторизации
    const SUBDOMAIN = "your-subdomain"; // Твой субдомен в amoCRM
  
    try {
      // 🔹 1. Получаем access token
      const tokenResponse = await fetch(`https://${SUBDOMAIN}.amocrm.ru/oauth2/access_token`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          grant_type: "authorization_code",
          code: AUTH_CODE,
          redirect_uri: REDIRECT_URI,
        }),
      });
  
      const tokenData = await tokenResponse.json();
  
      if (!tokenData.access_token) {
        return res.status(500).json({ error: "Не удалось получить access token" });
      }
  
      const accessToken = tokenData.access_token;
  
      // 🔹 2. Создаем заказ (лид) в amoCRM
      const orderData = {
        name: `Заказ от ${fullName}`,
        price: totalPrice,
        _embedded: {
          contacts: [
            {
              first_name: fullName.split(" ")[0],
              last_name: fullName.split(" ")[1] || "",
              custom_fields_values: [
                { field_code: "PHONE", values: [{ value: phone }] },
                { field_code: "EMAIL", values: [{ value: email }] },
              ],
            },
          ],
          notes: [
            {
              note_type: "common",
              params: {
                text: `ФИО: ${fullName}\nТелефон: ${phone}\nДоп. телефон: ${additionalPhone || "Нет"}\nEmail: ${email}\nКомментарий: ${comment || "Нет"}\nСпособ доставки: ${deliveryMethodId}\nАдрес: ${deliveryAddress || "Не указан"}\nСумма: ${totalPrice} ₸`,
              },
            },
          ],
        },
      };
  
      const orderResponse = await fetch(`https://${SUBDOMAIN}.amocrm.ru/api/v4/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify([orderData]),
      });
  
      const orderResult = await orderResponse.json();
  
      res.status(200).json({ success: "Заказ успешно отправлен!", order: orderResult });
    } catch (error) {
      console.error("Ошибка:", error);
      res.status(500).json({ error: "Ошибка при отправке в amoCRM" });
    }
  }
  