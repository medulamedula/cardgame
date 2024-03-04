const suits = ['clubs', 'hearts', 'spades', 'diamonds'];
            const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

            var currentCard = {
                suit: '',
                valueIndex: 0
            };

            
            function chooseRandom() {
                const suit = Math.floor(Math.random() * suits.length);
                const value = Math.floor(Math.random() * values.length);
                currentCard.suit = suits[suit];
                currentCard.valueIndex = value;
            }

            function renderCurrentCard() {
                const currentCardPath = `${values[currentCard.valueIndex]}_of_${currentCard.suit}.png`;
                const card = document.createElement('img');
                card.src = `./images/${currentCardPath}`;
                card.style.width = '200px';
                document.getElementById('deck').appendChild(card);
            }

            chooseRandom();
            renderCurrentCard();

            function choose(choise) {
                const nextCard = {
                    suit: '',
                    valueIndex: -1
                };
                const suit = Math.floor(Math.random() * suits.length);
                const value = Math.floor(Math.random() * values.length);
                nextCard.suit = suits[suit];
                nextCard.valueIndex = value;

                const curr = currentCard;

                currentCard = nextCard;
                renderCurrentCard();
                if (choise == 'high') {
                    if (nextCard.valueIndex > curr.valueIndex) {
                        //
                    } else {
                        alert('Wrong');
                    }
                } else {
                    if (nextCard.valueIndex < curr.valueIndex) {
                        //
                    } else {
                        alert('Wrong');
                    }
                }
            }

            function updateTime() {
                var now = new Date();
                var clock = document.getElementById('clock');
                
                var hours = now.getHours();
                var minutes = now.getMinutes();
                var seconds = now.getSeconds();
                
                hours = (hours < 10) ? '0' + hours : hours;
                minutes = (minutes < 10) ? '0' + minutes : minutes;
                seconds = (seconds < 10) ? '0' + seconds : seconds;
                
                var timeString = hours + ':' + minutes + ':' + seconds;
                
                var day = now.getDate();
                var month = now.getMonth() + 1;
                var year = now.getFullYear();
                
                var dateString = day + '/' + month + '/' + year;
                
                clock.textContent = timeString + ' ' + dateString;
              }
              
              
              setInterval(updateTime, 1000);
              
              
              updateTime();