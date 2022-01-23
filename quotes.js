const quotes = [
  {
    quote: "술이 뭔데요? 차가운 불입니다. 거기에 달을 담아 마시지요.",
  },
  {
    quote: "인간이 5명이나 모이면 반드시 1명은 쓰레기가 있다.",
  },
  {
    quote: "잠재력 말고 잠이랑 재력을 따로 주세요",
  },
  {
    quote:
      "인생에서 절대 잊지 말아야할 3가지 1. 어려울 때에 당신에게 도움을 준사람, 2. 어려울때의 당신을 혼자 버려둔 사람, 3.당신을 어려운 시기로 몰아 넣은 사람",
  },
  {
    quote: "개가 짖는다고 개랑같이 짖을 필요는 없다.",
  },
  {
    quote:
      "남자는 지갑을 열기전에 고맙다고 입을 열지 않는 여자를 조심하고 여자는 마음을 열기전에 남대문 여는 남자를 조심해라",
  },
  {
    quote: "기쁨을 나누면 질투가 되고 슬픔을 나누면 약점이 된다.",
  },
  {
    quote: "인생은 멀리서 보면 희극이고, 가까이서 보면 비극이다.",
  },
  {
    quote: "세상에서 제일 위대한 세가지, 돈, 섹스, 권력",
  },
  {
    quote:
      "하지 않아도 되는 일은 하지 않는다. 해야 하는 일이라면 간략하게 끝낸다.",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
