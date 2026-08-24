import fetch from 'node-fetch';
import fs from 'fs';

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwkPqx3h1fhA-2vhAB5W4VZnEsKyIEfrUNrnf3WjZ35A48Eido-GvK6IKF9Zu2n3YCG/exec';
const decreesRes = await fetch('https://script.google.com/macros/s/AKfycbwkPqx3h1fhA-2vhAB5W4VZnEsKyIEfrUNrnf3WjZ35A48Eido-GvK6IKF9Zu2n3YCG/exec'); const decrees = await decreesRes.json();

async function seedData() {
  const res = await fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action: 'reset',
      data: decrees
    }),
    redirect: 'follow'
  });
  
  const text = await res.text();
  console.log(text.substring(0, 500));
}

seedData();
