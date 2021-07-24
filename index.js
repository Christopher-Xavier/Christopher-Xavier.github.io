scene.add(group);

camera.position.z = 40;

gsap.to(group.rotation, {
  y: Math.PI * 2,
  duration: 100,
  ease: "none",
  repeat: -1
});
gsap.to(group.rotation, {
  z: Math.PI * 2,
  duration: 15,
  ease: "power2.inOut",
  yoyo: true,
  repeat: -1
});
camera.position.z = 5;
gsap.to(camera.position, {
  z: 60,
  duration: 15,
  ease: "power2.inOut",
  repeat: -1,
  yoyo: true
});

var animate = function () {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
};

window.addEventListener("resize", onWindowResize, false);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

animate();
