const slides = [
{
  eachSlide: 'img src=' },

{
  eachSlide: 'url(https://unsplash.it/1900/1024/?image=291)' },

{
  eachSlide: 'url(https://unsplash.it/1900/1024/?image=786)' },

{
  eachSlide: 'url(https://unsplash.it/1900/1024/?image=768)' },

{
  eachSlide: 'url(https://unsplash.it/1900/1024/?image=726)' },

{
  eachSlide: 'url(https://unsplash.it/1900/1024/?image=821)' }];



const Slider = () => {
  const [active, setActive] = React.useState(0);
  const [autoplay, setAutoplay] = React.useState(0);
  const max = slides.length;

  const intervalBetweenSlides = () => autoplay && setActive(active === max - 1 ? 0 : active + 1);

  React.useEffect(() => {
    const interval = setInterval(() => intervalBetweenSlides(), 3000);
    return () => clearInterval(interval);
  });

  const toggleAutoPlay = () => setAutoplay(!autoplay);

  const nextOne = () => active < max - 1 && setActive(active + 1);

  const prevOne = () => active > 0 && setActive(active - 1);

  const isActive = value => active === value && 'active';

  const setSliderStyles = () => {
    const transition = active * -100;

    return {
      width: slides.length * 100 + 'vw',
      transform: 'translateX(' + transition + 'vw)' };

  };

  const renderSlides = () => slides.map((item, index) => /*#__PURE__*/
  React.createElement("div", {
    className: "each-slide",
    key: index,
    style: { backgroundImage: item.eachSlide } }));



  const renderDots = () => slides.map((silde, index) => /*#__PURE__*/ // check index
  React.createElement("li", {
    className: isActive(index) + ' dots',
    key: index }, /*#__PURE__*/
  React.createElement("button", { onClick: () => setActive(index) }, /*#__PURE__*/
  React.createElement("span", null, "\u25CF"))));




  const renderPlayStop = () => autoplay ? /*#__PURE__*/

  React.createElement("svg", { fill: "#FFFFFF", height: "24", viewBox: "0 0 24 24", width: "24" }, /*#__PURE__*/
  React.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }), /*#__PURE__*/
  React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" })) : /*#__PURE__*/



  React.createElement("svg", { fill: "#FFFFFF", height: "24", viewBox: "0 0 24 24", width: "24" }, /*#__PURE__*/
  React.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }), /*#__PURE__*/
  React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" }));



  const renderArrows = () => /*#__PURE__*/
  React.createElement(React.Fragment, null, /*#__PURE__*/
  React.createElement("button", {
    type: "button",
    className: "arrows prev",
    onClick: () => prevOne() }, /*#__PURE__*/
  React.createElement("svg", { fill: "#FFFFFF", width: "50", height: "50", viewBox: "0 0 24 24" }, /*#__PURE__*/
  React.createElement("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" }), /*#__PURE__*/
  React.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }))), /*#__PURE__*/


  React.createElement("button", {
    type: "button",
    className: "arrows next",
    onClick: () => nextOne() }, /*#__PURE__*/
  React.createElement("svg", { fill: "#FFFFFF", height: "50", viewBox: "0 0 24 24", width: "50" }, /*#__PURE__*/
  React.createElement("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" }), /*#__PURE__*/
  React.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }))));





  return /*#__PURE__*/(
    React.createElement("section", { className: "slider" }, /*#__PURE__*/
    React.createElement("div", {
      className: "wrapper",
      style: setSliderStyles() },
    renderSlides()),

    renderArrows(), /*#__PURE__*/
    React.createElement("ul", { className: "dots-container" },
    renderDots()), /*#__PURE__*/

    React.createElement("button", {
      type: "button",
      className: "toggle-play",
      onClick: toggleAutoPlay },
    renderPlayStop())));



};

ReactDOM.render( /*#__PURE__*/React.createElement(Slider, null), document.getElementById('app'));