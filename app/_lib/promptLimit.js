const LIMIT_KEY = "appPromptLimit";
const MAX_PROMPTS_PER_DAY = 4;

export const checkPromptLimit = () => {
  const today = new Date().toISOString().split("T")[0]; // "YYYY-MM-DD"
  const stored = JSON.parse(localStorage.getItem(LIMIT_KEY)) || {};

  const isToday = stored.date === today;
  const count = isToday ? stored.count || 0 : 0;

  if (count >= MAX_PROMPTS_PER_DAY) {
    return { allowed: false, remaining: 0 };
  }

  return { allowed: true, remaining: MAX_PROMPTS_PER_DAY - count };
};

export const incrementPromptCount = () => {
  const today = new Date().toISOString().split("T")[0];
  const stored = JSON.parse(localStorage.getItem(LIMIT_KEY)) || {};

  const isToday = stored.date === today;
  const newCount = isToday ? (stored.count || 0) + 1 : 1;

  localStorage.setItem(
    LIMIT_KEY,
    JSON.stringify({ date: today, count: newCount })
  );
};
