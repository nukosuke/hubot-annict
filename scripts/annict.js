// Description:
//   Integration of anime logging service, Annict (annict.com)
//
// Configuration:
//   HUBOT_ANNICT_TOKEN
//
// Commands:
//   anime now - get works this season on air (upto 25 entry)
//   anime q <keyword> - search works by keyword
//
// Author:
//   nukosuke

"use strict";

const Annict = require("annict").default;

module.exports = (robots) => {
  const token = process.env.HUBOT_ANNICT_TOKEN;
  var annict  = new Annict;

  if (typeof token === 'undefined') {
    console.log("hubot-annict: Annict access token was NOT set!!");
    return;
  }

  annict.client.setHeader("Authorization", `Bearer ${token}`);
  const seasons = ['winter','spring','summer','autumn'];

  robots.hear(/anime now/i, (res) => {
    const now = new Date;
    const season = `${now.getFullYear()}-${seasons[parseInt(now.getMonth()/3)]}`;

    annict.Work.get({
      fields: ['official_site_url','title'].join(','), //TODO: remove .join() after annict.js v0.0.8
      filter_season: season,
      sort_watchers_count: 'desc', // to get popular works first
    })
    .then(response => response.json())
    .then(json => {
      if (typeof json.works === 'undefined') {
          throw new Error('invalid response json structure');
      }

      const message = json.works.map(work => `<${work.official_site_url}|${work.title}>`).join('\n');
      res.reply(message);
    })
    .catch(err => {
      res.reply(`error occured: ${err}`);
    });
  });

  robots.respond(/anime q (.*)/, (res) => {
    const query = res.match[1];
    annict.Work.get({
      filter_title: query,
    })
    .then(response => response.json())
    .then(json => {
      if (typeof json.works === 'undefined') {
          throw new Error('invalid response json structure');
      }

      if (json.works.length === 0) {
        res.reply('No results found :bow:');
      } else {
        const message = json.works.map(work => `<${work.official_site_url}|${work.title}>`).join('\n');
        res.reply(message);
      }
    })
    .catch(err => {
      res.reply(`error: ${err}`);
    });
  });
};
