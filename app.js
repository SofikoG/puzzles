const inp = document.querySelector('.inp')
const btn = document.querySelector('.btn')
const question = document.querySelector('.question')
let count = 1

btn.addEventListener('click', () => {
    if (count == 1) {
        let answer = inp.value
        if (answer == "ёж") {
            alert('Аплодисменты!')
        } else {
            alert('Не-а!')
        }

        inp.value = ''
        question.innerHTML = `Что принадлежит вам, но другие используют это чаще?`
        count++
    } else if (count == 2) {
        let answer = inp.value
        if (answer == "имя") {
            alert('Молодец!')
        } else {
            alert('Не угадал!')
        }
        inp.value = ''
        question.innerHTML = `Каких камней нет ни в одном море?`
        count++
    } else if (count == 3) {
        let answer = inp.value
        if (answer == "сухих") {
            alert('Правильно!')
        } else {
            alert('Не правильно!')
        }
        inp.value = ''
        question.innerHTML = `Что можно видеть с закрытыми глазами?`
        count++
    } else if (count == 4) {
        let answer = inp.value
        if (answer == "сон") {
            alert('Вау,правильно!')
        } else {
            alert('Нет!')
        }
        inp.value = ''
        question.innerHTML = `Конец!`
        count++
    }
})