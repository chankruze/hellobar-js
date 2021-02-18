/*
Author: chankruze (chankruze@geekofia.in)
Created: Wed Feb 17 2021 23:22:51 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/
const txtGreen = "\x1b[32m",
  reset = "\x1b[37m",
  txtRed = "\x1b[31m";

// config
const seller = "SerpNames.com";
const domain = window.location.hostname;
const targetUrl = "https://dash.serpnames.com/";
const email = "hello@serpnames.com";

window.onload = (e) => {
  console.log(
    `${txtRed}[${new Date().toLocaleTimeString()}] ${txtGreen}Page Reloaded!`
  );

  const hellobarElem = document.getElementById("hellobar");
  const close = document.getElementById("close");

  setTimeout(() => {
    // setup
    const helloTitle = `${domain} is available at <a href="${targetUrl}" target="_blank">${seller}</a> for $${price}`;
    const helloBody = `This domain is recovered from Wayback to let potential buyers know its history. It’s in no way meant to harm any business. All content on this site is just for demo purposes. If you think there is a problem then feel free to contact us. Kindly contact us with your official email address.`;
    const helloEmailText = `Mail us at ${email}`;

    // html elements
    document.getElementById("htitle").innerHTML = helloTitle;
    document.getElementById("hbody").innerText = helloBody;
    const emailBtn = document.getElementById("hemail");
    emailBtn.href = `mailto:${email}?subject=Querying About ${domain}`;
    emailBtn.innerText = helloEmailText;

    // visible
    hellobarElem.style.display = "block";
    close.addEventListener("click", (e) => {
      hellobarElem.style.display = "none";
    });
  }, delay);
};
