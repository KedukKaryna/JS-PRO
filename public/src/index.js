import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));


// root.render(
//   <div>
//     <h1 name='simpleHeading' id='firstHeading'>Привет из мира React!</h1>
//     <input type="text" name="simpleInput" className="simpleInput"></input>
//     <ul>
//       <li>HTML</li>
//       <li>CSS</li>
//       <li>JS</li>
//     </ul>
//   </div>

//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// **Закрепим практикой**
// 1. Отрисовать внутри нашего div заголовок h1, 
// у которого будет id=`firstHeading`, name=`simpleHeading`, и текст "Привет из мира React!".
// 2. Добавить в наш `div` инпут с type="text", name="simpleInput", class="simpleInput".
// 3. Добавить список ul, в котором будет 3 элемента (li). Первый с текстом HTML, 
// второй - CSS, третий - JS.


// const span1 = React.createElement('span', null, 'First span');
// const par1 = React.createElement('p', null, 'Simple paragraph');
// const elem = React.createElement('div', null, span1, par1);
// const span1 = React.createElement('span', { className: 'spanClass', id: 'spanId'}, 'First span');
// root.render(
//   <div>
//     <span className='spanClass' id='spanId'>First span</span>
//     <p>Simple paragraph</p>
//   </div>
// );


{/* <li className="simpleListItem">
  <p className="listItemText">Текст элемента списка</p>
  <button className="listItemButton">Кнопка элемента</button>
</li>


function SimpleListItem() {
  return (
    <li className="simpleListItem">
      <p className="listItemText">Текст элемента списка</p>
      <button className="listItemButton">Кнопка элемента</button>
    </li>
  );
}

root.render(
  <ul>
    <SimpleListItem/>
    <SimpleListItem/>
    <SimpleListItem/>
  </ul>
);


function SimpleListItem() {
  return (
      <p className="listItemText">Текст элемента списка</p>
      <button className="listItemButton">Кнопка элемента</button>
  );
}


function SimpleListItem() {
  return (
    <>
      <p className="listItemText">Текст элемента списка</p>
      <button className="listItemButton">Кнопка элемента</button>
    </>
  );
// } */}



// **Закрепим практикой**
// 1. Создайте компонент, который будет возвращать разметку параграфа (тег p),
//  с текстом `Simple Paragraph!`. Класс - `simpleParagraph`.
// 2. Создайте компонент, который будет возвращать div с классом `containerDiv`, 
// и он должен содержать заголовок h2 с текстом `Simple Header`, 
// и поле ввода (инпут) с placeholder='Enter something!'.
// 3. Создайте компонент, который будет рисовать неупорядоченный список ul из 3 элементов (li),
//  с текстами "Аз", "Буки", "Ведаю".


// **Закрепим практикой**
// 1. Работаем с JavaScript в JSX. 
// В наш параграф к существующему тексту нам нужно добавить текущую дату (`new Date()`).
// 2. Еще работаем с динамикой.
//  Объявим в нашем компоненте `SimpleParagraph` переменную `currentSeason`,
//   и запишем в нее значение `autumn` (у нас сейчас осень). 
//   Теперь нужно в компоненте параграфа,
//    после текста `Simple Paragrph!` также выводить текст `now is CURRENT_SEASON`.
// 3. Создайте компонент `RandomText`. Он должен рендерить параграф. 
// Также он должен брать случайное значение, 
// и если оно больше 0.5 - то в параграфе должен быть текст "Less than 0.5",
//  а иначе - "Greater than 0.5".


function SimpleParagraph (){
  const currentSeason = 'autumn'
  return (
      <p className='simpleParagraph'>Simple Paragraph! {new Date().toLocaleString()}  now is {currentSeason}</p>
  )
}

function RandomText(){
  const random = Math.random()
  return(
    <p>
      {random > 0.5 ? 'Less than 0.5' : 'Greater than 0.5'}
    </p>
  )
}

function SimpleHeader (){
  return(
    <div className='containerDiv'>
      <h2>Simple Header</h2>
      <input placeholder='Enter something!'></input>
    </div>
  )
}

function SimplList(){
  return(
    <ul>
      <li>Аз</li>
      <li>Буки</li>
      <li>Ведаю</li>
    </ul>
  )
}

root.render(
<ul>
  <SimpleParagraph/>
  <SimpleHeader/>
  <SimplList/>
  <RandomText/>
</ul>

);






// function SimpleParagraph() {
//   const value = 'Simple Text!';
//   return (
//     <p>{value}</p>
//   );
// }

// return (
//   <p>The result of 2 + 2 will be {2+2}</p>
// )




