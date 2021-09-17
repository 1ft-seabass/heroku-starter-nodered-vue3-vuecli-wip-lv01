# heroku-starter-nodered-vue3-vuecli-wip-lv01

このリポジトリは Node-RED + Vue 3 + Cue CLI の仕組みを色々試していく。WIP (Work in Progress) 制作途中のものです。

使っていくにつれて得た知見がつどつど追加される可能性があります。

## 現状盛り込んでいるもの

- Node-RED の基礎
  - [Node\-RED をあるローカルのフォルダだけで動くようにプロジェクトを作るメモ – 1ft\-seabass\.jp\.MEMO](https://www.1ft-seabass.jp/memo/2021/09/01/node-red-per-launch-project-setting-run-command-static/)
- Node-RED に  Vue 3 + Cue CLI の導入
  - [Node\-RED のプロジェクト内で Vue CLI 4 で作った Vue 3 を動かすメモ – 1ft\-seabass\.jp\.MEMO](https://www.1ft-seabass.jp/memo/2021/08/31/node-red-and-vue3-collaboration-basic/)
  - [Node\-RED と Vue 3 が連携したプロジェクトに初期表示のコンポーネントと Bootstrap を導入するメモ – 1ft\-seabass\.jp\.MEMO](https://www.1ft-seabass.jp/memo/2021/09/02/node-red-and-vue3-and-bootstrap-collaboration-basic/)
  - [Node\-RED と Vue 3 が連携したプロジェクトで Vue 側に axios を導入し Node\-RED http ノードと連携するメモ – 1ft\-seabass\.jp\.MEMO](https://www.1ft-seabass.jp/memo/2021/09/06/node-red-and-vue3-and-axios-collaboration-basic/)
    - CORS 対応
    - npm i axios
    - Node-RED に api1 のフローを設置
  - [Node\-RED と Vue 3 が連携したプロジェクトで Vue 側に vue\-axios を使わずよりシンプルに axios を導入するメモ – 1ft\-seabass\.jp\.MEMO](https://www.1ft-seabass.jp/memo/2021/09/10/node-red-and-vue3-and-axios-simple/)
    - コンポーネントごとの import axios from 'axios' まわり 
- 開発サーバーと公開サーバー(Heroku) の準備
  - [Node\-RED と Vue 3 が連携したプロジェクトで開発時だけ API の向き先を調整するメモ – 1ft\-seabass\.jp\.MEMO](https://www.1ft-seabass.jp/memo/2021/09/13/node-red-and-vue3-and-axios-local-url-branch/)
    - 開発サーバーの時だけ API の向き先を変える