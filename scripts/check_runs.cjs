async function check() {
  try {
    const r = await fetch('https://api.github.com/repos/bombeodeptrai/Tra-cuu-ke-toan-kieu-viet/actions/runs?per_page=5', {
      headers: { 'User-Agent': 'node-fetch' }
    });
    const data = await r.json();
    if (!data.workflow_runs) {
      console.log('Response:', data);
      return;
    }
    for (const run of data.workflow_runs) {
      console.log(`Run #${run.run_number} (${run.head_commit?.id?.substring(0,7)}): ${run.status} / ${run.conclusion} - "${run.head_commit?.message?.split('\n')[0]}"`);
    }
  } catch (err) {
    console.error(err);
  }
}

check();
