import { MdCheckCircle } from 'react-icons/md';
import { MdRadioButtonUnchecked } from 'react-icons/md';

let types = ["INTJ", "INTP", "ENTJ", "ENTP", "INFJ", "INFP", "ENFJ", "ENFP", "ISTJ", "ISFJ", "ESTJ", "ISTP", "ISFP", "ESTP", "ESFP", "ESFJ"]
let types_n = [{
    name: "INTJ",
    ideal: ["ENFP", "ENTP"],
    great: ["INFP", "INFJ", "ENFJ", "INTJ", "ENTJ", "INTP"],
    good: ["ISFP", "ESFP", "ISTP", "ESTP"],
    poor: ["ISFJ", "ESFJ", "ISTJ", "ESTJ"],
    bad: [],
}, {
    name: "INTP",
    ideal: ["ENTJ", "ESTJ"],
    great: ["INFP", "INFJ", "ENFJ", "INTJ", "INTP", "ENFP", "ENTP"],
    good: ["ISFP", "ESFP", "ISTP", "ESTP"],
    poor: ["ISFJ", "ESFJ", "ISTJ"],
    bad: [],
}, {
    name: "ENTJ",
    ideal: ["INFP", "INTP"],
    great: ["INFJ", "ENFJ", "INTJ", "ENTJ", "ENFP", "ENTP"],
    good: ["ISFP", "ESFP", "ISTP", "ESTP", "ISFJ", "ESFJ", "ISTJ", "ESTJ"],
    poor: [],
    bad: [],
}, {
    name: "ENTP",
    ideal: ["INFJ", "INTP"],
    great: ["INFP", "ENFJ", "INTJ", "ENTJ", "INTP", "ENFP", "ENTP"],
    good: ["ISFP", "ESFP", "ISTP", "ESTP"],
    poor: ["ISFJ", "ESFJ", "ISTJ", "ESTJ"],
    bad: []
}, {
    name: "INFJ",
    ideal: ["ENFP", "ENTP"],
    great: ["INFP", "INFJ", "ENFJ", "INTJ", "ENTJ", "INTP"],
    good: [],
    poor: [],
    bad: ["ISFP", "ESFP", "ISTP", "ESTP", "ISFJ", "ESFJ", "ISTJ", "ESTJ"],
}, {
    name: "INFP",
    ideal: [],
    great: [],
    good: [],
    poor: [],
    bad: []
}, {
    name: "ENFJ",
    ideal: [],
    great: [],
    good: [],
    poor: [],
    bad: []
}, {
    name: "ENFP",
    ideal: [],
    great: [],
    good: [],
    poor: [],
    bad: []
}, {
    name: "ISTJ",
    ideal: [],
    great: [],
    good: [],
    poor: [],
    bad: []
}, {
    name: "ISFJ",
    ideal: [],
    great: [],
    good: [],
    poor: [],
    bad: []
}, {
    name: "ESTJ",
    ideal: [],
    great: [],
    good: [],
    poor: [],
    bad: []
}, {
    name: "ISTP",
    ideal: [],
    great: [],
    good: [],
    poor: [],
    bad: []
}, {
    name: "ISFP",
    ideal: [],
    great: [],
    good: [],
    poor: [],
    bad: []
}, {
    name: "ESTP",
    ideal: [],
    great: [],
    good: [],
    poor: [],
    bad: []
}, {
    name: "ESFP",
    ideal: [],
    great: [],
    good: [],
    poor: [],
    bad: []
}, {
    name: "ESFJ",
    ideal: [],
    great: [],
    good: [],
    poor: [],
    bad: []
},]

function Calc({ first, second }) {
    let type = types_n.find(type => type.name === first);
    console.log(type)
    console.log(type.ideal)

    if (type.ideal.includes(second)) {
        return <div className="mt-2 block bg-blue-100 p-2 rounded ">100 % - Ideální shoda 👏</div>
    }
    else if (type.great.includes(second)) {
        return <div className="mt-2 block bg-green-100 p-2 rounded ">80 % - Velmi dobrá shoda 👍</div>
    }
    else if (type.good.includes(second)) {
        return <div className="mt-2 block bg-green-100 p-2 rounded ">60 % - Dobrá shoda 🙏</div>
    }
    else if (type.poor.includes(second)) {
        return <div className="mt-2 block bg-yellow-100 p-2 rounded text-yellow-900">40 % - Slabá (jednostranná) shoda 🤔</div>
    }
    else if (type.bad.includes(second)) {
        return <div className="mt-2 block bg-red-100 p-2 rounded text-red-900">20 % - Velice špatná shoda 👎</div>
    }
    else {
        return <div className="mt-2 block bg-gray-100 p-2 rounded text-gray-900">Neznámá shoda (není v databázi) 😬</div>
    }

}

const Status = ({ first, second }) => (


    <div className="flex-1 bg-white shadow-lg border-red-400 border-1 p-6 my-5 rounded block">
        <h2 className="text-2xl mb-2">Výsledek</h2>
        {!first ?
            <div className="block p-2 rounded text-gray-400"><MdRadioButtonUnchecked className="flex align-middle"></MdRadioButtonUnchecked> Není vyplněna první osoba</div>
            :
            (!types.includes(first)) ?
                <div className="block  p-2 rounded text-gray-400"><MdRadioButtonUnchecked className="flex align-middle"></MdRadioButtonUnchecked> Vyplňte platný typ první osobnosti dle MBTI</div>
                :
                <div className="block  p-2 rounded text-green-900 "><span className=""><MdCheckCircle className="flex align-middle"></MdCheckCircle> První osoba je vyplněna správně</span></div>
        }


        {!second ?
            <div className="block  p-2 rounded text-gray-400"><MdRadioButtonUnchecked className="flex align-middle"></MdRadioButtonUnchecked> Není vyplněna druhá osoba</div>
            :
            (!types.includes(second)) ?
                <div className=" block  p-2 rounded text-gray-400"><MdRadioButtonUnchecked className="flex align-middle"></MdRadioButtonUnchecked> Vyplňte platný typ druhé osobnosti dle MBTI</div>
                :
                <div className=" block  p-2 rounded  text-green-900 "><MdCheckCircle className="flex align-middle"></MdCheckCircle> Druhá osoba je vyplněna správně</div>
        }


        {types.includes(second) && types.includes(first) ?
            <Calc first={first} second={second} />
            :
            <div className="mt-2 block bg-gray-100 p-2 rounded text-gray-900">Nelze určit shodu 🚫</div>}
        <div className="text-gray-500 text-xs mt-3 pt-3 border-t-2">
            <p>Pro výpočet využíváme modelu od Myera Briggse.</p>
            <p className="font-bold">Toto není vztahové poradenství!</p>
            </div>

    </div>
)

export default Status