AFRAME.registerComponent("ball",{
    init: function(){
        this.shootBall()
    },
    shootBall: function(){
        window.addEventListener("keyDown",(e)=>{
            if(e.key=="z"){
                var ball = document.createElement("a-entity")
                ball.setAttribute("geometry",{primitive:"sphere",radius:0.1})
                ball.setAttribute("material",{color:"black"})

                var cam = document.querySelector("#camera")

                pos = cam.getAttribute("position")

                ball.setAttribute("position",{x:pos.x, y:pos.y, z:pos.z})

                var camera = document.querySelector("#camera").object3D

                var dir = new THREE.Vector()

                camera.getWorldDirection(dir)

                ball.setAttribute("velocity",dir.multiplyScalar(-10))

                var scene = document.querySelector("#scene")

                scene.appendChild(ball)
            }
        })
    }
})