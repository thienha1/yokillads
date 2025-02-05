var Level = 0;
var fix = 0;
var monitor = setInterval(function() {
    var elem = document.activeElement;

    if (elem && elem.tagName == 'BODY') {
        clearInterval(monitor);
        fix = 1;

        if (document.visibilityState === 'visible') {
            if (Level == 0 && fix == 1) {
                document.getElementById("plan1").style.display = "none";
                document.getElementById("plan2").style.display = "block";

                Level = Level + 1;
                tit();
                fix = 0;
            } else if (Level == 1 && fix == 1) {
                Level = Level + 1;
                document.getElementById("plan2").style.display = "none";
                document.getElementById("plan3").style.display = "block";
                tit();
                fix = 0;
            } else if (Level == 2 && fix == 1)

            {
                Level = Level + 1;
                document.getElementById("plan3").style.display = "none";
                document.getElementById("plan4").style.display = "block";
                tit();
                fix = 0;
            } else if (Level == 3 && fix == 1)

            {
                Level = Level + 1;
                document.getElementById("plan4").style.display = "none";
                document.getElementById("plan5").style.display = "block";
                tit();
                fix = 0;
            } else if (Level == 4 && fix == 1)

            {
                Level = Level + 1;
                document.getElementById("plan5").style.display = "none";
                document.getElementById("plan6").style.display = "block";
                tit();
                fix = 0;
            } else

            {}


        } else {

        }

    }
}, 100);

function tit() {

    var monitor = setInterval(function() {
        var elem = document.activeElement;

        if (elem && elem.tagName == 'div') {
            clearInterval(monitor);
            fix = 1;
            console.log("done");
        }
    }, 100);

}
