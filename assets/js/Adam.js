import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Create a scene
const scene = new THREE.Scene();

/* And God said, “Let there be light,” and there was light. God saw that
   the light was good, and he separated the light from the darkness. God
   called the light “day,” and the darkness he called “night.” And there was
   evening, and there was morning—the first day. */
const light = new THREE.AmbientLight( 0xffffff );
scene.add( light );

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// Create controls
const controls = new OrbitControls( camera, renderer.domElement );



function ShabbatTV() {
    // Play Video
    const exodus = document.getElementById( 'exodus' );
    exodus.play();
    exodus.addEventListener( 'play', function () {
        // this.currentTime = 3;
    });

    const texture = new THREE.VideoTexture(exodus);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    //texture.format = THREE.RGBAFormat;

    const geometry = new THREE.PlaneGeometry(5, 2.8);
    const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
    screen = new THREE.Mesh(geometry, material);
    scene.add(screen);
    return screen;
}

function PravdaTV() {
    const stalin = document.getElementById( 'stalin' );

    const texture = new THREE.Texture(stalin);
    texture.needsUpdate = true; // Important to update the texture after loading

    const geometry = new THREE.PlaneGeometry(5, 2.8);
    const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.FrontSide });
    const screen = new THREE.Mesh(geometry, material);
    scene.add(screen);

    return screen;
}

export {scene, camera, controls, ShabbatTV, PravdaTV, renderer}
