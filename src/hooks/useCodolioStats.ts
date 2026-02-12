import { useState, useEffect } from 'react';

export interface CodolioStats {
  totalProblems: string;
  contests: string;
  submissions: string;
  activeDays: string;
  maxStreak: string;
  globalRank: string;
  fetchedAt: string;
}

const CACHE_KEY = 'codolio_stats';
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

const DEFAULT_STATS: CodolioStats = {
  totalProblems: '254',
  contests: '10',
  submissions: '337',
  activeDays: '67',
  maxStreak: '18',
  globalRank: '16309',
  fetchedAt: '',
};

export function useCodolioStats(username = 'aham_kirti666') {
  const [stats, setStats] = useState<CodolioStats>(() => {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Date.now() - new Date(parsed.fetchedAt).getTime() < CACHE_DURATION) {
          return parsed;
        }
      }
    } catch {}
    return DEFAULT_STATS;
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Use relative URL for Vercel serverless function
        const res = await fetch(`/api/codolio?username=${username}`);
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        
        // Only update if we got valid data
        if (data.totalProblems && data.totalProblems !== '0') {
          setStats(data);
          localStorage.setItem(CACHE_KEY, JSON.stringify(data));
        }
      } catch (error) {
        console.log('Using cached/default Codolio stats');
      }
    };

    // Check if cache is stale
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (Date.now() - new Date(parsed.fetchedAt).getTime() < CACHE_DURATION) {
          return; // Cache is fresh
        }
      } catch {}
    }

    fetchStats();
  }, [username]);

  return stats;
}
