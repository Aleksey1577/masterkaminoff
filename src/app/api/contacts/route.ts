import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, phone, message } = await request.json();

    // Проверка данных
    if (!name || !phone) {
      return NextResponse.json({ error: 'Имя и телефон обязательны' }, { status: 400 });
    }

    // Токены с сервера (секретные!)
    const BOT_TOKEN = process.env.BOT_TOKEN;
    const CHAT_ID = process.env.CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      return NextResponse.json({ error: 'Серверная ошибка (токены)' }, { status: 500 });
    }

    // Сообщение для Telegram
    const formMessage = `Новая заявка с сайта:\n\nИмя: ${name}\nТелефон: ${phone}\nСообщение: ${message || 'Не указано'}`;

    // Отправка в Telegram
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text: formMessage }),
    });

    if (!response.ok) {
      throw new Error(`Telegram ошибка: ${response.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API ошибка:', error);
    return NextResponse.json({ error: 'Ошибка отправки' }, { status: 500 });
  }
}