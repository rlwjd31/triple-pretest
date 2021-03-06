## ๐ Result

![tirple-result](https://user-images.githubusercontent.com/52829400/175807759-f6b1726c-edb5-4512-aa88-837b38a1a979.gif)

<hr>

## ๐ How to start

> `git clone https://github.com/rlwjd31/triple-pretest.git`

> `npm install`

> `npm start`

<hr>

## ๐ Skills

<img src="https://user-images.githubusercontent.com/52829400/175807780-c98baa67-ddac-42b2-9a65-0ef97b0992f3.png" width="100"></img>

- ์ปดํฌ๋ํธ ๊ธฐ๋ฐ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ก์ ์ํ๊ด๋ฆฌ์ ์ ์ฉํ๊ณ  ์ฝ๋์ ์ค๋ณต์ฑ์ ์ค์ด๋ฉฐ ์ฌ์ฌ์ฉ์ฑ์ด ์ฉ์ดํ๋ค.
- Virtual Dom์ ์ด์ฉํ์ฌ ๋ฐ๋ ๋ถ๋ถ๋ง ๋ ๋๋งํจ์ผ๋ก์จ DOM์ ์ ๊ทผ์ ์ต์ํํ์ฌ ์น ์ ํ๋ฆฌ์ผ์ด์์ ํผํฌ๋จผ์ค์ ์ต์ ์ด๋ค.

<img src="https://user-images.githubusercontent.com/52829400/175807845-93682465-c3b1-4e90-b04b-5d6c0114bc61.png" width="100"></img>

- ์ฝ๋์ ๋ชฉ์ ์ ๋ช์ํ๊ณ  ๋ชฉ์ ์ ๋ง์ง ์๊ฑฐ๋ ์๋ชป๋ ๋ณ์์ ์๋ฌ๋ฅผ ๋ฐ์์์ผ ๋ฒ๊ทธ๋ฅผ ์ฌ์ ์ ์ ๊ฑฐํ๋ค.
- ์ฝ๋์ ์๋์์ฑ๊ณผ ํผ๋๋ฐฑ์ ์ ๊ณตํ์ฌ ์์ฐ์ฑ์ ๋์ผ ์ ์๋ค.
- javascript์์ ๋์ ํธํ์ฑ์ ๊ฐ์ง๋ค.

<img src="https://user-images.githubusercontent.com/52829400/175807884-ad2cb562-6f74-4b60-93ab-727d04bccbc0.png" width="100"></img>

- className์ ์ค๋ณต๊ณผ ์คํ๋ก ์ธํ ๋ฒ๊ทธ๋ฅผ ์ค์ฌ์ค๋ค.
- React์ props๋ฅผ ์ฐธ์กฐํ  ์ ์์ด ์ํฉ์ ๋ง๊ฒ ์ ์ ํ ์ฒ๋ฆฌ๊ฐ ๊ฐ๋ฅํ๋ค.
- CSS-in-JS๋ก์ style๋ ์ปดํฌ๋ํธ๋ฅผ ์์ฑํ  ์ ์๋ค.
<hr>

## ๐ Encountered Issues

1. ์ ๋๋ฉ์ด์์ด ์งํ๋  ๋ ๋ค๋ฅธ ์ปดํฌ๋ํธ๋ค์ด ๋ณด์๋ ๋ฌธ์ 
   - Logo ์ปดํฌ๋ํธ๊ฐ animation์ด ์งํ๋  ๋ Metric๊ณผ Award๊ฐ ๋ณด์ฌ์ ์ฒ์ opacity๋ฅผ 0์ผ๋ก ์ค์  -> animation์ด ๋๋ ํ ์ฌ๋ผ์ง๋ ๋ฌธ์ ๊ฐ ๋ค์ ๋ฐ์
   - ๋ฐ๋ผ์ ์ด๋ฅผ ์ฒ์ opacity: 0์ผ๋ก ์ด๊ธฐํํ ํ animation์ด ์งํ๋  ๋ opacity: 1๋ก ๋ฐ๊พธ๋ ๊ฒ์ useFadeInRise๋ก ํด๊ฒฐํจ. -> useFadeInRise
     <br><br>
2. Metric Component์์ text๋ฅผ ์ฆ๊ฐ์ํค๋ ๊ตฌํ ๋ฌธ์ 
   - setInterval์ delay๊ฐ์ ์งํ์ด ๋ง์ด๋จ์ ๋ฐ๋ผ ๋์ด๋ ค๊ณ  ํจ. -> delay๋ ms๋จ์๊น์ง๋ง ์ฒ๋ฆฌํ  ์ ์๋ค๋ ๋ฌธ์ ๋ฅผ ๋ฐ๊ฒฌํจ
   - ์ ์ฒด delay๊ฐ์ 2s๊ฐ ๋๊ฒ ๊ตฌํ์ ํจ. -> ๋ถ๋์์์ ์ ๊ธธ์ด๊ฐ ๊ธธ์ด ์ค์ฐจ๊ฐ ๋ฐ์ํ๋ ๋ฌธ์ ๋ฅผ ๋ฐ๊ฒฌํจ
   - ๋ง์ง๋ง์ผ๋ก ์๋ํ์ฌ ํด๊ฒฐํ๋ ๊ฒ์ผ๋ก delay์ ์ผ์ ํ ๊ฐ๊ฒฉ(step)์ ์ค์ผ๋ก์จ ms๋จ์๋ ์ ์งํ๊ณ  easing function์์ ์๊ฐ์ ๊ดํ ์งํ๋ฅ ์ ํจ์(progression = easeOutCubic(step))๋ฅผ ๊ตฌํ์ฌ ์ด๋ฅผ count์ ๊ณฑํ ๊ฐ์ ๋ด๋ฆผ(progression \* count -> ์ ์X)์ ํ์ฌ ํด๊ฒฐํจ
     <br><br>
3. FadeInRise.tsํ์ผ์ ์ด๋์ ์์น์ํฌ์ง ๊ณ ๋ฏผํจ
   - FadeInRise๋ ๊ฐ Container Componente๋ค์ด ๋ถ์ํ๋ฉด์ FadeInํจ๊ณผ๋ฅผ ์ ๊ณตํ๋ Component์ด๋ค. ์ฆ Component์๊ณผ ๋์์ ์ด๋ค ๊ธฐ๋ฅ์ ์ ๊ณตํ๋ฏ๋ก ๊ธฐ๋ฅ์ ์ ๊ณตํ๋ค๋ ์๋ฏธ์์ utils directory, Component๋ก์๋ components directory ์ค ์ด๋์ ์์น์ํฌ๊น ๊ณ ๋ฏผํจ.
   <hr>

## Directory Structure

```bash
.
โโโ assets
โ โโโ images
โ   โโโ badge-apple4x.png
โ   โโโ play-store2x.png
โ   โโโ triple2x.png
โโโ components
โ โโโ award
โ โ โโโ AppStore.tsx
โ โ โโโ Badge.tsx
โ โ โโโ PlayStore.tsx
โ โโโ containers
โ โ โโโ AwardContainer.tsx
โ โ โโโ LogoContainer.tsx
โ โ โโโ MetricContainer.tsx
โ โโโ logo
โ โ โโโ Text.tsx
โ โโโ metric
โ   โโโ MetricItem.tsx
โ   โโโ MetricText.tsx
โโโ hooks
โ โโโ useCountUp.ts
โ โโโ useFadeInRise.ts
โโโ interfaces
โ โโโ FadeInRiseProps.ts
โ โโโ MetricTextProps.ts
โ โโโ useCountUpProps.ts
โโโ styles
โ โโโ GlobalStyle.ts
โโโ utils
โ  โโโ FadeInRise.ts 
โ  โโโ easingFunctions.ts
โโโ App.tsx
โโโ index.tsx
โโโ react-app-env.d.ts

```
