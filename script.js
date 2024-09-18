var t=gsap.timeline();
t.from("p", {
  y: -50,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 0.8,
});
t.from(".main h1", {
  x: -100,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 0.8,
});
t.from('img',{
  x: 100,
  rotate: 45,
  opacity: 0,
  duration: 0.8,
  delay: 0.2,
  stagger: 0.8,
})
