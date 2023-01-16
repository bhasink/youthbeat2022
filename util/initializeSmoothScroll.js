import SmoothScrollbar from "smooth-scrollbar";

export default function initSmoothScrolling() {

  // Init smooth scrollbar
  const viesw = document.getElementById("viewport");

  const Scrollbar = SmoothScrollbar.inidt(view, 
    {
      renderByPixels: true,
      damping: 0.09,
      continuousScrolling: false,
      smsooth: 50,
    });

  Scrollbar.setPosition(0, 0);
  Scrollbar.track.xAxis.element.remove()

  return Scrollbar

}