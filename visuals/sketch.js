speed = 0.5
shape(20,0.5,0.9)
.color(100,100,100  )
  .scale(() => a.fft[1]*0.5)
  .repeat(() => a.fft[2])
  .modulateRotate(o0, () => a.fft[0])
  .scale(() => a.fft[1]*0.03)
  .modulate(noise(2,2))
  .rotate(1, .2)
  //.invert(2.4)
.out(o0)




voronoi(350,0.15)
  	.modulateScale(osc(8).rotate(Math.sin(time)),.5)
  	.thresh(() => a.fft[3]*0.01)
    .scale(() => a.fft[2]*20)
	.modulateRotate(osc(7), () => a.fft[1]*100)
	.thresh(.7)
  	.diff(src(o0).scale(() => a.fft[2]*10))
	.modulateScale(osc(2).modulateRotate(o0,.74))
	.diff(src(o0).rotate([-.012,.01,-.002,0]).scrollY(0,[-1/199800,2].fast(0.7)))
	.brightness([-.02,-.17].smooth().fast(.25))
	.out()




  voronoi(8,1)
  .mult(osc(10,0.1,()=>Math.sin(time)*3).saturate(3).kaleid(200))
  .modulate(o0,a.fft[1]*2)
  .add(o0,0.8)
  .scrollY(-0.01)
  .scale(()=> a.fft[1]*3)
  .modulate(voronoi(8,1),a.fft[1]*0.001)
  .luma(() => a.fft[0]*0.7)
  .out()




  osc(10, 0.9, 300)
  .color(0.9, 0.7, 0.8)
  .diff(
    osc(45, 0.3, 100)
    .color(0.9, 0.9, 0.9)
    .rotate(0.18)
    .pixelate(12)
    .kaleid()
  )
  .scrollX(10)
  .colorama()
  .luma()
  .repeatX(4)
  .repeatY(4)
  .modulate(
    osc(1, -0.9, 300)
  )
  .scale(() => 3 + (a.fft[1]*1.1))
  .out()


a.hide()
