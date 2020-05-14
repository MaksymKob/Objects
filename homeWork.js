"use strict"

/////////////////////////////////////////////////////////////////////////////////////////

let $title1_1 = document.createElement('h1')
$title1_1.innerHTML = 'Задание 1 - Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и функции для работы с этим объектом'
$title1_1.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title1_1)

let $task1_1 = document.createElement('div')
$task1_1.classList.add('task1_1')
$task1_1.innerHTML = '<button>Получить информацию о автомобиле</button>'

let $task1_1Result = document.createElement('div')
$task1_1Result.classList.add('result')
$task1_1.append($task1_1Result)

document.body.append($task1_1)
let $task1_1Btn = document.querySelector('.task1_1 button')
$task1_1Result = document.querySelector('.task1_1 .result')

function getInformationCar(manufacturer, model, yearRelease, averageSpeed) {
    let car = {
        manufacturer,
        model,
        yearRelease,
        averageSpeed
    }
    return `Производитель - ${car.manufacturer}; </br> Модель - ${car.model}; </br> Год выпуска - ${car.yearRelease}; </br> Средняя скорость - ${car.averageSpeed} км/час`
}

$task1_1Btn.addEventListener('click', () => {
    $task1_1Result.innerHTML = getInformationCar("Чешская компания Škoda Auto a.s.", "Skoda Octavia A7 1.4 TSI DSG", 2012, 20)
})

let $title1_2 = document.createElement('h2')
$title1_2.innerText = 'Необходимое время для преодоления переданного расстояния со средней скоростью'
$title1_2.style = 'color: #666; font-size: 16px; margin: 15px 0 0 0'
document.body.append($title1_2)

let $task1_2 = document.createElement('div')
$task1_2.classList.add('task1_2')
$task1_2.innerHTML = '<input placeholder="Расстояние в км." type="number" style="margin: 10px 0"></input><button>Посчитать</button>'

let $task1_2Result = document.createElement('div')
$task1_2Result.classList.add('result1')
$task1_2.append($task1_2Result)

document.body.append($task1_2)
let $task1_2Field = document.querySelector('.task1_2 input')
let $task1_2Btn = document.querySelector('.task1_2 button')
$task1_2Result = document.querySelector('.task1_2 .result1')

function getTime(way) {
    let averageSpeed = 20
    let time = way / averageSpeed
    for (let i = 1; i <= time; i++) {
        if (i % 5 == 0)
            time += 1
    }
    return `Вы проедете этот путь за ${time} часов.`
}

$task1_2Btn.addEventListener('click', () => {
    let timeForAway = $task1_2Field
    $task1_2Result.innerHTML = getTime(Number(timeForAway.value))
})

////////////////////////////////////////////////////////////////////////////////////////////////////////

//// 1 OBJ ////

let $title2_1 = document.createElement('h2')
$title2_1.innerText = 'Задание 2 - Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом.'
$title2_1.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title2_1)

let $titleObj1 = document.createElement('h3')
$titleObj1.innerHTML = '1-ый Объект'
$titleObj1.style = 'color: #666; font-size: 16px; margin: 15px 0 0 0'
document.body.append($titleObj1)

let $task2_1 = document.createElement('div')
$task2_1.classList.add('task2_1')
$task2_1.innerHTML = `<input class="input__number1" placeholder="числитель" type="number"></input>
<input class="input__number2" placeholder="знаменатель" type="number"></input>
<button>Вывести</button>`

let $task2_1Result = document.createElement('div')
$task2_1Result.classList.add('result')
$task2_1.append($task2_1Result)

document.body.append($task2_1)
let $task2_1Btn = document.querySelector('.task2_1 button')
let $task2_1Field1 = document.querySelector('.task2_1 .input__number1')
let $task2_1Field2 = document.querySelector('.task2_1 .input__number2')
$task2_1Result = document.querySelector('.task2_1 .result')

let fraction1 = {
    numerator1: '',
    denominator1: ''
}

$task2_1Btn.addEventListener('click', () => {
    fraction1.numerator1 = Number($task2_1Field1.value)
    fraction1.denominator1 = Number($task2_1Field2.value)
    $task2_1Result.innerHTML = `${fraction1.numerator1} / ${fraction1.denominator1}`
})

//// 2 OBJ ////

let $titleObj2 = document.createElement('h3')
$titleObj2.innerHTML = '2-ый Объект'
$titleObj2.style = 'color: #666; font-size: 16px; margin: 15px 0 0 0'
document.body.append($titleObj2)

let $task2_2 = document.createElement('div')
$task2_2.classList.add('task2_2')
$task2_2.innerHTML = `<input class="input__number1" placeholder="числитель" type="number"></input>
<input class="input__number2" placeholder="знаменатель" type="number"></input>
<button>Вывести</button>`

let $task2_2Result = document.createElement('div')
$task2_2Result.classList.add('result')
$task2_2.append($task2_2Result)

document.body.append($task2_2)
let $task2_2Btn = document.querySelector('.task2_2 button')
let $task2_2Field1 = document.querySelector('.task2_2 .input__number1')
let $task2_2Field2 = document.querySelector('.task2_2 .input__number2')
$task2_2Result = document.querySelector('.task2_2 .result')

let fraction2 = {
    numerator2: '',
    denominator2: ''
}

$task2_2Btn.addEventListener('click', () => {
    fraction2.numerator2 = Number($task2_2Field1.value)
    fraction2.denominator2 = Number($task2_2Field2.value)
    $task2_2Result.innerHTML = `${fraction2.numerator2} / ${fraction2.denominator2}`
})

//// FUNCTIONS ////

let $task2_3 = document.createElement('div')
$task2_3.classList.add('task2_3')
$task2_3.innerHTML = `<button class="button__sum">Сложыть</button> 
<button class="button__difference">Вычесть</button>
<button class="button__multiplications">Умножить</button>
<button class="button__fraction">Поделить</button>`

let $task2_3Result = document.createElement('div')
$task2_3Result.classList.add('result')
$task2_3.append($task2_3Result)

document.body.append($task2_3)
let $buttonSum = document.querySelector('.task2_3 .button__sum')
let $buttonDifference = document.querySelector('.task2_3 .button__difference')
let $buttonMultiplications = document.querySelector('.task2_3 .button__multiplications')
let $buttonFraction = document.querySelector('.task2_3 .button__fraction')
$task2_3Result = document.querySelector('.task2_3 .result')

let resultNumerator = 0
let resultDenominator = 0

// function getReduction(n, d) {

// }

function getSum() {
    if (fraction2.denominator2 == fraction1.denominator1) {
        resultNumerator = fraction1.numerator1 + fraction2.numerator2
        resultDenominator = fraction2.denominator2
        $task2_3Result.innerHTML = `${resultNumerator}/${resultDenominator}`
    }
    if (fraction1.denominator1 % fraction2.denominator2 == 0) {
        let resultOfDivision = fraction1.denominator1 / fraction2.denominator2
        fraction2.denominator2 = fraction2.denominator2 * resultOfDivision
        fraction2.numerator2 = fraction2.numerator2 * resultOfDivision
        resultNumerator = fraction1.numerator1 + fraction2.numerator2
        resultDenominator = fraction1.denominator1
        $task2_3Result.innerHTML = `${resultNumerator}/${resultDenominator}`

    }
    if (fraction2.denominator2 % fraction1.denominator1 == 0) {
        let resultOfDivision = fraction2.denominator2 / fraction1.denominator1
        fraction1.denominator1 = fraction1.denominator1 * resultOfDivision
        fraction1.numerator1 = fraction1.numerator1 * resultOfDivision
        resultNumerator = fraction1.numerator1 + fraction2.numerator2
        resultDenominator = fraction2.denominator2
        $task2_3Result.innerHTML = `${resultNumerator}/${resultDenominator}`
    }
    else {
        resultNumerator = fraction1.numerator1 * fraction2.denominator2 + fraction2.numerator2 * fraction1.denominator1
        resultDenominator = fraction1.denominator1 * fraction2.denominator2
        $task2_3Result.innerHTML = `${resultNumerator}/${resultDenominator}`
    }
}

function getDifference() {
    if (fraction2.denominator2 == fraction1.denominator1) {
        resultNumerator = fraction1.numerator1 - fraction2.numerator2
        resultDenominator = fraction2.denominator2
        $task2_3Result.innerHTML = `${resultNumerator}/${resultDenominator}`
    }
    if (fraction1.denominator1 % fraction2.denominator2 == 0) {
        let resultOfDivision = fraction1.denominator1 / fraction2.denominator2
        fraction2.denominator2 = fraction2.denominator2 * resultOfDivision
        fraction2.numerator2 = fraction2.numerator2 * resultOfDivision
        resultNumerator = fraction1.numerator1 - fraction2.numerator2
        resultDenominator = fraction1.denominator1
        $task2_3Result.innerHTML = `${resultNumerator}/${resultDenominator}`

    }
    if (fraction2.denominator2 % fraction1.denominator1 == 0) {
        let resultOfDivision = fraction2.denominator2 / fraction1.denominator1
        fraction1.denominator1 = fraction1.denominator1 * resultOfDivision
        fraction1.numerator1 = fraction1.numerator1 * resultOfDivision
        resultNumerator = fraction1.numerator1 - fraction2.numerator2
        resultDenominator = fraction2.denominator2
        $task2_3Result.innerHTML = `${resultNumerator}/${resultDenominator}`
    }
    else {
        resultNumerator = fraction1.numerator1 * fraction2.denominator2 - fraction2.numerator2 * fraction1.denominator1
        resultDenominator = fraction1.denominator1 * fraction2.denominator2
        $task2_3Result.innerHTML = `${resultNumerator}/${resultDenominator}`
    }
}

function getMultiplications() {
    resultNumerator = fraction1.numerator1 * fraction2.numerator2
    resultDenominator = fraction1.denominator1 * fraction2.denominator2
    $task2_3Result.innerHTML = `${resultNumerator}/${resultDenominator}`
}

function getFraction() {
    let n2 = fraction2.denominator2
    let d2 = fraction2.numerator2
    resultNumerator = fraction1.numerator1 * n2
    resultDenominator = fraction1.denominator1 * d2
    $task2_3Result.innerHTML = `${resultNumerator}/${resultDenominator}`
}


$buttonSum.onclick = getSum
$buttonDifference.onclick = getDifference
$buttonMultiplications.onclick = getMultiplications
$buttonFraction.onclick = getFraction

////////////////////////////////////////////////////////////////////////////////////////////////////////

let $title3 = document.createElement('h2')
$title3.innerText = 'Задание 3 - Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом.'
$title3.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title3)

let $task3 = document.createElement('div')
$task3.classList.add('task3')
$task3.innerHTML = `<input class="input__number1" placeholder="часы" type="number"></input>
<input class="input__number2" placeholder="минуты" type="number"></input>
<input class="input__number3" placeholder="секунды" type="number"></input>
<button>Вывести</button>`

let $task3Result = document.createElement('div')
$task3Result.classList.add('result')
$task3.append($task3Result)

document.body.append($task3)
let $task3Btn = document.querySelector('.task3 button')
let $task3Field1 = document.querySelector('.task3 .input__number1')
let $task3Field2 = document.querySelector('.task3 .input__number2')
let $task3Field3 = document.querySelector('.task3 .input__number3')
$task3Result = document.querySelector('.task3 .result')

let time = {
    hour: '',
    minute: '',
    second: ''
}

let result = 0

function getDate(times) {
    times.hour = Number($task3Field1.value)
    times.minute = Number($task3Field2.value)
    times.second = Number($task3Field3.value)

    result = (times.hour * 60) * 60 + times.minute * 60 + times.second
    times.hour = Math.floor(result / 60 / 60)
    times.minute = Math.floor(result / 60) % 60
    times.second = result % 60

    return `${times.hour}:${times.minute}:${times.second}`
}

$task3Btn.addEventListener('click', () => {
    $task3Result.innerHTML = getDate(time)
})

let $title3_1 = document.createElement('h2')
$title3_1.innerText = 'Добавьте количество секунд'
$title3_1.style = 'color: #666; font-size: 16px; margin: 15px 0 0 0'
document.body.append($title3_1)

let $task3_1 = document.createElement('div')
$task3_1.classList.add('task3_1')
$task3_1.innerHTML = `<input placeholder="cекунды" type="number"></input>
<button>Добавить</button>`

document.body.append($task3_1)
let $task3_1Btn = document.querySelector('.task3_1 button')
let $task3_1Field1 = document.querySelector('.task3_1 input')

function addSecond(value1) {
    value1.second += Number($task3_1Field1.value)
    result = (value1.hour * 60) * 60 + value1.minute * 60 + value1.second
    value1.hour = Math.floor(result / 60 / 60)
    value1.minute = Math.floor(result / 60) % 60
    value1.second = result % 60
    return `${value1.hour}:${value1.minute}:${value1.second}`
}

$task3_1Btn.addEventListener('click', () => {
    $task3Result.innerHTML = addSecond(time)
})

let $title3_2 = document.createElement('h2')
$title3_2.innerText = 'Добавьте количество минут'
$title3_2.style = 'color: #666; font-size: 16px; margin: 15px 0 0 0'
document.body.append($title3_2)

let $task3_2 = document.createElement('div')
$task3_2.classList.add('task3_2')
$task3_2.innerHTML = `<input placeholder="минуты" type="number"></input>
<button>Добавить</button>`

document.body.append($task3_2)
let $task3_2Btn = document.querySelector('.task3_2 button')
let $task3_2Field1 = document.querySelector('.task3_2 input')

function addMinute(value2) {
    value2.minute += Number($task3_2Field1.value)
    result = (value2.hour * 60) * 60 + value2.minute * 60
    value2.hour = Math.floor(result / 60 / 60)
    value2.minute = Math.floor(result / 60) % 60
    return `${value2.hour}:${value2.minute}:${value2.second}`
}

$task3_2Btn.addEventListener('click', () => {
    $task3Result.innerHTML = addMinute(time)
})

let $title3_3 = document.createElement('h2')
$title3_3.innerText = 'Добавьте количество часов'
$title3_3.style = 'color: #666; font-size: 16px; margin: 15px 0 0 0'
document.body.append($title3_3)

let $task3_3 = document.createElement('div')
$task3_3.classList.add('task3_3')
$task3_3.innerHTML = `<input placeholder="часы" type="number"></input>
<button>Добавить</button>`

document.body.append($task3_3)
let $task3_3Btn = document.querySelector('.task3_3 button')
let $task3_3Field1 = document.querySelector('.task3_3 input')

function addHour(value3) {
    value3.hour += Number($task3_3Field1.value)
    result = (value3.hour * 60) * 60
    value3.hour = Math.floor(result / 60 / 60)
    return `${value3.hour}:${value3.minute}:${value3.second}`
}

$task3_3Btn.addEventListener('click', () => {
    $task3Result.innerHTML = addHour(time)
})