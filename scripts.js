// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function(){
let btnTakeOff= this.document.getElementById('takeoff'); 
btnTakeOff.addEventListener('click', function(){
    let isReadyForTakeOff = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if(isReadyForTakeOff)
    {
        let flightStatus= document.getElementById('flightStatus')
        flightStatus.innerHTML= 'Shuttle in flight.';
        let shuttleBackground = document.getElementById('shuttleBackground');
        shuttleBackground.setAttribute('style','background-color:blue');
        let spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
        spaceShuttleHeight.innerHTML='10000';
    }
});

let landing= this.document.getElementById('landing');
landing.addEventListener('click', function(){
        window.alert('The shuttle is landing. Landing gear engaged.');
        let flightStatus= document.getElementById('flightStatus')
        flightStatus.innerHTML= 'The shuttle has landed.';
        let shuttleBackground = document.getElementById('shuttleBackground');
        shuttleBackground.setAttribute('style','background-color:green');
        let spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
        spaceShuttleHeight.innerHTML='0';
    
});


let missionAbort= this.document.getElementById('missionAbort');
missionAbort.addEventListener('click', function(){
    let isMissionAbort = window.confirm("Confirm that you want to abort the mission.");
    if(isMissionAbort)
    {
        let flightStatus= document.getElementById('flightStatus')
        flightStatus.innerHTML= 'Mission aborted.';
        let shuttleBackground = document.getElementById('shuttleBackground');
        shuttleBackground.setAttribute('style','background-color:green');
        let spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
        spaceShuttleHeight.innerHTML='0';
    }
    
});
let rocket= this.document.getElementById('rocket');
let top=0;
let left=0;
let upBtn = document.getElementById('up');
rocket.style.position='relative';
upBtn.addEventListener('click', function(){   
        let spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
        let heightInNumber = Number(spaceShuttleHeight.innerText);
        heightInNumber +=10000;
        spaceShuttleHeight.innerText=heightInNumber;
        top-=10;
        if(top < 0)
        {
            top=0;
        }
        document.getElementById('rocket').style.top= (top - 10) +'px';
  });

  let downBtn = document.getElementById('down');
 
  downBtn.addEventListener('click', function(){   
        let spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
        let heightInNumber = Number(spaceShuttleHeight.innerText);
        heightInNumber -=10000;
        spaceShuttleHeight.innerText=heightInNumber;
        top+=10;
        document.getElementById('rocket').style.top= (top - 10) +'px';
  });

  let leftBtn = document.getElementById('left'); 
  leftBtn.addEventListener('click', function(){         
        left-=10;
        if(top < 0)
        {
            top=0;
        }
        document.getElementById('rocket').style.left = (left - 10) +'px';       
  });
  let rightBtn = document.getElementById('right'); 
  rightBtn.addEventListener('click', function(){         
        left+=10;
        let widthOfBox= shuttleBackground.offetWidth - 75;
        if(widthOfBox < left)
        {
            left= widthOfBox;
        }
        document.getElementById('rocket').style.left= (left - 10) +'px';      
  });

});