



hush()

bpm  = 70

a.hide()
a.show()

voronoi(8,1)
  .modulateRotate(osc(8).rotate(Math.sin(time)*3), .1)
  .thresh(.5)
  .modulateRotate(osc(8),.3)
  .thresh(.7)
  .contrast(0.7)
  .diff(src(o0).scale(.4))
  .modulateScale(osc(5).modulateRotate(o0, 9))
  .scale(() => a.fft[1]*1.5)
  .brightness([.01].smooth().fast(2))
  // .invert(.01)
  .out()
