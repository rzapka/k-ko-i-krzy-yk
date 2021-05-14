

class GameController {

    constructor() {
        this.form = document.querySelector(".main__form");
        this.area = document.querySelector(".main__area");
        this.fields = document.querySelectorAll(".field")
        this.circlePlName;
        this.xPlName;
        this.gameInit()
        console.log("hello")

    }
    checkCharsInNames(name) {
        const arr = name.split("")
        if (arr.length > 15) return false
        return true;
    }
    assignNames() {
        const inputCircle = document.querySelector(".form__input--circle")
        const inputX = document.querySelector(".form__input--x")
        if (this.checkCharsInNames(inputCircle.value)) {
            this.circlePlName = inputCircle.value;
        } else {
            alert("Nieodpowiednia ilość znaków w graczu kółko");
            return
        }
        if (this.checkCharsInNames(inputX.value)) {
            this.xPlName = inputX.value;
        } else {
            alert("Nieodpowiednia ilość znaków w graczu krzyżyk");
            return
        }
        this.clear()
    }
    clear() {
        this.form.style.display = "none";
        this.fields.forEach(field => field.textContent = "")
    }


    gameInit() {
        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            this.assignNames()
            if (this.circlePlName && this.xPlName) {
                this.logic = new GameLogic(this.circlePlName, this.xPlName);
                this.logic.game()
            }
            
        })
    }

}

document.addEventListener("DOMContentLoaded", () => new GameController())