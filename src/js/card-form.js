import {validateNumber} from '../js/validateNumber'
import visa from '../img/icons8-виза.svg'
import master from '../img/icons8-мастеркард-48.png'
import mir from '../img/mir-svgrepo-com.svg'
export class CardForm {
    constructor (elem){
        this._elem = elem;
    }
    static templateHTML (){
        return `
        <div class = "card"> 
            <div class = "card-imgs">
                <img src = "${visa}" class='card-imgs__img'> </img>
                <img src = "${master}" class='card-imgs__img'> </img>
                <img src = "${mir}" class='card-imgs__img'> </img>
            </div>
            <form class = "card-form">
                <input type = "text" class = "card-form__imput"></input>
                <button type = "submit" class = "card-form__btn">Проверить</button>
            </form>
        </div>
        `
    }
    bindToDom (){
        this._elem.innerHTML = CardForm.templateHTML();
    }
    validationForm (){
        let input = document.querySelector('.card-form__imput').value;
        let validate = validateNumber(input);
        if(validate){
            let imgCard = document.querySelectorAll('.card-imgs__img');
            let arrCard = [];
            for(let value of input){
                arrCard.push(Number(value))
            }
            if(arrCard[0] == 2){
                imgCard[0].classList.remove('card-imgs__img__active');
                imgCard[1].classList.remove('card-imgs__img__active');
                imgCard[2].classList.add('card-imgs__img__active');
            }
            else if(arrCard[0] == 4){
                imgCard[1].classList.remove('card-imgs__img__active');
                imgCard[2].classList.remove('card-imgs__img__active');
                imgCard[0].classList.add('card-imgs__img__active');
            }
            else if(arrCard[0] == 5){
                imgCard[0].classList.remove('card-imgs__img__active');
                imgCard[2].classList.remove('card-imgs__img__active');
                imgCard[1].classList.add('card-imgs__img__active');
            }
        }else{
            let text = document.createElement('p');
            text.textContent = 'Ваша карта не валидная';
            text.classList.add('card-text')
            let form = document.querySelector ('.card-form');
            form.appendChild(text)
        }
    }
    formEvent (){
        let form = document.querySelector ('.card-form');
        form.addEventListener ('submit',(e)=>{
            e.preventDefault();
            this.validationForm();
        })
    }
}