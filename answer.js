/**
 * 課題1: id値が 'title' の要素を取得する
 *   - getElementByIdを使う
 *   - console.logで取得したDOMの中身を確認する
 */
const titleElement1 = document.getElementById('title');
console.log('titleElement1の中身 : ', titleElement1);

/**
 * 課題2: id値が 'item-container' の要素を取得する
 *   - querySelectorを使う
 *   - console.logで取得したDOMの中身を確認する
 */
const titleElement2 = document.querySelector('#title');
console.log('titleElement2の中身 : ', titleElement2);

/**
 * 課題3: li要素を全て取得する
 *   - console.logで取得したDOMの中身を確認する
 */
const liElements = document.getElementsByTagName('li');
console.log('liElements : ', liElements);

/**
 * 課題4: class値が 'item' の要素を全て取得する
 *   - getElementsByClassNameを使う
 *   - console.logで取得したDOMの中身を確認する
 */
const itemElements1 = document.getElementsByClassName('item');
console.log('itemElements1 : ', itemElements1);


/**
 * 課題5: class値が 'item' の要素を全て取得する
 *   - querySelectorAllを使う
 *   - console.logで取得したDOMの中身を確認する
 */
const itemElements2 = document.querySelectorAll('.item');
console.log('itemElements2 : ', itemElements2);