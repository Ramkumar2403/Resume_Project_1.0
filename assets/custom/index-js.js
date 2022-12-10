//ACTIVE LINK JS
function activate(id) {
  var li = document.getElementsByTagName("UL").item(0).children;
  for (j = 0; j <= li.length - 1; j++) {
    //   alert(li[j].getElementsByTagName('a')[0].id );
    li[j].getElementsByTagName("a")[0].classList.remove("active");
    if (li[j].getElementsByTagName("a")[0].id === id) {
      // alert(li[j].getElementsByTagName("a")[0].id+" same "+id);
      li[j].getElementsByTagName("a")[0].classList.add("active");
    }else if("top" == id){
      document.getElementById("home").classList.add("active");
    }
  }
}
//ACTIVE LINK JS END

//TEXT_REPEAT
class TxtRotate {
  constructor(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  }
  tick() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  }
}

window.onload = function () {
  var ele = document.getElementsByClassName("txt-rotate");
  for (var i = 0; i < ele.length; i++) {
    var toRotate = ele[i].getAttribute("data-rotate");
    var period = ele[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(ele[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
//TEXT_REPEAT END
//SCROLL_EVENT FLOAT_BUUTON
$(function () {
  // Set a same-site cookie for first-party contexts
  document.cookie = 'cookie1=value1; SameSite=Lax';
  // Set a cross-site cookie for third-party contexts
  document.cookie = 'cookie2=value2; SameSite=None; NotSecure;';
  
  var element = document.getElementById("top");

  document.getElementById("home").classList.add("active");

  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();

    if (scrollTop > $("#scl_btn_area").offset().top) {
      element.classList.remove("float-before");
      element.classList.add("float");
      // styleBySelector[".float"].visibility = "visible";
    } else {
      element.classList.add("float-before");
      // styleBySelector[".float"].visibility = "hidden";
    }
  });
});
//SCROLL_EVENT FLOAT_BUUTON END
