## 🎉 Result

![tirple-result](https://user-images.githubusercontent.com/52829400/175807759-f6b1726c-edb5-4512-aa88-837b38a1a979.gif)

<hr>

## 🚀 How to start

> `git clone https://github.com/rlwjd31/triple-pretest.git`

> `npm install`

> `npm start`

<hr>

## 🔎 Skills

<img src="https://user-images.githubusercontent.com/52829400/175807780-c98baa67-ddac-42b2-9a65-0ef97b0992f3.png" width="100"></img>

- 컴포넌트 기반 라이브러리로서 상태관리에 유용하고 코드의 중복성을 줄이며 재사용성이 용이하다.
- Virtual Dom을 이용하여 바뀐 부분만 렌더링함으로써 DOM의 접근을 최소화하여 웹 애플리케이션의 퍼포먼스에 최적이다.

<img src="https://user-images.githubusercontent.com/52829400/175807845-93682465-c3b1-4e90-b04b-5d6c0114bc61.png" width="100"></img>

- 코드에 목적을 명시하고 목적에 맞지 않거나 잘못된 변수에 에러를 발생시켜 버그를 사전에 제거한다.
- 코드의 자동완성과 피드백을 제공하여 생산성을 높일 수 있다.
- javascript와의 높은 호환성을 가진다.

<img src="https://user-images.githubusercontent.com/52829400/175807884-ad2cb562-6f74-4b60-93ab-727d04bccbc0.png" width="100"></img>

- className의 중복과 오타로 인한 버그를 줄여준다.
- React의 props를 참조할 수 있어 상황에 맞게 적절한 처리가 가능하다.
- CSS-in-JS로서 style된 컴포넌트를 생성할 수 있다.
<hr>

## 📖 Encountered Issues

1. 애니메이션이 진행될 때 다른 컴포넌트들이 보였던 문제
   - Logo 컴포넌트가 animation이 진행될 때 Metric과 Award가 보여서 처음 opacity를 0으로 설정 -> animation이 끝난 후 사라지는 문제가 다시 발생
   - 따라서 이를 처음 opacity: 0으로 초기화한 후 animation이 진행될 때 opacity: 1로 바꾸는 것을 useFadeInRise로 해결함. -> useFadeInRise
     <br><br>
2. Metric Component에서 text를 증가시키는 구현 문제
   - setInterval의 delay값을 진행이 많이됨에 따라 높이려고 함. -> delay는 ms단위까지만 처리할 수 있다는 문제를 발견함
   - 전체 delay값을 2s가 되게 구현을 함. -> 부동소수점의 길이가 길어 오차가 발생하는 문제를 발견함
   - 마지막으로 시도하여 해결했던 것으로 delay에 일정한 간격(step)을 줌으로써 ms단위는 유지하고 easing function에서 시간에 관한 진행률의 함수(progression = easeOutCubic(step))를 구하여 이를 count에 곱한 값을 내림(progression \* count -> 정수X)을 하여 해결함
     <br><br>
3. FadeInRise.ts파일을 어디에 위치시킬지 고민함
   - FadeInRise는 각 Container Componente들이 부상하면서 FadeIn효과를 제공하는 Component이다. 즉 Component임과 동시에 어떤 기능을 제공하므로 기능을 제공한다는 의미에서 utils directory, Component로서는 components directory 중 어디에 위치시킬까 고민함.
   <hr>

## Directory Structure

```bash
.
├── App.tsx
├── assets
│ └── images
│ ├── badge-apple4x.png
│ ├── play-store2x.png
│ └── triple2x.png
├── components
│ ├── award
│ │ ├── AppStore.tsx
│ │ ├── Badge.tsx
│ │ └── PlayStore.tsx
│ ├── containers
│ │ ├── AwardContainer.tsx
│ │ ├── LogoContainer.tsx
│ │ └── MetricContainer.tsx
│ ├── logo
│ │ └── Text.tsx
│ └── metric
│   ├── MetricItem.tsx
│   └── MetricText.tsx
├── hooks
│ ├── useCountUp.ts
│ └── useFadeInRise.ts
├── index.tsx
├── interfaces
│ ├── FadeInRiseProps.ts
│ ├── MetricTextProps.ts
│ └── useCountUpProps.ts
├── react-app-env.d.ts
├── styles
│ └── GlobalStyle.ts
└── utils
├── FadeInRise.ts
└── easingFunctions.ts
```
