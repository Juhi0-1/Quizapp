
const questions =[{
    'que' : 'What is the scientific name of a butterfly?',
    'a': 'Apis',
    'b' : 'Coleoptra',

    'c':'Formicidae',
    'd' : 'Rhopalocera',
    'right' : 'Formicidae'
},
{   


    'que' : 'How hot is the surface of the sun?',
    'a': '1,233 K',             
    'b' : '5,778 K',
    'c':'12,130 K',
    'd' : '101,300 K',
    'right' : '1,233 K'
},
{  


    'que' : 'Who are the actors in The Internship?',
    'a': 'Ben Stiller, Jonah Hill',
    'b' : 'Courteney Cox, Matt LeBlanc',
    'c':'Kaley Cuoco, Jim Parsons',
    'd' : 'Vince Vaughn, Owen Wilson',
    'right' : 'Kaley Cuoco, Jim Parsons'
},

{
    

    'que' : 'What is the capital of Spain?',
    'a': 'Berlin',
    'b' : 'Buenos Aires',
    'c':'Madrid',
    'd' : 'San Juan',
    'right' : 'Buenos Aires'
},
{


    'que' : 'What are the school colors of the University of Texas at Austin?',
    'a': 'Black, Red',
    'b' : 'Blue, Orange',
    'c':'White, Burnt Orange',
    'd' : 'White, Old gold, Gold',
    'right' : 'Blue, Orange'


    

},
{


'que' : 'When did The Avengers come out?',
'a': 'May 2, 2008',
'b' : 'May 4, 2012',
'c':'May 3, 2013',
'd' : 'April 4, 2014',
'right' : 'May 2, 2008'


}]

let index =0;
const quesbox = document.getElementById("quebox");
const optionsInput = document.querySelectorAll("input[type='radio']");
let correct=0;
let incorrect=0;
let total = questions.length;

const ques = (index)=>{
    
    
   
    if (index >= total) {
        return quizEnd(correct,total);
    }
    reset();
    const data = questions[index];
    quesbox.innerText= data.que;
    optionsInput[0].nextElementSibling.innerText = data.a;
    optionsInput[1].nextElementSibling.innerText = data.b;
    optionsInput[2].nextElementSibling.innerText = data.c;
    optionsInput[3].nextElementSibling.innerText = data.d;
    
}
const btn = document.getElementById('submit');
btn.addEventListener(
    "click",
    function() {
        const data = questions[index]
        const ans = getAnswer()
        if (ans === data.right) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        ques(index);
    }
)

const getAnswer = () => {
    let ans;
    optionsInput.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    optionsInput.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

const quizEnd = (correct,total) => {
    // console.log(document.getElementsByClassName("container"));
    
    document.getElementById("container").innerHTML = `
        <div class="col">
            <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
        </div>
    `
}
ques(index);