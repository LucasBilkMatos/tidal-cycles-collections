s0.initImage('http://localhost:8081/fish-01.png')
src(o0)
  .layer(src(o0).scale(.99))
  .layer(src(s0).scale(()=> 0.8 + a.fft[0]*0.05).repeat(1,1))
  .contrast(3)
  .color(.3,.7,.6)
  // .invert(.1)
  .contrast(2.5)
  .scale(1)
  .kaleid(1)
  .scrollX(.2, .01)
  .out(o0)

hush()



s0.initImage('http://localhost:8081/fish-01.png')
src(o0)
  .layer(src(o0).scale(.99))
  .layer(src(s0).scale(()=> .7 + a.fft[0]*0.02).repeat(2,2))
  .contrast(3)
  .color(.1,.8,.9)
  // .invert(.1)
  .contrast(2.5)
  .scale(1)
  // .rotate(.2,.1)
  .kaleid(1)
  .scrollX(.2, .01)
  .out(o0)






  s0.initImage('http://localhost:8081/fish-01.png')
  src(o0)
    .layer(src(o0).scale(.99))
    .layer(src(s0).scale(()=> 0.3 + a.fft[0]*0.05).repeat(2,2))
    .contrast(3)
    .color(.2,.7,.1)
    // .invert(.1)
    .contrast(2.5)
    .scale(1)
    .kaleid(1)
    .scrollX(.1, .01)
    .out(o0)


speed = 0.5

bpm =140


    s0.initImage('http://localhost:8081/fish-01.png')
    src(o0)
      .layer(src(o0))
      .layer(src(s0).scale(()=> 0.8 + a.fft[0]*0.05).repeat(2,2))
      .contrast(3)
      .color(.4,.7,.1)
      // .invert(.1)
      .contrast(2.5)
      .scale(1)
      .kaleid(1)
      .scrollX(.05, .04)
      .out(o0)





      s0.initImage('http://localhost:8081/fish-01.png')
      src(o0)
        .layer(src(o0).scale(1.01).scrollX(.1, .05))
        .layer(src(s0).scale(()=> 0.8 + a.fft[0]*0.05).repeat(2,2))
        .contrast(3)
        .color(.1,.1,.9)
        // .invert(.1)
        .contrast(2.5)
        .scale(1)
        .kaleid(2)
        // .r()
        // .scrollX(.1, .01)
        .out(o0)

bpm = 140

speed = 2

s0.initImage('http://localhost:8081/fish-01.png')
src(o0)
  .layer(src(o0).scale(1.01).rotate(.002))
  .layer(src(s0).scale(()=> 0.5 + a.fft[0]*0.05))
  .contrast(3)
  .color(.3,.7,.4)
  // .invert(.1)
  .contrast(2.5)
  .scale(1)
  // .kaleid(3)
  // .scrollX(.1, .01)
  // .modulatePixelate(src(o0), 10, 10)
  .out(o0)


hush()

a.hide()

s0.initImage('http://localhost:8081/fish-01.png')
src(o0)
  .layer(src(o0).scrollY(.001).scrollX(-.001))
  .layer(src(s0).scale(1, -1).scale(()=> 0.4 + a.fft[0]*0.01).repeat(1,1))
  .contrast(3)
  .color(.7,.9,.6)
  // .invert(.1)
  .contrast(2.5)
  .scale(1)
  // .kaleid(3)
  // .scrollX(.1, .01)
  // .modulatePixelate(src(o0), 10, 10)
  .out(o0)


s0.initImage('http://localhost:8080/pic.jpeg')
src(o0)
.layer(
  src(s0)
    .scale(() => 0.8 + a.fft[0]* 0.2)
    .luma(.2)
    .invert()
    .kaleid([3, 5, 7])
    .rotate(.5, .3)
    .contrast(1.5)
    .scrollX(.1, -.01)
    .scrollY(.3)
  )
  .modulatePixelate(src(o0), [250, 500, 1000])
.out(o0)

hush()

a.hide()
