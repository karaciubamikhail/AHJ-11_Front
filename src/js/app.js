// TODO: write code here
import { CardForm } from "./card-form";

let form = new CardForm(document.querySelector(".container"));
form.bindToDom();
form.formEvent();
