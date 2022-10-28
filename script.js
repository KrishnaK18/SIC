function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function compute()
{
    var p = document.getElementById("principal");
    var pr=Number(p.value);
    if(pr<1)
    {
        alert("Enter a positive number");
        p.focus();
        return false;
    }

    var r = document.getElementById("rate").value;
    var y = document.getElementById("years").value;
    //var si = Number((p*r*y)/100)+Number(p);
    //var k = Number(y)+2022;
    var year = new Date().getFullYear()+parseInt(y);

    var newItem = `If you deposit <mark> ${pr}</mark> ,<br>
     at an Interest rate of <mark>${r}%</mark> , <br>
      You will receive an amount of <mark>${pr*r*y/100}</mark> ,<br> in the year <mark>${year}</mark>.<br>`;

    document.getElementById("result").innerHTML=newItem;
}

function reset()
{
    document.location.reload();
}