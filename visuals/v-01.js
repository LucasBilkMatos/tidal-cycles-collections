osc(107, 0, 0.7)
  .color(2, 0, 6)
  .rotate(0, -0.08)
  .modulateRotate(o1, a.fft[1]*-2)
  .out(o0)
osc(33)
  .rotate(5, 0.8)
  .modulateRotate(o0, () => (a.fft[0]*2))
  .out(o1)
