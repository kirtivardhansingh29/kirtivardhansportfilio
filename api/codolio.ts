import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const username = req.query.username || 'aham_kirti666';
    const response = await fetch(`https://codolio.com/profile/${username}`);
    const html = await response.text();

    // Extract stats from the HTML
    const stats = extractStats(html);

    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    return res.status(200).json(stats);
  } catch (error) {
    console.error('Error fetching Codolio data:', error);
    return res.status(500).json({ error: 'Failed to fetch profile data' });
  }
}

function extractStats(html: string) {
  const getNumber = (label: string): string => {
    // Try multiple patterns to find numbers near labels
    const patterns = [
      new RegExp(`${label}[^\\d]*(\\d+)`, 'i'),
      new RegExp(`(\\d+)[^\\d]*${label}`, 'i'),
    ];
    for (const pattern of patterns) {
      const match = html.match(pattern);
      if (match) return match[1];
    }
    return '0';
  };

  return {
    totalProblems: getNumber('Total Problems') || getNumber('problems solved') || getNumber('Problems Solved'),
    contests: getNumber('contests') || getNumber('Contests Participated'),
    submissions: getNumber('submissions') || getNumber('Total Submissions'),
    activeDays: getNumber('active days') || getNumber('Active Days'),
    maxStreak: getNumber('streak') || getNumber('Max Streak'),
    globalRank: getNumber('Global Rank') || getNumber('global rank'),
    fetchedAt: new Date().toISOString(),
  };
}
