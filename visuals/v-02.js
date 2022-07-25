

hush()

bpm = 140/4


s0.initImage('http://pixapool.com/wp-content/uploads/2019/02/pixapool_QR8A1453.jpg')
src(o0)
  .layer(
    src(s0)
      .scale(() => 0.5 + a.fft[0]* 0.5)
      // .scale(0.2)
      .luma(.4)
      .invert()
      .kaleid([1, 2, 3, 7])
      .rotate(.2, .1)
      .contrast(2)
      .scrollX(.1, -.02)
      .scrollY(.5)
    )
    // .modulatePixelate(src(o0), [250, 500, 1000], [500, 2000])
  .out(o0)


a.show()

a.hide()

hush()
