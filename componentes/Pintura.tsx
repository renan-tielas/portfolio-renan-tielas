// // import Sketch from "react-p5";
import p5Types from "p5";
import dynamic from 'next/dynamic'





// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
    ssr: false,
})
interface ComponentProps {
    // Your component props
}




let particulas: any = [];
const largura = 600;
const altura = 300;

const margem = 0 //experimental o efeito ainda
const tamanhox = largura - 2 * margem
const tamanhoy = altura - 2 * margem



const g = 9.81
const quantidade = 15
const quantidade2 = 25
const quantidade3 = 20

const quantidade4 = 3


let contador = 1

export const Pintura = (p5: p5Types) => {


    const setup = (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(600, 300).parent(canvasParentRef);
        particulas = [];

        petalas = criarParticulas(quantidade, "orange")
        // let flor=criarParticulas(quantidade2,"brown")
        flor = criarParticulas(quantidade2, "#db5c35")
        // let folhas=criarParticulas(quantidade3,"#332A1Fff")    
        folhas = criarParticulas(quantidade3, "#66441b")


    };

    const particula = (x: number, y: number, c: string) => {
        return { "x": x, "y": y, "vx": 0, "vy": 0, "cor": c }
    }
    const aleatorio = (tamanho: number) => {
        return Math.random() * tamanho + margem
        // return Math.sin()*tamanho+margem
    }

    const criarParticulas = (quantidade: number, cor: string) => {
        let grupo = []
        for (let i = 0; i < quantidade; i++) {
            // grupo.push(particula(aleatorio(tamanhox)*Math.sin(i/1000),aleatorio(tamanhoy), cor))
            grupo.push(particula(aleatorio(tamanhox), aleatorio(tamanhoy), cor))
            particulas.push(grupo[i])
        }
        return grupo
    }


    let petalas = criarParticulas(quantidade, "orange")
    // let flor=criarParticulas(quantidade2,"brown")
    let flor = criarParticulas(quantidade2, "#66441b")
    // let folhas=criarParticulas(quantidade3,"#332A1Fff")    
    let folhas = criarParticulas(quantidade3, "#db5c35")
    let grama = criarParticulas(quantidade4, "orange")

    const draw = (p5: p5Types, x: number, y: number, c: string) => {

        p5.background(220);





        const desenha = (x: number, y: number, c: string) => {
            contador++

            // if (contador % 50000 == 0) {
            //     ctx.beginPath();
            //     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

            //   ctx.stroke();

            // ctx.fillStyle=c
            //  ctx.fillRect(x,y,s,s)
            // // ctx.filter = 'blur(10px)';
            // ctx.filter = 'opacity(50%)';
            // ctx.filter = 'hue-rotate(50%)';
            // // ctx.filter= 'contrast(1.4) drop-shadow(9px 9px 1px #4F731A)'
            // ctx.strokeStyle = c;

            // ctx.beginPath();
            // ctx.ellipse(x, y, 6, 6, 0, 0, 2 * Math.PI);





            p5.ellipse(x, y, 6, 6);


            // ctx.ellipse(x, y, 13, 4, 0, 0, 2 * Math.PI);
            // ctx.stroke();

        }




        for (let i = 0; i < particulas.length; i++) {
            // desenha(particulas[i].x,particulas[i].y+200,particulas[i].cor,4)
            desenha(Math.floor(particulas[i].x), Math.floor(particulas[i].y) + 200, particulas[i].cor);


        }








    }

    return <Sketch setup={setup} draw={draw} />;
    //     // A simple Particle class
    //     let Particle = function (p5: p5Types, position) {
    //         this.acceleration = p5.createVector(0, 0.05);
    //         this.velocity = p5.createVector(p5.random(-1, 1), p5.random(-1, 0));
    //         this.position = position.copy();
    //         this.lifespan = 255;
    //     };

    //     Particle.prototype.run = function () {
    //         this.update();
    //         this.display();
    //     };

    //     // Method to update position
    //     Particle.prototype.update = function () {
    //         this.velocity.add(this.acceleration);
    //         this.position.add(this.velocity);
    //         this.lifespan -= 2;
    //     };

    //     // Method to display
    //     Particle.prototype.display = function (p5: p5Types) {
    //         p5.stroke(200, this.lifespan);
    //         p5.strokeWeight(2);
    //         p5.fill(127, this.lifespan);
    //         p5.ellipse(this.position.x, this.position.y, 12, 12);
    //     };

    //     // Is the particle still useful?
    //     Particle.prototype.isDead = function () {
    //         return this.lifespan < 0;
    //     };

    //     let ParticleSystem = function (position) {
    //         this.origin = position.copy();
    //         this.particles = [];
    //     };

    //     ParticleSystem.prototype.addParticle = function () {
    //         this.particles.push(new Particle(this.origin));
    //     };

    //     ParticleSystem.prototype.run = function () {
    //         for (let i = this.particles.length - 1; i >= 0; i--) {
    //             let p = this.particles[i];
    //             p.run();
    //             if (p.isDead()) {
    //                 this.particles.splice(i, 1);
    //             }
    //         }
    //     };



}





// // export const Pintura = () => {
// //     const largura = 600;
// //     const altura = 300;

// //     const margem=100 //experimental o efeito ainda
// // const tamanhox=largura-2*margem
// // const tamanhoy=altura-2*margem

// // let contador=1

// //     // See annotations in JS for more information
// //     const setup = (p5: p5Types, canvasParentRef: Element) => {
// //         p5.createCanvas(largura, altura).parent(canvasParentRef);
// //     };

// //     const draw = (p5: p5Types,x:number,y:number,c:string) => {
// //         p5.background(0);
// //         // drawParticles();


// //     const particles: Array<any> = [];









// //     function createParticles(number: number, color: string) {
// //         for (let i = 0; i < number; i++) {
// //             const x = Math.random() * (largura - 200) + 100;
// //             const y = Math.random() * (altura - 200) + 100;
// //             const particle = createParticle(x, y, color);
// //             particles.push(particle);
// //         }
// //     }

// //     function createParticle(x:number, y:number, color: string) {
// //         return { x, y, vx: 0, vy: 0, color };
// //     }

// //     function applyGravity(particles1:any, particles2:any, g:number) {
// //         for (let i = 0; i < particles1.length; i++) {
// //             const a = particles1[i];
// //             let fx = 0;
// //             let fy = 0;
// //             for (let j = 0; j < particles2.length; j++) {
// //                 const b = particles2[j];
// //                 const dx = a.x - b.x;
// //                 const dy = a.y - b.y;
// //                 const distance = dist(a.x, a.y, b.x, b.y);
// //                 const gravitationalForce = g * 1 / distance;
// //                 if (distance > 0 && distance < 80) {
// //                     fx += gravitationalForce * dx;
// //                     fy += gravitationalForce * dy - g;
// //                 }
// //             }
// //             a.vx = (a.vx + fx) * 0.5;
// //             a.vy = (a.vy + fy) * 0.5;
// //             a.x += a.vx;
// //             a.y += a.vy;
// //             if (a.x <= 0 || a.x >= width || a.y <= 0 || a.y >= height) {
// //                 a.vx *= -1;
// //                 a.vy *= -1;
// //             }
// //         }
// //     }

// //     function drawParticles() {
// //         applyGravity(particles, particles, 0.1);
// //         particles.forEach(particle => {
// //             fill(particle.color);
// //             ellipse(particle.x, particle.y, 6, 6);
// //         });
// //     }

// //     function setupParticles() {
// //         const petalColors = [
// //             'orange',
// //             'orange',
// //             'orange',
// //             'orange',
// //             'orange',
// //             'orange',
// //             'orange',
// //             'orange',
// //             'orange',
// //             'orange',
// //             'orange',
// //             'orange',
// //             'orange',
// //             'orange',
// //             'orange',
// //         ];
// //         createParticles(15, petalColors);

// //         const flowerColors = [
// //             '#66441b',
// //             '#66441b',
// //             '#66441b',
// //             '#66441b',
// //             '#66441b',
// //             '#66441b',
// //             '#66441b',
// //             '#66441b',
// //             '#66441b',
// //             '#66441b',
// //             '#66441b',
// //             '#66441b',
// //             '#66441b',
// //             '#66441b',
// //             '#66441b',
// //             '#66441b',
// //             '#66441b',
// //             '#66441b',
// //             '#66441b',
// //             '#66441b',
// //         ];
// //         createParticles(25, flowerColors);

// //         const leafColors = [
// //             '#db5c35',
// //             '#db5c35',
// //             '#db5c35',
// //             '#db5c35',
// //             '#db5c35',
// //             '#db5c35',
// //             '#db5c35',
// //             '#db5c35',
// //             '#db5c35',
// //             '#db5c35',
// //             '#db5c35',
// //             '#db5c35',
// //             '#db5c35',
// //             '#db5c35',
// //             '#db5c35',
// //             '#db5c35',
// //             '#db5c35',
// //             '#db5c35',
// //             '#db5c35',
// //             '#db5c35',
// //         ];
// //         createParticles(20, leafColors);

// //         const grassColors = [
// //             'orange',
// //             'orange',
// //             'orange',
// //         ];
// //         createParticles(3, grassColors);
// //     }

// // };

// // };
