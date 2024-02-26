var fastheal=document.getElementById('fastheal')
var fasthit=document.getElementById('fasthit')
var fastpunch=document.getElementById('fastpunch')
var quickheal=document.getElementById('quickheal')
var victory=document.getElementById('victory')
var player1attack=document.getElementById('attackp')
var player2attack=document.getElementById('attackr')
var player1heal=document.getElementById('healq')
var player2heal=document.getElementById('heals')
var winnerup=document.getElementById('winnerupdate')
var player1scoreup=document.getElementById('player1scoreup')
var player2scoreup=document.getElementById('player2scoreup')
var restbutton=document.getElementById('restbutton')
var player1score=100
var player2score=100
class fighter{
  constructor(p1score,p2score){
     this.p1score=p1score
     this.p2score=p2score
  }

  player1fastpunchbeat(){
     var p=Math.floor(Math.random()*20)
     this.p2score-=p;
     player2score-=p;
     fastpunch.play();
     player2scoreup.innerHTML=this.p2score
     if(this.p1score <= 0 && this.p2score > 0){
       winnerup.innerHTML = 'Player 2 Wins';
       victory.play();
     }
     else if(this.p2score <= 0 && this.p1score > 0){
       winnerup.innerHTML = 'Player 1 Wins';
        victory.play();
     }
  }

  player1quickhit(){
     var p=Math.floor(Math.random()*20)
     this.p2score-=p;
     player2score-=p;
     fasthit.play();
     player2scoreup.innerHTML=this.p2score
     if(this.p1score <= 0 && this.p2score > 0){
       winnerup.innerHTML = 'Player 2 Wins';
       victory.play();
     }
     else if(this.p2score <= 0 && this.p1score > 0){
       winnerup.innerHTML = 'Player 1 Wins';
        victory.play();
     }
  }

  player2quickhit(){
     var p=Math.floor(Math.random()*20)
     this.p1score-=p;
     player1score-=p;
     fasthit.play();
     player1scoreup.innerHTML=this.p1score
     if(this.p1score <= 0 && this.p2score > 0){
       winnerup.innerHTML = 'Player 2 Wins';
       victory.play();
     }
     else if(this.p2score <= 0 && this.p1score > 0){
       winnerup.innerHTML = 'Player 1 Wins';
        victory.play();
     }
  }

  player1fastheal(){
     if(this.p1score<100){
        var n1=this.p1score;
        var n2=100;
        var n3=n2-n1;
        if(n3==1){
           this.p1score+=n3
           player1score+=n3;
           if(this.p1score>0 && this.p2score>0){
            winnerup.innerHTML=''
           }
        }
        else{
         n3=Math.floor(n3/2)
         this.p1score+=n3
         player1score+=n3;
         if(this.p1score>0 && this.p2score>0){
            winnerup.innerHTML=''
         }
        }
        fastheal.play()
        player1scoreup.innerHTML=this.p1score
     }
  }

  player1quickheal(){
     if(this.p1score<100){
        var n1=this.p1score;
        var n2=100;
        var n3=n2-n1;
        if(n3==1){
           this.p1score+=n3
           player1score+=n3;
           if(this.p1score>0 && this.p2score>0){
            winnerup.innerHTML=''
           }
        }
        else{
         n3=Math.floor(n3/2)
         this.p1score+=n3
         player1score+=n3;
         if(this.p1score>0 && this.p2score>0){
            winnerup.innerHTML=''
         }
        }
        quickheal.play()
        player1scoreup.innerHTML=this.p1score
     }
  }

  player2quickheal(){
     if(this.p2score<100){
        var n1=this.p2score;
        var n2=100;
        var n3=n2-n1;
        if(n3==1){
           this.p2score+=n3
           player2score+=n3;
           if(this.p1score>0 && this.p2score>0){
            winnerup.innerHTML=''
           }
        }
        else{
         n3=Math.floor(n3/2)
         this.p2score+=n3
         player2score+=n3;
         if(this.p1score>0 && this.p2score>0){
            winnerup.innerHTML=''
         }
        }
        quickheal.play()
        player2scoreup.innerHTML=this.p2score
        
     }
  }

  player2fastpunchbeat(){
     var p=Math.floor(Math.random()*20)
     this.p1score-=p;
     player1score-=p;
     fastpunch.play();
     player1scoreup.innerHTML=this.p1score
     if(this.p1score <= 0 && this.p2score > 0){
       winnerup.innerHTML = 'Player 2 Wins';
       victory.play();
     }
     else if(this.p2score <= 0 && this.p1score > 0){
       winnerup.innerHTML = 'Player 1 Wins';
        victory.play();
     }
  }

  player2fastheal(){
     if(this.p2score<100){
        var n1=this.p2score;
        var n2=100;
        var n3=n2-n1;
        if(n3==1){
           this.p2score+=n3
           player2score+=n3;
           if(this.p1score>0 && this.p2score>0){
            winnerup.innerHTML=''
           }
        }
        else{
         n3=Math.floor(n3/2)
         this.p2score+=n3
         player2score+=n3;
         if(this.p1score>0 && this.p2score>0){
            winnerup.innerHTML=''
         }
        }
        fastheal.play()
        player2scoreup.innerHTML=this.p2score
     }
  }

  reset(){
     player1score=100
     player2score=100
     this.p1score=100
     this.p2score=100
     player2scoreup.innerHTML=100
     player1scoreup.innerHTML=100
     winnerup.innerHTML=''
  }

}
const fight=new fighter(player1score,player2score)
document.addEventListener('keydown',function(e){
  if(e.key=='p'){
     fight.player1fastpunchbeat()
  }
  else if(e.key=='q'){
     fight.player1fastheal()
    
  }
  else if(e.key=='r'){
     fight.player2fastpunchbeat()
  }

  else if(e.key=='s'){
     fight.player2fastheal()
  }
})

player1attack.onclick=()=>fight.player1quickhit()
player2attack.onclick=()=>fight.player2quickhit()
player1heal.onclick=()=>fight.player1quickheal()
player2heal.onclick=()=>fight.player2quickheal()
restbutton.onclick=()=>fight.reset()
