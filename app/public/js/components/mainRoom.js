"use strict";
const mainRoom = {
  template: `

  <section class="main"> 
    <section>
      <section class = "QApopup" ng-show="$ctrl.show" ng-class="$ctrl.incorrect ? 'incorrect' : 'incorrect-disabled'">
        <p class="question" >{{$ctrl.qA.question}}</p>
        <p class = "answer" ng-repeat = "answer in $ctrl.qA.answers">
        <input type = "radio" name = "answer" ng-click = "$ctrl.guess(answer.correct)" ng-disabled=""> {{ answer.answer }}
        </p>
      </section>

      <p class="correctAnswer" ng-show="$ctrl.showCorrect">Yay! Correct Answer!!</p>

      <div>  
        <img remove-click ng-click="$ctrl.qPopup(3)" src="./images/growler.png" class="growler"> 
      </div>
      <div>  
        <img  onclick="sadtrombone.play()" src="./images/globe.png" class="globe">  
        <img remove-click ng-click="$ctrl.qPopup(0)" src="./images/octopuspainting.png" class="octopus">
      </div>
      <div>
      <img onclick="sadtrombone.play()" src="./images/desktopclock.png" class="clock">
      </div>
      <div>
        <img remove-click ng-click="$ctrl.qPopup(1)" src="./images/bedpillow.png" class="bed">
        <img onclick="sadtrombone.play()" src="./images/mermaidpainting.png" class="mermaid">
      </div>
      <div>
        <img onclick="sadtrombone.play()" src="./images/sailorhats.png" class="hats">
      </div>
      <div>
        <img remove-click ng-click="$ctrl.qPopup(4)" src="./images/lowdresser.png" class="dresser">
        <img onclick="sadtrombone.play()" ng-click = "" src="./images/rug.png" class="rug">
      </div>
      <div></div>
      <div>
        <img remove-click ng-click="$ctrl.qPopup(2)" src="./images/chairpillow.png" class="chair">
      </div>
    </section>

    <section class="timer">
      <div> {{ $ctrl.countDown }}</div>
    
      <div id="myProgress"><div class="timertext">
        <p>H</p>
        <p>U</p>
        <p>R</p>
        <p>R</p>
        <p>Y</p>
        <br></br>
        <p>U</p>
        <p>P</p>
        <p>!</p>
      </div>
  
      <div id="myBar"></div>
    </section>
 
  </section>
  `,

  controller: ["TriviaService", "$interval", "$timeout", function (TriviaService, $interval, $timeout) {
    const vm = this;
    let counter = 0;



    TriviaService.getQuestions().then((response) => {
      console.log(response);
      vm.questions = response;
      return response
    });


    vm.qPopup = (index) => {
      console.log(index);
      console.log(vm.questions[index]);
      vm.show = true;
      vm.qA = vm.questions[index];
    }

    vm.guess = (correct) => {
      console.log(correct);
      vm.show = true;
      if (!correct) {
        console.log("wrong");
        vm.incorrect = true;
        $timeout( () => {
          vm.incorrect = false;
        }, 1000)
        rename.play();
 
      } else if (correct && counter < 5) {
        counter++;
        vm.show = false;
        vm.showCorrect = true;
        $timeout( ()=>{
        vm.showCorrect = false;
        }, 1000);
        happykids.play();
        console.log(counter);
      }

      if (counter === 5) {
        //redirects to winner page after 5 correct answers
        location.href = '#!/winner';
      }
    }

   
   function move() {
     let elem = document.getElementById("myBar");
     let height = 100;
     let id = setInterval(frame, 100); //bigger the number the slower it moves
     function frame() {
      if (height === 0) {
        clearInterval(id);
        location.href = '#!/loser';
      } else {
        height--;
        elem.style.height = height + '%';
        
      }
     }
      
    }
  // move();
   

  
    //Countdown timer that we might not need anymore

    //vm.countDown = 10;
    // $interval(function () {
    //   if (vm.countDown !== 0){
    //     console.log(vm.countDown--);
       
    //   }
    //   else if (vm.countDown === 0) {
    //     location.href = '#!/loser';
    //   }
    // }, 1000);


    function play(){
      let rename = document.getElementById("rename");
      // rename.play();
                }

    function happy(){
      let happykids = document.getElementById("happykids");
      // happykids.happy();
                }

    function sad () {
      let sadtrombone = document.getElementById("sadtrombone");
      console.log("sad"); 
      // sadtrombone.sad(); 
                }
     
  }]
  
}

angular.module("app").component("mainRoom", mainRoom);


