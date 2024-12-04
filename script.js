function askEightBall() {
    const userNameInput = document.getElementById('userName').value.trim();
    const userQuestionInput = document.getElementById('userQuestion').value.trim();
    const eightBallResponse = document.getElementById('eightBallResponse');
    
    
    if (!userQuestionInput) {
      eightBallResponse.textContent = "Please ask a question!";
      return;
    }
  
    
    const userName = userNameInput || 'User';
    console.log(`${userName ? `Hello, ${userName}!` : 'Hello!'}`);
    console.log(`${userName} asked: ${userQuestionInput}`);
  
    
    const randomNumber = Math.floor(Math.random() * 8);
    let eightBall = '';
    switch (randomNumber) {
      case 0: eightBall = 'It is certain'; break;
      case 1: eightBall = 'It is decidedly so'; break;
      case 2: eightBall = 'Reply hazy, try again'; break;
      case 3: eightBall = 'Cannot predict now'; break;
      case 4: eightBall = 'Do not count on it'; break;
      case 5: eightBall = 'My sources say no'; break;
      case 6: eightBall = 'Outlook not so good'; break;
      case 7: eightBall = 'your just wrong'; break;
      case 8: eightBall = 'madam cooper says yes '; break;
      default: eightBall = 'Signs point to yes'; break;
    }
  
    
    eightBallResponse.textContent = eightBall;
  }