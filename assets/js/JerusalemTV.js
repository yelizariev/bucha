import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';
import sha256 from 'https://cdn.skypack.dev/js-sha256';

const NARNIA_OPACITY = 0.2;
const BARABAN = {
    "frontend": [
        {
            "img_id": "frontend0",
            "width": 2.0,
            "height": 2.0,
            "position": [-0.2, 1.87, -2.333],
            "rotation": {},
            "material": function(texture){
                return new THREE.MeshBasicMaterial({
                    map: texture,
                    side: THREE.FrontSide,
                });
            },
        },
    ],
};


async function PravdaTV(scene, MEDIA) {
    return;
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
                const geometry = new THREE.PlaneGeometry(foto.width, heightToFit);

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

        image.onerror = function() {
            // Reject the Promise if the image fails to load
            console.log("Failed to load image");
        };
    };

    ["Narnia", "Reminiscence"].map(function(key) {
        for (const index in SETTINGS[key]) {
            const foto = SETTINGS[key][index];
            const url = MEDIA[key][index];
            make(foto, url);
        }
    });

}


async function MosesTV(scene) {
    // TODO: Make this method customizable
    scene.background = new THREE.Color( 0xe2e2e2 );
    return;

    //const GLTF = "assets/XXX/Teremok/scene.gltf";
    const GLTF = "https://thepiratecircus.com/Woodstock/Teremok/scene.gltf";
    const loader = new GLTFLoader();
    loader.load(
        GLTF,
        function (gltf) {
            // finish initialization
					  const model = gltf.scene;
					  model.scale.setScalar( 201 );
					  model.position.set( 2, -4.0, 2.05);
            scene.add(gltf.scene);
        },
        undefined,
        function (error) {
            console.error(error);
        }
    );

}

export {PravdaTV, MosesTV}
