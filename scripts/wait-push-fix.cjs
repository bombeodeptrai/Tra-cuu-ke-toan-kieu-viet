const fs = require('fs');
const { execSync } = require('child_process');

async function waitAndPush() {
  console.log('Waiting for fix task to complete...');
  while(true) {
    const log = fs.readFileSync('C:/Users/HUY/.gemini/antigravity/brain/33e38b74-d817-44ad-8472-c8f8afd8bca3/.system_generated/tasks/task-1446.log', 'utf8');
    if (log.includes('Đã fix xong')) break;
    await new Promise(r => setTimeout(r, 5000));
  }
  
  console.log('Fix finished! Committing...');
  execSync('git add public/data/content', { stdio: 'inherit' });
  execSync('git commit -m "Fix remaining AI summaries"', { stdio: 'inherit' });
  execSync('git push origin main', { stdio: 'inherit' });
  console.log('Push done!');
}
waitAndPush();
