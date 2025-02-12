import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Метод не разрешен' });
  }

  try {
    const { fullName, phone, email, additionalPhone, comment, deliveryMethod, deliveryAddress, cart, totalAmount } = req.body;

    if (!fullName || !phone || !cart.length) {
      return res.status(400).json({ message: 'Заполните все обязательные поля' });
    }

    // Формируем текст заявки
    let orderDetails = `🛒 Новый заказ от ${fullName}\n\n`;
    cart.forEach((item, index) => {
      orderDetails += `${index + 1}. ${item.translatedName} - ${item.quantity} шт. (${item.price} ₸)\n`;
    });

    orderDetails += `\n💰 Общая сумма: ${totalAmount} ₸`;
    orderDetails += `\n📞 Телефон: ${phone}`;
    if (additionalPhone) orderDetails += `\n📞 Доп. телефон: ${additionalPhone}`;
    orderDetails += `\n🚚 Доставка: ${deliveryMethod === 1 ? 'Самовывоз' : 'Доставка'}`;
    if (deliveryMethod !== 1) orderDetails += `\n📍 Адрес: ${deliveryAddress}`;
    if (comment) orderDetails += `\n📝 Комментарий: ${comment}`;
    if (email) orderDetails += `\n✉️ Email: ${email}`; // Теперь email клиента отображается

    // Настраиваем SMTP-транспорт
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Почта отправителя
        pass: process.env.EMAIL_PASS, // Пароль или App Password
      },
    });

    // Список получателей (ТОЛЬКО АДМИНИСТРАТОР)
    const recipients = [
      'kail.dead.kd@gmail.com', // Основной администратор
      process.env.ADMIN_EMAIL    // Дополнительный администратор
    ].filter(Boolean); // Исключает пустые значения

    // Отправка письма админу
    await transporter.sendMail({
      from: `"Интернет-магазин" <${process.env.EMAIL_USER}>`,
      to: recipients.join(', '), // Все email через запятую
      subject: 'Новый заказ',
      text: orderDetails,
    });

    return res.status(200).json({ message: 'Заказ успешно отправлен' });
  } catch (error) {
    console.error('Ошибка при отправке email:', error);
    return res.status(500).json({ message: 'Ошибка сервера', error: error.message });
  }
}
