const targetHash = 'index-CD5XRBxv.js';

async function check() {
  for (let i = 1; i <= 20; i++) {
    try {
      const res = await fetch(`https://bombeodeptrai.github.io/Tra-cuu-ke-toan-kieu-viet/?t=${Date.now()}`);
      const html = await res.text();
      const match = html.match(/index-[a-zA-Z0-9_-]+\.js/);
      const current = match ? match[0] : 'none';
      console.log(`[Attempt ${i}/20] Current live JS: ${current}`);
      if (current === targetHash || (current !== 'index-BIU5MCoL.js' && current !== 'none')) {
        console.log(`🚀 Deployment complete! New bundle live: ${current}`);
        return true;
      }
    } catch (e) {
      console.log(`[Attempt ${i}/20] Error fetching:`, e.message);
    }
    await new Promise(r => setTimeout(r, 10000));
  }
  return false;
}

check().then(success => {
  if (!success) console.log('Timeout waiting for deployment.');
});
