function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

$('#createGroups').on('click', function(e) {
  e.preventDefault();

  var classroom = [
    {
      name: 'Abdul Barre',
      score: 2
    },
    {
      name: 'Alex Griep',
      score: 3
    },
    {
      name: 'Ashley Wegwerth',
      score: 3
    },

    {
      name: 'Aubrey Koski',
      score: 1
    },

    {
      name: 'Balaji Manoharan',
      score: 3
    },

    {
      name: 'Baraka Ibrahim',
      score: 1
    },

    {
      name: 'Bashir Raghe',
      score: 1
    },

    {
      name: 'Ben Honken',
      score: 3
    },

    {
      name: 'Blake Pierce',
      score: 1
    },

    {
      name: 'B Spice',
      score: 3
    },

    {
      name: 'Brooke Kumar',
      score: 2
    },
    {
      name: 'Bryan Iund',
      score: 2
    },
    {
      name: "Elizabeth O'Leary",
      score: 3
    },
    {
      name: 'Hamza Abdikarim',
      score: 1
    },

    {
      name: 'Henry Johnson',
      score: 2
    },

    {
      name: 'Issa Issa',
      score: 3
    },
    {
      name: 'Jacob Rosenbaum',
      score: 2
    },
    {
      name: 'Jonathan Carrasco',
      score: 1
    },
    {
      name: 'Elia Facundo Orta Carrasco',
      score: 1
    },
    {
      name: 'James Botham',
      score: 3
    },
    {
      name: 'James Caples',
      score: 2
    },
    {
      name: 'Johnny Yang',
      score: 3
    },
    {
      name: 'Ka Vang',
      score: 1
    },
    {
      name: 'Kayla Kuhlman',
      score: 3
    },
    {
      name: 'Keith Kleinschmidt',
      score: 2
    },
    {
      name: 'Kyle Betlach',
      score: 3
    },
    {
      name: 'Mai Xiong',
      score: 2
    },
    {
      name: 'Mauricio Gomez',
      score: 3
    },
    {
      name: 'Mohamed Abdi',
      score: 1
    },
    {
      name: 'Haylee Thomas-Kuhlmann',
      score: 3
    },
    {
      name: 'Mohamed Ahmed',
      score: 1
    },

    {
      name: 'Ranji Ramroop',
      score: 3
    },
    {
      name: 'Tasha Tran',
      score: 1
    },
    {
      name: 'Tim Scheve',
      score: 2
    },
    {
      name: 'Richard Tshabalala',
      score: 1
    },
    {
      name: 'Yogeeta Gajway',
      score: 1
    },
    {
      name: 'Zhen yong Chen',
      score: 3
    },
    {
      name: 'Abdullahi Hassans',
      score: 1
    }
  ];
  var classroomHolder = [...classroom];
  console.log(classroomHolder);
  var classroomHolder;
  shuffle(classroomHolder);
  var arrayHolder = [];
  var groupHolder = [];
  var ScoreTotal = 0;

  $('#group-holder').empty();
  var numberOfGroups = parseInt($('#inputGroupSelect').val());
  var ScoreAverage = 0;
  var groupAverage = 0;
  var classScore = 0;
  for (var i = 0; i < classroom.length; i++) {
    classScore = classScore + classroom[i].score;
  }
  ScoreAverage = classScore / classroom.length;
  groupAverage = ScoreAverage * numberOfGroups - 1;
  if (numberOfGroups == 'Choose...') {
    alert('choose a number of groups to split into');
  } else {
    var resetCounter = 0;
    for (var i = 0; i < classroom.length; i++) {
      if (resetCounter === 30) {
        i = 0;
        resetCounter = 0;
        classroomHolder = [...classroom];
        arrayHolder = [];
        groupHolder = [];
      } else if (groupHolder.length === numberOfGroups) {
        i--;
        for (var j = 0; j < groupHolder.length; j++) {
          ScoreTotal = ScoreTotal + groupHolder[j].score;
        }
        if (ScoreTotal < groupAverage) {
          ScoreTotal = 0;
          resetCounter++;
          for (var j = 0; j < groupHolder.length; j++) {
            classroomHolder.push(groupHolder[j]);
          }
          groupHolder = [];
          i = i - numberOfGroups;
          shuffle(classroomHolder);
          console.log(classroomHolder);
        } else {
          ScoreTotal = 0;
          resetCounter = 0;
          arrayHolder.push(groupHolder);
          groupHolder = [];
        }
      } else if (classroomHolder.length < numberOfGroups) {
        var remaing = classroomHolder.length;
        console.log(classroomHolder);
        for (var j = 0; j < remaing; j++) {
          arrayHolder[j].push(classroomHolder.shift());
        }
        for (var i = 0; i < arrayHolder.length; i++) {
          var array = arrayHolder[i];
          var div = $('<div>');
          div.addClass('col-md-3');
          var div2 = $('<div>');
          div2.attr('id', 'div' + i);
          div2.addClass('bg-dark holder');
          div.append(div2);
          var groupNumber = $('<h4>');
          groupNumber.text(`Group ${i}`);
          $('#div' + i).append(groupNumber);
          $('#group-holder').append(div);
          for (var j = 0; j < array.length; j++) {
            var p = $('<p>');
            p.text(array[j].name);
            $('#div' + i).append(p);
          }
        }
        console.log(classroomHolder);
        return;
      } else {
        groupHolder.push(classroomHolder.shift());
      }
      console.log(arrayHolder);
    }
  }
});
