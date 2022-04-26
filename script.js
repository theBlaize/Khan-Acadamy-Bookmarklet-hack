(function () {
 let overlayHTML = ` <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap" rel="stylesheet">
<div id="box">
<button class="ou" id="accordian">Open</button>
   <div class="ou" id="box2">
       <p class="pdark" id="pdark"> KhanCheats 1.0 - Schoolcheats YT<br> Please don't copy and distribute<br><b>Update: works for multy select</b></p>
       <section><label>[shift+Z] also hides Menu</label></section> 
       <section><label>&nbsp;</label></section>
       <section><label>Answer: [<label id="ans1">...</label>]</label></section>
       <section><label>Next Awnser: [<label id="ans2"></label>]</label></section>
       <section><label>&nbsp;</label></section>
       <section><label>Muti-select awnsers</label></section> 
        <section><label id="ans3text">Dropdown 1: [<label id="ans3">...</label>]</label></section>
        <section><label id="ans4text">Dropdown 2: [<label id="ans4">...</label>]</label></section>
        <section><label id="ans5text">Dropdown 3: [<label id="ans5">...</label>]</label></section>
       <section><label>&nbsp;</label></section>
   </div>
  
</div>
<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');
#box {
   z-index: 1090;
   position: fixed;
   top: 0;
   left: 0;}
#box2 {
   padding: 15px;
   margin-bottom: 5px;
   display: none;
   border-radius: 50px 50px 50px 50px;};
section {
   display: flex;
   justify-content: space-between;margin:5px;}
.ou {
   background-color: darkslategray;
   letter-spacing: 2px;
   font-weight: none;
   font-size: 11px;
   font-family: 'Quicksand', sans-serif;
   color:white;}
.pdark {
  font-family: 'Quicksand', sans-serif;
  text-align: center;
  border-bottom:2px solid white;}
#accordian {
   width: 10Z0%;
   border: 0;
   cursor: pointer;
   border-radius: 0px;}
label { font-weight: bold;}
</style>
`

function get(x)            { return document.getElementById(x); }
let overlay             = document.createElement("div");
   overlay.innerHTML   = overlayHTML;
   document.body.appendChild(overlay);
let acc                 = get("accordian"),
   darkToggle          = get("darkToggle")
acc.onclick = function() {
   let panel = get("box2");
   if (panel.style.display == "grid") panel.style.display = "none";
   else { panel.style.display = "grid"; }
}
//The Hack Toggler Script
 document.addEventListener('keydown', (event) => {
   if (event.key === 'Z') {
    
     let panel = get("box2");
   if (panel.style.display == "grid") panel.style.display = "none";
   else { panel.style.display = "grid"; }
   }
});
 
   'use strict';
   window.loaded = false;
   class Answer {
       constructor(answer, type) {
           this.body = answer;
           this.type = type;
       }
       get isMultiChoice() {
           return this.type == "multiple_choice";
       }
       get isFreeResponse() {
           return this.type == "free_response";
       }
       get isExpression() {
           return this.type == "expression";
       }
       get isDropdown() {
           return this.type == "dropdown";
       }
       log() {
           const answer = this.body;
           const style = "color: coral; -webkit-text-stroke: .5px black; font-size:24px; font-weight:bold;";
           answer.map(ans => {
               if (typeof ans == "string") {
                   if (ans.includes("web+graphie")) {
                       this.body[this.body.indexOf(ans)] = "";
                       this.printImage(ans);
                   } else {
                       answer[answer.indexOf(ans)] = ans.replaceAll("$", "");
                   }
               }
           });
           const text = answer.join("\n");
           if (text) {
               console.log(`${text.trim()}`, style);
           }
       }
       printImage(ans) {
           const url = ans.replace("![](web+graphie", "https").replace(")", ".svg");
           const image = new Image();
           image.src = url;
           image.onload = () => {
               const imageStyle = [
                   'font-size: 1px;',
                   'line-height: ', this.height % 2, 'px;',
                   'padding: ', this.height * .5, 'px ', this.width * .5, 'px;',
                   'background-size: ', this.width, 'px ', this.height, 'px;',
                   'background: url(', url, ');'
               ].join(' ');
               console.log('', imageStyle);
           };
       }
   }
   const originalFetch = window.fetch;
   window.fetch = function () {
       return originalFetch.apply(this, arguments).then((res) => {
           if (res.url.includes("/getAssessmentItem")) {
               const clone = res.clone();
               clone.json().then(json => {
                   let item, question;
                   try {
                       item = json.data.assessmentItem.item.itemData;
                       question = JSON.parse(item).question;
                   } catch {
                       let errorIteration = () => { return localStorage.getItem("error_iter") || 0; }
                       localStorage.setItem("error_iter", errorIteration() + 1);
                       if (errorIteration() < 4) {
                           return location.reload();
                       } else {
                           return alert("An error occurred");
                       }
                   }
                   if (!question) return;
                   Object.keys(question.widgets).map(widgetName => {
                       switch (widgetName.split(" ")[0]) {
                           case "numeric-input":
                               return freeResponseAnswerFrom(question).log();
                           case "radio":
                               return multipleChoiceAnswerFrom(question).log();
                           case "expression":
                               return expressionAnswerFrom(question).log();
                           case "dropdown":
                               return dropdownAnswerFrom(question).log();
                       }
                   });
               });
           }
           return res;
       })
   }
   function freeResponseAnswerFrom(question) {
       const answer = Object.values(question.widgets).map((widget) => {
           if (widget.options?.answers) {
               return widget.options.answers.map(answer => {
                   if (answer.status == "correct") {
                      //alert('freeresponse')
                      var ans1 = document.getElementById('ans1').innerHTML
                      var ans2 = document.getElementById('ans2').innerHTML
                       document.getElementById('ans2').innerHTML = document.getElementById('ans2').innerHTML.replace("![](web+graphie://cdn.kastatic.org/ka-perseus-graphie/", "")
document.getElementById('ans2').innerHTML = document.getElementById('ans2').innerHTML.replace("$", "")
                     document.getElementById('ans2').innerHTML = (answer.value)
                     document.getElementById('ans1').innerHTML = (ans2)
                    document.getElementById('ans1').innerHTML = document.getElementById('ans1').innerHTML.replace("![](web+graphie://cdn.kastatic.org/ka-perseus-graphie/", "")
document.getElementById('ans1').innerHTML = document.getElementById('ans1').innerHTML.replace("$", "")
                   }
                });
               
           }
       }).flat().filter((val) => { return val !== undefined; });
       return new Answer(answer, "free_response");
   }
   function multipleChoiceAnswerFrom(question) {
       const answer = Object.values(question.widgets).map((widget) => {
           if (widget.options?.choices) {
               return widget.options.choices.map(choice => {
                   if (choice.correct) {
             //alert('multichoice')
                      var ans1 = document.getElementById('ans1').innerHTML
                      var ans2 = document.getElementById('ans2').innerHTML
                     
                      document.getElementById('ans2').innerHTML = document.getElementById('ans2').innerHTML.replace("![](web+graphie://cdn.kastatic.org/ka-perseus-graphie/", "")
document.getElementById('ans2').innerHTML = document.getElementById('ans2').innerHTML.replace("$", "")
                    
                    
           
                     document.getElementById('ans2').innerHTML = (choice.content)
                     document.getElementById('ans1').innerHTML = (ans2)
                    
                    
                    
                     document.getElementById('ans1').innerHTML = document.getElementById('ans1').innerHTML.replace("![](web+graphie://cdn.kastatic.org/ka-perseus-graphie/", "")
document.getElementById('ans1').innerHTML = document.getElementById('ans1').innerHTML.replace("$", "")
                   }
               });
           }
       }).flat().filter((val) => { return val !== undefined; });
       return new Answer(answer, "multiple_choice");
   }
   function expressionAnswerFrom(question) {
       const answer = Object.values(question.widgets).map((widget) => {
           if (widget.options?.answerForms) {
               return widget.options.answerForms.map(answer => {
                   if (Object.values(answer).includes("correct")) {
                     //alert('expression')
                     var ans1 = document.getElementById('ans1').innerHTML
                     var ans2 = document.getElementById('ans2').innerHTML
                       document.getElementById('ans2').innerHTML = document.getElementById('ans2').innerHTML.replace("![](web+graphie://cdn.kastatic.org/ka-perseus-graphie/", "")
document.getElementById('ans2').innerHTML = document.getElementById('ans2').innerHTML.replace("$", "")
                    
                    
                    
                     document.getElementById('ans2').innerHTML = (answer.value)
                     document.getElementById('ans1').innerHTML = (ans2)
                    
                    
                    
                    
                     document.getElementById('ans1').innerHTML = document.getElementById('ans1').innerHTML.replace("![](web+graphie://cdn.kastatic.org/ka-perseus-graphie/", "")
document.getElementById('ans1').innerHTML = document.getElementById('ans1').innerHTML.replace("$", "")
                   }
               });
           }
       }).flat();
       return new Answer(answer, "expression");
   }
   function dropdownAnswerFrom(question) {
       const answer = Object.values(question.widgets).map((widget) => {
           if (widget.options?.choices) {
               return widget.options.choices.map(choice => {
                   if (choice.correct) {
                       //alert('dropdown')
                      var ans1 = document.getElementById('ans1').innerHTML
                      var ans2 = document.getElementById('ans2').innerHTML
                      var ans3 = document.getElementById('ans3').innerHTML
                      var ans4 = document.getElementById('ans4').innerHTML
                      var ans5 = document.getElementById('ans5').innerHTML
                                               document.getElementById('ans2').innerHTML = document.getElementById('ans2').innerHTML.replace("![](web+graphie://cdn.kastatic.org/ka-perseus-graphie/", "")
document.getElementById('ans2').innerHTML = document.getElementById('ans2').innerHTML.replace("$", "")
                    
                    
                    
                     document.getElementById('ans2').innerHTML = (choice.content)
                     document.getElementById('ans1').innerHTML = (ans2)
                    
                    
                    
                    
                     document.getElementById('ans5').innerHTML = (choice.content)
                     document.getElementById('ans4').innerHTML = (ans5)
                     document.getElementById('ans3').innerHTML = (ans4)
                    
                    
                    
                    
                    
                    
                    
                
                    
                    
                    
                    
                   
                    
                    
                    
                    
                     document.getElementById('ans1').innerHTML = document.getElementById('ans1').innerHTML.replace("![](web+graphie://cdn.kastatic.org/ka-perseus-graphie/", "")
document.getElementById('ans1').innerHTML = document.getElementById('ans1').innerHTML.replace("$", "")
                   }
               });
           }
       }).flat();
       return new Answer(answer, "dropdown");
   }
})();
 
