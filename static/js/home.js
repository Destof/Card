let span = document.getElementById("typed_id");
let stopped = false;
let terminate = false;
let strings = [
  "return std::shared_ptr<Logger>(std::shared_ptr<void>{},&GetNullLogger()>);", 
  "std::vector<float> myVector(); \
  Foo foo(Bar()); \
  std::vector<float> myVector( \
      std::istream_iterator<int>(str),\
      std::istream_iterator<int>()\
  );"
  ];
//let stopStrings = ["fact1!", "fact2!!"];
let stopStrings = [
  "Это кто тут у нас выспался и так хорошо выглядит?",
  "Ты горячее, чем дедлайн в 23:58!",
  "Каждый раз Меладзе поет «Красиво» только для тебя!",
  "Ты всегда в топе всех рейтингов!",
  "Ты красивее всех опаздываешь на пары!",
  "Ты красивее всех спишь на лекции!",
  "Твой титульник самый красивый!",
  "Я открою для тебя все двери!",
  "Ты как автомат: все мечтают о тебе!",
  "Ты как написанный курсач — мечта любого!",
  "Ты просто 20 из 10!",
  "Ты сегодня молодец!",
  "Ты сегодня прекрасно выглядишь! Впрочем, как и всегда!",
  "Улыбнись! Твоя улыбка прекрасна!",
  "Ты отлично справляешься со своей работой! Продолжай в том же духе!",
  "You\"re awesome!",
  "Ты круче всех!",
  "У тебя все обязательно получится!",
  "Ты прекраснее, чем C++",
  "Мне нужна точка опоры... Чтобы устоять перед тобой",
  "Все относительно... Кроме твоей красоты!",
  "Знаешь какой мой любимый цвет? Цвет твоих глаз",
  "Твой голос такой приятный.",
  "Просто невозможно быть милее, чем ты!",
  "Если бы я создавал алфавит, то поставил бы буквы \"Я\" \"И\" \"Т\" \"Ы\" вместе",
  "Ты как рассада по скидке, очень нравишься моей маме",
  "Ты как удачная фотка на паспорт. До сих пор не верю, что тебя встретил"
];
let stopTime = 4000;
let textTime = 100;
let test = 1000;

function stopLoop(event) {
  stopped = true;
}

function terminateLoop(event) {
  terminate = true;
}

function typeText(string_index, i = 0) {
  if (terminate) {
    let currentTyped = span.textContent;
    setTimeout(function(){
      span.textContent = currentTyped;
      typeText(string_index, i);
    }, 4000);
    terminate = false;
    test = 2000;
    return true;
  }
  if (stopped) {
    let currentTyped = span.textContent;
    span.textContent = stopStrings[getRandomInt(stopStrings.length)];
    setTimeout(function(){
      span.textContent = currentTyped;
      typeText(string_index, i);
    }, stopTime);
    stopped = false;
    return true;
  }
  if (strings[string_index][i]) {
    span.textContent = span.textContent + strings[string_index][i];
    setTimeout(function(){
      typeText(string_index, i+1);
    }, textTime)
  } else {
    span.textContent = "";
    setTimeout(function(){
      typeText(getRandomInt(strings.length), 0);
    }, textTime)
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function startLoop() {
  typeText(getRandomInt(strings.length));
}

startLoop();

