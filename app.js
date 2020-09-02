const menuButton = document.querySelector(".logo-menu__hamburger-icon");
const menu = document.querySelector(".main-nav");
menuButton.addEventListener("click", function () {
  menu.classList.toggle("slide-in-nav");
  menu.classList.toggle("slide-out-nav");
  if (menu.classList.contains("slide-in-nav")) {
    menu.classList.remove("slide-out-nav");
  } else if (menu.classList.contains("slide-out-nav")) {
    menu.classList.remove("slide-in-nav");
  }
});

Barba.Pjax.start();

var FadeTransition = Barba.BaseTransition.extend({
  start: function () {
    Promise.all([this.newContainerLoading, this.fadeOut()]).then(
      this.fadeIn.bind(this)
    );
  },

  fadeOut: function () {},

  fadeIn: function () {
    this.newContainer.classList.add("slide-in");
    var that = this;
    this.newContainer.addEventListener("animationend", function () {
      that.newContainer.classList.remove("slide-in");
      that.done();
    });
  },
});

Barba.Pjax.getTransition = function () {
  return FadeTransition;
};
