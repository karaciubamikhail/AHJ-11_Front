import { CardForm } from "../card-form";

test('testCardMir',()=>{
    document.body.innerHTML = "<div class='container'></div>";
    let form = new CardForm(document.querySelector(".container"));
    form.bindToDom();
    form.formEvent();
    let input = document.querySelector('.card-form__imput');
    let btn = document.querySelector('.card-form__btn');
    input.value = '2201382000000021';
    btn.click();
    let img = document.querySelectorAll('.card-imgs__img');
    expect(img[2].classList.contains('card-imgs__img__active')).toBe(true)
})
test('testCardVisa',()=>{
    document.body.innerHTML = "<div class='container'></div>";
    let form = new CardForm(document.querySelector(".container"));
    form.bindToDom();
    form.formEvent();
    let input = document.querySelector('.card-form__imput');
    let btn = document.querySelector('.card-form__btn');
    input.value = '4716377300498119';
    btn.click();
    let img = document.querySelectorAll('.card-imgs__img');
    expect(img[0].classList.contains('card-imgs__img__active')).toBe(true)
})
test('testCardMS',()=>{
    document.body.innerHTML = "<div class='container'></div>";
    let form = new CardForm(document.querySelector(".container"));
    form.bindToDom();
    form.formEvent();
    let input = document.querySelector('.card-form__imput');
    let btn = document.querySelector('.card-form__btn');
    input.value = '2720995260051533';
    btn.click();
    let img = document.querySelectorAll('.card-imgs__img');
    expect(img[0].classList.contains('card-imgs__img__active')).toBe(false)
})
test('testValidCard',()=>{
    document.body.innerHTML = "<div class='container'></div>";
    let form = new CardForm(document.querySelector(".container"));
    form.bindToDom();
    form.formEvent();
    let input = document.querySelector('.card-form__imput');
    let btn = document.querySelector('.card-form__btn');
    input.value = '22222222222222';
    btn.click();
    let text = document.querySelector('.card-text');
    expect(text.classList.contains('card-text')).toBe(true)
})