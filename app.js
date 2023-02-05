const inp = document.querySelector('.inp')
const btn = document.querySelector('.btn')
const question = document.querySelector('.question')
let count = 1
let rightAnswers = 0
const great = document.querySelector('.greatAnswers')
const questions = [
    `Вот иголки и булавки Выползают из-под лавки, На меня они глядят, Молока они хотят.`,
    `Что принадлежит вам, но другие используют это чаще?`,
    `Каких камней нет ни в одном море?`,
    `Что можно видеть с закрытыми глазами?`,
]
const answers = ['ёж', 'имя', 'сухих', 'сон']

function checkAnswer() {
    let answer = inp.value
    if (answer == answers[count - 1]) {
        alert('Аплодисменты!')
        rightAnswers++
        great.innerHTML = `${rightAnswers}/${questions.length}`
    } else {
        alert('Не-а!')
    }

    inp.value = ''
    if (count == 4) {
        question.innerHTML = 'Конец'
    } else {
        question.innerHTML = questions[count]
    }

    count++
}

btn.addEventListener('click', () => {
    if (count == 1) {
        checkAnswer()
    } else if (count == 2) {
        checkAnswer()
    } else if (count == 3) {
        checkAnswer()
    } else if (count == 4) {
        checkAnswer()
    }
})
