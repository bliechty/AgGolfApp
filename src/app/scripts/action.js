export function displayHoles (numberOfHoles) {
    $('.player-total-score-container').html('');
    $('.score-card').css('display', 'block');
    $('.tee-selection').css('display', 'block');
    $('.holes').html('');
    $('.holes').append(`<div id='first-column'>
            <div class='firstColumn'>Hole</div>
        </div>`);

    for (let i = 1; i <= numberOfHoles / 2; i++) {
        $('.holes').append(`<div id='col${i}' class='col'>
                <div class='boxes'>${i}</div>
            </div>`);
    }

    $('.holes').append(`<div id='out-score' class='scores'>
            <div class='score-boxes'>Out</div>
        </div>`);

    for (let i = numberOfHoles / 2 + 1; i <= numberOfHoles; i++) {
        $('.holes').append(`<div id='col${i}' class='col'>
            <div class='boxes'>${i}</div>
        </div>`);
    }

    $('.holes').append(`<div id='in-score' class='scores'>
            <div class='score-boxes'>In</div>
        </div>`);
    $('.holes').append(`<div id='total-score' class='scores'>
            <div class='score-boxes'>Total</div>
        </div>`);
}

export function displayScoreCardInfo (numberOfHoles, numberOfPlayers) {
    for (let i = 1; i <= numberOfPlayers; i++) {
        $('#first-column').append(`<input type='text' class='firstColumn playerName' placeholder='Player ${i} (Click to edit)'
            (keyup)='enterPlayerName(event, this, ${i - 1}, ${numberOfHoles})' (blur)='loseFocus(this)'>`);

        for (let j = 1; j <= numberOfHoles / 2; j++) {
            $(`#col${j}`).append(`<input type='text' id='p${i}h${j}' class='boxes playerScore'
                (keyup)='enterScore(event, this, ${i}, ${j - 1}, ${numberOfHoles})' (blur)='loseFocus(this)'>`);
        }

        $('#out-score').append(`<div id='outscore${i}' class='score-boxes'></div>`);

        for (let j = numberOfHoles / 2 + 1; j <= numberOfHoles; j++) {
            $(`#col${j}`).append(`<input type='text' id='p${i}h${j}' class='boxes playerScore'
                (keyup)='enterScore(event, this, ${i}, ${j - 1}, ${numberOfHoles})' (blur)='loseFocus(this)'>`);
        }

        $('#in-score').append(`<div id='inscore${i}' class='score-boxes'></div>`);
        $('#total-score').append(`<div id='totalscore${i}' class='score-boxes'></div>`);
    }
}

export function displayPar(holesArray, numberOfHoles) {
    let totalPar = 0;
    let outPar, inPar;
    $('#first-column').append(`<div class='firstColumn'>Par</div>`);

    for (let i = 1; i <= numberOfHoles / 2; i++) {
        totalPar += holesArray[i - 1].teeBoxes[0].par;
        $(`#col${i}`).append(`<div class='boxes'>${holesArray[i - 1].teeBoxes[0].par}</div>`);
    }

    outPar = totalPar;

    $('#out-score').append(`<div class='score-boxes'>${outPar}</div>`);

    for (let i = numberOfHoles / 2 + 1; i <= numberOfHoles; i++) {
        totalPar += holesArray[i - 1].teeBoxes[0].par;
        $(`#col${i}`).append(`<div class='boxes'>${holesArray[i - 1].teeBoxes[0].par}</div>`);
    }

    inPar = totalPar - outPar;

    $('#in-score').append(`<div class='score-boxes'>${inPar}</div>`);
    $('#total-score').append(`<div class='score-boxes' id='parTotal'>${totalPar}</div>`);
}

export function displayHandicap(holesArray, numberOfHoles) {
    let totalHandicap = 0;
    let outHandicap, inHandicap;
    $('#first-column').append(`<div class='firstColumn'>Handicap</div>`);

    for (let i = 1; i <= numberOfHoles / 2; i++) {
        totalHandicap += holesArray[i - 1].teeBoxes[0].hcp;
        $(`#col${i}`).append(`<div class='boxes'>${holesArray[i - 1].teeBoxes[0].hcp}</div>`);
    }

    outHandicap = totalHandicap;

    $('#out-score').append(`<div class='score-boxes'>${outHandicap}</div>`);

    for (let i = numberOfHoles / 2 + 1; i <= numberOfHoles; i++) {
        totalHandicap += holesArray[i - 1].teeBoxes[0].hcp;
        $(`#col${i}`).append(`<div class='boxes'>${holesArray[i - 1].teeBoxes[0].hcp}</div>`);
    }

    inHandicap = totalHandicap - outHandicap;

    $('#in-score').append(`<div class='score-boxes'>${inHandicap}</div>`);
    $('#total-score').append(`<div class='score-boxes'>${totalHandicap}</div>`);
}

export function displayYardage(holesArray, numberOfHoles, tee) {
  $('.yardage').html('');
  let totalYards = 0;
  let outYards, inYards;
  $('.yardage').append(`<div class='firstColumn'>Yardage</div>`);

  for (let i = 1; i <= numberOfHoles / 2; i++) {
      totalYards += holesArray[i - 1].teeBoxes[tee].yards;
      $(`.yardage`).append(`<div class='boxes'>${JSON.stringify(holesArray[i - 1].teeBoxes[tee].yards)}</div>`);
  }

  outYards = totalYards;

  $('.yardage').append(`<div class='score-boxes'>${outYards}</div>`);

  for (let i = numberOfHoles / 2 + 1; i <= numberOfHoles; i++) {
      totalYards += holesArray[i - 1].teeBoxes[tee].yards;
      $(`.yardage`).append(`<div class='boxes'>${JSON.stringify(holesArray[i - 1].teeBoxes[tee].yards)}</div>`);
  }

  inYards = totalYards - outYards;

  $('.yardage').append(`<div class='score-boxes'>${inYards}</div>`);
  $('.yardage').append(`<div class='score-boxes'>${totalYards}</div>`);
}