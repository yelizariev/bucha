import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';

const BARABAN_Y = -3.4;
const BARABAN_WIDTH = 0.666;
const BARABAN_HEIGHT = 0.4;

function baraban_material(texture){
    return new THREE.MeshBasicMaterial({
        color: 0xe2e2e2,
        map: texture,
        side: THREE.FrontSide,
    });
}

const BARABAN = {
    "frontend": [
        {
            "img_id": "frontend0",
            "width": BARABAN_WIDTH,
            "height": BARABAN_HEIGHT,
            "position": [1.4, BARABAN_Y, -1.9],
            "rotation": {
                "y": Math.PI + Math.PI/12,
            },
            "material": baraban_material,
        },
        {
            "img_id": "frontend1",
            "width": BARABAN_WIDTH,
            "height": BARABAN_HEIGHT,
            "position": [0.25, BARABAN_Y, -2.4],
            "rotation": {
                "y": Math.PI - Math.PI/4.1,
            },
            "material": baraban_material,
        },
        {
            "img_id": "frontend2",
            "width": BARABAN_WIDTH,
            "height": BARABAN_HEIGHT,
            "position": [-1, BARABAN_Y, -2.35],
            "rotation": {
                "y": Math.PI + Math.PI/3.7,
            },
            "material": baraban_material,
        },
        {
            "img_id": "frontend3",
            "width": BARABAN_WIDTH,
            "height": BARABAN_HEIGHT,
            "position": [-2.05, BARABAN_Y, -1.8],
            "rotation": {
                "y": Math.PI - Math.PI/24,
            },
            "material": baraban_material,
        },
    ],
    "backend": [
        {
            "img_id": "backend0",
            "width": BARABAN_WIDTH,
            "height": BARABAN_HEIGHT,
            "position": [1.6, BARABAN_Y, 2.7],
            "rotation": {
            },
            "material": baraban_material,
        },
        {
            "img_id": "backend1",
            "width": BARABAN_WIDTH,
            "height": BARABAN_HEIGHT,
            "position": [1, BARABAN_Y, 3.1],
            "rotation": {
                "y": Math.PI/2.6,
            },
            "material": baraban_material,
        },
        {
            "img_id": "backend2",
            "width": BARABAN_WIDTH,
            "height": BARABAN_HEIGHT,
            "position": [0.3, BARABAN_Y, 3.33],
            "rotation": {
                "y": - Math.PI/4,
            },
            "material": baraban_material,
        },
        {
            "img_id": "backend3",
            "width": BARABAN_WIDTH,
            "height": BARABAN_HEIGHT,
            "position": [-0.4, BARABAN_Y, 3.37],
            "rotation": {
                "y": Math.PI/3.5,
            },
            "material": baraban_material,
        },
        {
            "img_id": "backend4",
            "width": BARABAN_WIDTH,
            "height": BARABAN_HEIGHT,
            "position": [-1.0, BARABAN_Y, 3.3],
            "rotation": {
                "y": -Math.PI/3,
            },
            "material": baraban_material,
        },
        {
            "img_id": "backend5",
            "width": BARABAN_WIDTH,
            "height": BARABAN_HEIGHT,
            "position": [-1.7, BARABAN_Y, 2.95],
            "rotation": {
            },
            "material": baraban_material,
        },
    ],
    "Bible": [
        {
            "img_id": "Bible0",
            "width": BARABAN_WIDTH,
            "height": BARABAN_HEIGHT,
            "position": [-2.6, BARABAN_Y, -1.2],
            "rotation": {
                "y": -Math.PI/2 + Math.PI/32,
            },
            "material": baraban_material,
        },
        {
            "img_id": "Bible1",
            "width": BARABAN_WIDTH,
            "height": BARABAN_HEIGHT,
            "position": [-2.9, BARABAN_Y, -0.3],
            "rotation": {
                "y": -Math.PI/2 - Math.PI/3.1,
            },
            "material": baraban_material,
        },
        {
            "img_id": "Bible2",
            "width": BARABAN_WIDTH,
            "height": BARABAN_HEIGHT,
            "position": [-3.0, BARABAN_Y, 0.35],
            "rotation": {
                "y": -Math.PI/2 + Math.PI/3.6,
            },
            "material": baraban_material,
        },
        {
            "img_id": "Bible3",
            "width": BARABAN_WIDTH,
            "height": BARABAN_HEIGHT,
            "position": [-2.9, BARABAN_Y, 1.1],
            "rotation": {
                "y": -Math.PI/2 - Math.PI/4.5,
            },
            "material": baraban_material,
        },
        {
            "img_id": "Bible4",
            "width": BARABAN_WIDTH,
            "height": BARABAN_HEIGHT,
            "position": [-2.8, BARABAN_Y, 1.8],
            "rotation": {
                "y": -Math.PI/2 + Math.PI/2.6,
            },
            "material": baraban_material,
        },
        {
            "img_id": "Bible5",
            "width": BARABAN_WIDTH,
            "height": BARABAN_HEIGHT,
            "position": [-2.3, BARABAN_Y, 2.2],
            "rotation": {
                "y": -Math.PI/2 + Math.PI/32,
            },
            "material": baraban_material,
        },
    ],
    "Enlightenment": [
        {
            "img_id": "Enlightenment0",
            "width": BARABAN_WIDTH,
            "height": BARABAN_HEIGHT,
            "position": [2.05, BARABAN_Y, -1.2],
            "rotation": {
                "y": Math.PI/2 + Math.PI/32,
            },
            "material": baraban_material,
        },
        {
            "img_id": "Enlightenment1",
            "width": BARABAN_WIDTH,
            "height": BARABAN_HEIGHT,
            "position": [2.5, BARABAN_Y, 1.45],
            "rotation": {
                "y": Math.PI/2 - Math.PI/2.8,
            },
            "material": baraban_material,
        },
        {
            "img_id": "Enlightenment2",
            "width": BARABAN_WIDTH,
            "height": BARABAN_HEIGHT,
            "position": [2.6, BARABAN_Y, 0.75],
            "rotation": {
                "y": Math.PI/2 + Math.PI/3.6,
            },
            "material": baraban_material,
        },
        {
            "img_id": "Enlightenment3",
            "width": BARABAN_WIDTH,
            "height": BARABAN_HEIGHT,
            "position": [2.6, BARABAN_Y, 0.1],
            "rotation": {
                "y": Math.PI/2 - Math.PI/4.2,
            },
            "material": baraban_material,
        },
        {
            "img_id": "Enlightenment4",
            "width": BARABAN_WIDTH,
            "height": BARABAN_HEIGHT,
            "position": [2.5, BARABAN_Y, -0.55],
            "rotation": {
                "y": Math.PI/2 + Math.PI/2.7,
            },
            "material": baraban_material,
        },
        {
            "img_id": "Enlightenment5",
            "width": BARABAN_WIDTH,
            "height": BARABAN_HEIGHT,
            "position": [2.2, BARABAN_Y, 2.2],
            "rotation": {
                "y": Math.PI/2 + Math.PI/64,
            },
            "material": baraban_material,
        },
    ],
};


async function PravdaTV(scene, YAKUBOVICH) {
    function make(foto, url) {
        const image = document.getElementById(foto.img_id);
        image.src = url;
        image.onload = function() {
            try {
                // Calculate aspect ratio of the image
                const aspectRatio = image.naturalWidth / image.naturalHeight;

                let heightToFit = foto.height;
                let widthToFit = heightToFit * aspectRatio;

                // Create texture and material
                const texture = new THREE.Texture(image);
                texture.needsUpdate = true; // Important to update the texture after loading
                const material = foto.material(texture);

                // Create screen geometry
                const geometry = new THREE.PlaneGeometry(widthToFit, heightToFit);

                // Create and configure the screen mesh
                const screen = new THREE.Mesh(geometry, material);
                screen.rotation.x = foto.rotation.x || 0;
                screen.rotation.y = foto.rotation.y || 0;
                screen.rotation.z = foto.rotation.z || 0;
                screen.position.set(...foto.position);

                // Add the screen to the scene
                scene.add(screen);

            } catch (error) {
                console.log(error);
            }
        };
    };

    ["frontend", "backend", "Bible", "Enlightenment"].map(function(key) {
        const graffiti = YAKUBOVICH[key]["Graffiti"];
        for (const index in graffiti) {
            const url = graffiti[index];
            if (!BARABAN[key] || !BARABAN[key][index])
                continue;

            const foto = BARABAN[key][index];
            make(foto, url);
        }
    });

}


async function MosesTV(scene) {
    // TODO
    scene.background = new THREE.Color( 0xe2e2e2 );
}

export {PravdaTV, MosesTV}
