function check() {
    var q1 = document.quiz.q1.value;
    var q2 = document.quiz.q2.value;
    var q3 = document.quiz.q3.value;
    var q4 = document.quiz.q4.value;
    var q5 = document.quiz.q5.value;
    var q6 = document.quiz.q6.value;
    var q7 = document.quiz.q7.value;
    var q8 = document.quiz.q8.value;
    var q9 = document.quiz.q9.value;
    
    var count = 0;


    if (q1 == "pravilen1") {

        count++;
    }

    if (q2 == "pravilen") {
        count++;
    }

    if (q3 == "pravilen3") {
        count++;
    }

    if (q4 == "pravilen4") {
        count++;
    }

    if (q5 == "pravilen5") {
        count++;
    }

    if (q6 == "pravilen6") {

        count++;
    }

    if (q7 == "pravilen7") {

        count++;
    }

    if (q8 == "pravilen8") {

        count++;
    }

    if (q9 == "pravilen9") {

        count++;
    }

   
    var final = (count / 9) * 100
    alert("tvoj rezultat je " + final + "%");

    var elem = document.getElementsByClassName("nocolor");
    while (elem.length)
        elem[0].className = elem[0].className.replace(/\bnocolor\b/g, "");
}

function refresh() {
    window.location.reload();
} 