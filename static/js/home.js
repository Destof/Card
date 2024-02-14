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
  );",
  "template<typenamevalue_t,typenameind_t,typenamesteps_t>voidSolver<value_t,ind_t,steps_t>::CalcPMLParam(){std::vector<std::string>tmp={"x","y","z"};for(ind_ti=0;i<_pml_crd.size();i++){_pml_ind.push_back(std::make_pair((_pml_crd[i].first-this->_lborders[tmp[i]])/this->_h[tmp[i]],(_pml_crd[i].second-this->_lborders[tmp[i]])/this->_h[tmp[i]]));//PMLSECONDstd::vector<ind_t>buf(static_cast<ind_t>(_skin_crd[i].size()+3));buf[0]=_pml_ind[i].first+1;buf[buf.size()-2]=_pml_ind[i].second+1;buf[buf.size()-1]=(this->_rborders[tmp[i]]-this->_lborders[tmp[i]])/this->_h[tmp[i]];for(ind_tj=1;j<buf.size()-2;j++){buf[j]=(_skin_crd[i][j-1]-this->_lborders[tmp[i]])/this->_h[tmp[i]];}_layers_ind.push_back(buf);buf.clear();_pml_width.push_back(_pml_crd[i].first-this->_lborders[tmp[i]]);}};",
  ""
  ];
//let stopStrings = ["fact1!", "fact2!!"];
let stopStrings = [
  "Это кто тут у нас выспался и так хорошо выглядит?",
  "Ты горячее, чем дедлайн в 23:58!",
  "Каждый раз Меладзе поет «Красиво» только для тебя!",
  "Горжусь тобой больше, чем сохраненной скидкой!",
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
  "Мне нужнв точка опоры... Чтобы устоять перед тобой",
  "Все относительно... Кроме твоей красоты!",
  "Знаешь какой мой любимый цвет? Цвет твоих глаз",
  "Твой голос такой приятный.",
  "Просто невозможно быть милее, чем ты!",
  "Если бы я создавал алфавит, то поставил бы буквы \"Я\" \"И\" \"Т\" \"Ы\" вместе",
  "Ты как рассада по скидке, очень нравишься моей маме",
  "Ты как удачная фотка на паспорт. До сих пор не верю, что тебя встретил"
];
let stopTime = 5000;
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

