import UAParser from 'ua-parser-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { type, path, section, referrer, duration, sessionId } = req.body;

  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  if (!BOT_TOKEN || !CHAT_ID) {
    return res.status(500).json({ error: 'Config missing' });
  }

  // Parse Headers
  const userAgent = req.headers['user-agent'] || 'Unknown';
  const parser = new UAParser(userAgent);
  const browser = parser.getBrowser();
  const os = parser.getOS();
  const device = parser.getDevice();

  let deviceType = device.type ? device.type.charAt(0).toUpperCase() + device.type.slice(1) : 'Desktop/Laptop';
  const osName = os.name ? `${os.name} ${os.version || ''}` : 'Unknown OS';
  const browserName = browser.name ? `${browser.name} ${browser.version || ''}` : 'Unknown Browser';

  // Vercel Geolocation Headers
  const ip = req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || 'Hidden IP';
  const city = req.headers['x-vercel-ip-city'] || 'Unknown City';
  const country = req.headers['x-vercel-ip-country'] || 'Unknown Country';
  const timezone = req.headers['x-vercel-ip-timezone'] || '';

  // Determine Source (Referrer Logic)
  let source = 'Direct Link / Bookmark';
  const refLower = (referrer || '').toLowerCase();
  
  if (refLower.includes('linkedin.com')) source = '🔵 LinkedIn';
  else if (refLower.includes('twitter.com') || refLower.includes('t.co')) source = '🐦 Twitter / X';
  else if (refLower.includes('github.com')) source = '🐙 GitHub';
  else if (refLower.includes('instagram.com')) source = '📸 Instagram';
  else if (refLower.includes('google.')) source = '🔍 Google Search';
  else if (refLower.includes('bing.')) source = '🔍 Bing Search';
  else if (refLower.includes('yahoo.')) source = '🔍 Yahoo Search';
  else if (refLower.includes('duckduckgo.')) source = '🔍 DuckDuckGo';
  else if (refLower.includes('chatgpt.com') || refLower.includes('openai.com')) source = '🤖 ChatGPT';
  else if (refLower.includes('claude.ai') || refLower.includes('anthropic.com')) source = '🤖 Claude AI';
  else if (refLower.includes('perplexity.ai')) source = '🤖 Perplexity AI';
  else if (refLower) source = `🔗 Other Website (${referrer})`;

  // Construct Telegram Message based on action type
  let message = '';
  
  // Custom timestamp formatting in IST
  const dateOptions = { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' };
  const timeStr = new Date().toLocaleString('en-IN', dateOptions);

  if (type === 'init') {
    message = `🚨 <b>New Portfolio Visitor!</b>\n\n` +
      `📍 <b>Location:</b> ${city}, ${country} (IP: ${ip})\n` +
      `📱 <b>Device:</b> ${deviceType} (${osName})\n` +
      `🌐 <b>Browser:</b> ${browserName}\n` +
      `🔗 <b>Source:</b> ${source}\n` +
      `🕒 <b>Time:</b> ${timeStr}\n\n` +
      `➡️ <b>Action:</b> Landed on ${path}`;
  } else if (type === 'route') {
    message = `🧭 <b>Navigation Update</b>\n\n` +
      `👤 <b>Session:</b> ${sessionId.substring(0,6)}... (${city})\n` +
      `➡️ <b>Navigated to:</b> ${path}\n` +
      `🕒 <b>Time:</b> ${timeStr}`;
  } else if (type === 'section') {
    message = `👀 <b>Reading Update</b>\n\n` +
      `👤 <b>Session:</b> ${sessionId.substring(0,6)}... (${city})\n` +
      `📖 <b>Action:</b> Currently reading the <b>${section}</b> section.\n` +
      `⏱️ <b>Time Spent:</b> > ${duration}s\n` +
      `🕒 <b>Time:</b> ${timeStr}`;
  } else {
    message = `ℹ️ Unknown Event from ${ip}`;
  }

  try {
    const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML',
        disable_web_page_preview: true
      }),
    });

    if (!response.ok) {
      throw new Error('Telegram API error');
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to send metrics' });
  }
}