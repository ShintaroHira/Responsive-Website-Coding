# ナディアパークデンタルクリニック ブルーラジカル治療 LP

静的な HTML / CSS / JavaScript のランディングページです。`index.html` を開くだけで表示できます。

## 構成

```
index.html        ページ本体
css/style.css     コンパイル済み CSS（直接編集しない）
scss/             スタイルのソース
js/main.js        メニュー、FAQ アコーディオン
images/           画像
fonts/            日本語フォント（ページで使う文字のみのサブセット）
```

## CSS のビルド

```
npm install
npm run build     # 1回だけコンパイル
npm run watch     # 変更を監視
```

## レイアウトの仕組み

- デザインは幅 1920px。SCSS の `u(n)` は「デザイン上の n px」で、幅 1024〜2560px の間は比率を保って拡大縮小します。
- 1023px 以下は `scss/_responsive.scss` で 1 カラムに切り替わります。
- PC の改行位置は `<br class="pc">` で固定しています。スマホでは無効です。
- `scss/_alignment.scss` と `scss/_alignment-lines.scss` はデザインとの実測で求めた文字組みの微調整です（PC のみ適用）。文章を変えるときは、該当行の指定も見直してください。
- セクション背景の `images/bg-*.jpg` と `images/faq-*.jpg` は、デザインから文字を取り除いて作り直した画像です。元のデザインデータから書き出した素材があれば、そちらへの差し替えをおすすめします。

## 公開前に差し替えるもの

- **WEB 予約・LINE の URL**: `data-placeholder` が付いた `<a href="#">`。実際の URL に変えたら `data-placeholder` を削除してください。
- **ナビのリンク先**: デザインに無い項目は、ページ内の近い見出しへ飛ぶようにしています。

## 地図

アクセス欄は Google マップの埋め込み（`.access__map` の iframe）です。API キーは不要です。場所や表示範囲を変えるときは iframe の `src` を差し替えてください。

## フォント

Noto Serif JP、Noto Sans JP（どちらも SIL Open Font License）。文章を変更して新しい漢字を使う場合は、`fonts/` のサブセットを作り直す必要があります。含まれない文字は代替フォントで表示されます。
