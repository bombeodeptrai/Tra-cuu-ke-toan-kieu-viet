async function run() {
  const res = await fetch("https://script.google.com/macros/s/AKfycbwkPqx3h1fhA-2vhAB5W4VZnEsKyIEfrUNrnf3WjZ35A48Eido-GvK6IKF9Zu2n3YCG/exec");
  const data = await res.json();
  console.log("TOTAL IN SHEET:", data.length);
  console.log(data);
}
run();