"use strict";

var _this3 = void 0;
function _newArrowCheck(n, r) {
  if (n !== r) throw new TypeError("Cannot instantiate an arrow function");
}
function ꦩꦲꦫꦺꦥ꧀() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
function animated() {
  var _this = this;
  var rules_in = {
    "no-nsfw": "NSFW tidak diperbolehkan",
    ramah: "Grup ramah semua umur",
    "no-ofensif": "Tidak menerima orang ofensif",
    "no-spam": "Tidak boleh spamming stiker!",
    "no-admin-force": "Jangan maksa minta jadi admin!",
    bergaul: "Harus bergaul (opsional)",
    "allow-promote": "Diperbolehkan untuk promosi!",
    "no-LGBT": "Tidak menerima fan's LGBT+",
    "no-vulgar": "Tidak mengirim media yang berbau vulgar",
    safe: "Tidak merugikan siapa pun",
    no_spams: "🟩 ❯❯ Awal: spam stiker",
    "no-gore": "🟧 ❯❯ Menengah: bahas gore, dsb",
    "lat-no-lgbt": "🟥 ❯❯ Terakhir: LGBT+"
  };
  window.onload = function () {
    setTimeout(function () {
      document.getElementById("preloader").style.display = "none";
      document.getElementById("content").style.display = "block";
    }, 2000);
  };
  /*
   * FadeIn & Out
   *
   *  $(window).on("load", function () {
   *    $("#preloader").fadeOut(1000, function () {
   *        $("#content").fadeIn(1000);
   *    });
   * });
   *
   */
  Object.keys(rules_in).forEach(
    function (id, index) {
      _newArrowCheck(this, _this);
      var element = document.getElementById(id);
      if (element) {
        var text = rules_in[id];
        element.innerHTML = "";
        var body = "";
        var _loop = function _loop(i) {
          var _this2 = this;
          setTimeout(
            function () {
              _newArrowCheck(this, _this2);
              body += text[i];
              element.innerHTML = body;
            }.bind(this),
            i * 100
          );
        };
        for (var i = 0; i < text.length; i++) {
          _loop(i);
        }
      }
    }.bind(this)
  );
}
function ꦲꦠꦸꦫꦤ꧀() {
  var OwO = document.getElementById("rule");
  if (OwO) {
    var UwU = OwO.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: UwU,
      behavior: "smooth"
    });
  }
}
function ꦒꦩ꧀ꦧꦂ() {
  var QwQ = document.getElementById("glr");
  if (QwQ) {
    var TwT = QwQ.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: TwT,
      behavior: "smooth"
    });
  }
}
function ꦕꦺꦴꦥꦱ꧀() {
  navigator.clipboard.writeText(
    "https://chat.whatsapp.com/KscMAK1oWI1Jnut2xLMIQ0"
  );
  var tooltip = document.querySelector(".notif");
  tooltip.classList.add("muncul");
  setTimeout(function () {
    tooltip.classList.remove("muncul");
  }, 2000);
}
function ᬧᬶᬮᬶᬳᬦ᭄ᬩᬳᬲ() {
  var basa = document.querySelector(".cls");
  basa.classList.add("on");
}
function menu() {
  var a = document.querySelector(".side-menu");
  var b = document.querySelector(".bkg");
  a.classList.toggle("aktif");
  b.classList.toggle("aktf");
}
function mn() {
  var a = document.querySelector(".side-menu");
  var b = document.querySelector(".bkg");
  a.classList.remove("aktif");
  b.classList.add("pasif");
  setTimeout(function () {
    b.classList.remove("pasif");
    b.classList.remove("aktf");
  }, 550);
}
function ᬓᬾᬮᬸᬯᬃ() {
  var keluar = document.querySelector(".cls");
  keluar.classList.add("off");
  setTimeout(function () {
    keluar.classList.remove("on");
    keluar.classList.remove("off");
  }, 600);
}
document.addEventListener(
  "DOMContentLoaded",
  function () {
    var _this5 = this;
    _newArrowCheck(this, _this3);
    var slides = document.querySelectorAll(".slide");
    var prevBtn = document.querySelector(".prev-btn");
    var nextBtn = document.querySelector(".next-btn");
    var currentSlide = 0;
    function showSlide(index) {
      var _this4 = this;
      if (slides.length === 0) return;
      slides.forEach(
        function (slide) {
          _newArrowCheck(this, _this4);
          slide.classList.remove("aktif");
        }.bind(this)
      );
      currentSlide = (index + slides.length) % slides.length;
      slides[currentSlide].classList.add("aktif");
    }
    showSlide(currentSlide);
    nextBtn.addEventListener(
      "click",
      function () {
        _newArrowCheck(this, _this5);
        showSlide(currentSlide + 1);
      }.bind(this)
    );
    prevBtn.addEventListener(
      "click",
      function () {
        _newArrowCheck(this, _this5);
        showSlide(currentSlide - 1);
      }.bind(this)
    );
    var autoSlideInterval = setInterval(
      function () {
        _newArrowCheck(this, _this5);
        showSlide(currentSlide + 1);
      }.bind(this),
      3000
    );
    var slideshowContainer = document.querySelector(".slideshow-container");
    slideshowContainer.addEventListener(
      "mouseenter",
      function () {
        _newArrowCheck(this, _this5);
        clearInterval(autoSlideInterval);
      }.bind(this)
    );
    slideshowContainer.addEventListener(
      "mouseleave",
      function () {
        var _this6 = this;
        _newArrowCheck(this, _this5);
        autoSlideInterval = setInterval(
          function () {
            _newArrowCheck(this, _this6);
            showSlide(currentSlide + 1);
          }.bind(this),
          3000
        );
      }.bind(this)
    );
    animated();
  }.bind(void 0)
);