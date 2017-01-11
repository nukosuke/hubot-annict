[![npm version](https://badge.fury.io/js/hubot-annict.svg)](https://badge.fury.io/js/hubot-annict)
# hubot-annict
Annict integration script for hubot

# Install
In your hubot root directory,
```sh
$ npm install hubot-annict --save
# or if you use Yarn for package managing
$ yarn add hubot-annict
```
and add `hubot-annict` to `external-scripts.json`.

Finally, awake hubot with environment variable, `HUBOT_ANNICT_TOKEN`.
```sh
$ HUBOT_ANNICT_TOKEN="<your_annict_access_token>" ./bin/hubot
```

# Commands

```
hubot> anime now
hubot> Shell: Shell: <a href="http://project-itoh.com/">虐殺器官</a>
<a href="http://konosuba.com/">この素晴らしい世界に祝福を！2</a>
<a href="http://www.kuzunohonkai.com/">クズの本懐</a>
<a href="http://demichan.com/">亜人ちゃんは語りたい</a>
<a href="http://masamune-tv.com/">政宗くんのリベンジ</a>
<a href="http://chaoschildanime.com/">CHAOS;CHILD</a>
<a href="http://tv.littlewitchacademia.jp/">リトルウィッチアカデミア</a>
<a href="http://www.tbs.co.jp/anime/urara/">うらら迷路帖</a>
<a href="http://youjo-senki.jp/">幼女戦記</a>
<a href="http://sao-movie.net/">劇場版 ソードアート・オンライン -オーディナル・スケール-</a>
<a href="http://www.tbs.co.jp/anime/seiren/">セイレン</a>
.
.
.
```

# License
(c) 2017 nukosuke  
This software is licensed under MIT License.
