import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';
//import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
//import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';

const SETTINGS = {
    "Skazka": {
        "video_id": "teremok",
        "source_id": "skazka",
        "height": 1.6,
        "position": [0, 1.87, -2.33],
        "rotation": {
            "x": 0,
            "y": 0,
        },
        "material": function(texture){
            return new THREE.MeshBasicMaterial({
                map: texture,
                side: THREE.FrontSide,
            });
        },
    },
    "Kolobok": {
        "video_id": "moon",
        "source_id": "USA",
        "height": 1.2,
        "position": [1.6, 0.42, 0],
        "rotation": {
            "x": Math.PI / 2,
            "y": 0,
            "z": Math.PI / 2,
        },
        "material": function(texture){
            return new THREE.MeshBasicMaterial({
                color: 0xFF1111,
                transparent: true,
                opacity: 0.3, // Adjust opacity for desired darkness
                map: texture,
                side: THREE.FrontSide,
            });
        },
    },
    "Narnia": [
        {
            "img_id": "Narnia0",
            "width": 111,
            "height": 111,
            "position": [-6.105, -1.535, 0],
            "rotation": {
                "x": 0,
                "y": Math.PI / 2,
            },
        }
    ],
    "Reminiscence": [],
};

function ShabbatTV(scene, id, url) {
    const book = SETTINGS[id];

    const source = document.getElementById(book.source_id);
    source.src = url;

    const video = document.getElementById(book.video_id);
    video.load();
    video.play();


    function setup() {
        // Calculate aspect ratio of the video
        const aspectRatio = video.videoWidth / video.videoHeight;

        // Set the height to fit the container height
        let heightToFit = book.height;

        // Calculate the width to fit the height without empty areas
        let widthToFit = heightToFit * aspectRatio;

        const texture = new THREE.VideoTexture(video);
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        //texture.format = THREE.RGBAFormat;

        const material = book.material(texture);;

        const geometry = new THREE.PlaneGeometry(widthToFit, heightToFit);

        const screen = new THREE.Mesh(geometry, material);
        screen.rotation.x = book.rotation.x || 0;
        screen.rotation.y = book.rotation.y || 0;
        screen.rotation.z = book.rotation.z || 0;
        screen.position.set(...book.position);

        scene.add(screen);

        return screen;
    }

    // If video metadata is already loaded, setup immediately
    if (video.readyState >= video.HAVE_METADATA) {
        return setup();
    }

    // Otherwise, setup after the metadata is loaded
    return new Promise(resolve => {
        video.addEventListener("loadedmetadata", function() {
            const screen = setup();
            resolve(screen);
        });
    });
}

async function PravdaTV(scene, MEDIA) {
    return;

    return new Promise((resolve, reject) => {
        const image = document.getElementById("image" + door.id);
        image.src = image_url;

        image.onload = function() {
            try {
                // Calculate aspect ratio of the image
                const aspectRatio = image.naturalWidth / image.naturalHeight;

                let heightToFit = door.height;
                let widthToFit = heightToFit * aspectRatio;

                // Create texture and material
                const texture = new THREE.Texture(image);
                texture.needsUpdate = true; // Important to update the texture after loading
                const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide,  transparent: true });

                // Create screen geometry
                const geometry = new THREE.PlaneGeometry(widthToFit, heightToFit);

                // Create and configure the screen mesh
                const screen = new THREE.Mesh(geometry, material);
                screen.rotation.x = door.rotation.x || 0;
                screen.rotation.y = door.rotation.y || 0;
                screen.rotation.z = door.rotation.z || 0;
                screen.position.set(...door.position);

                // Add the screen to the scene
                scene.add(screen);

                // Resolve the Promise with the created screen
                resolve(screen);
            } catch (error) {
                // Reject the Promise if there's an error
                reject(error);
            }
        };

        image.onerror = function() {
            // Reject the Promise if the image fails to load
            reject(new Error("Failed to load image"));
        };
    });
}


async function MosesTV(scene) {
    // TODO: Make this method customizable
    scene.background = new THREE.Color( 0xf6eedc );

    const GLTF = "assets/XXX/Teremok/scene.gltf";
    //const GLTF = "https://thepiratecircus.com/Woodstock/Teremok/scene.gltf";
    const loader = new GLTFLoader();
    loader.load(
        GLTF,
        function (gltf) {
            // finish initialization
					  const model = gltf.scene;
					  model.scale.setScalar( 199 );
					  model.position.set( 2, -3.9, 2.0);
            scene.add(gltf.scene);
        },
        undefined,
        function (error) {
            console.error(error);
        }
    );

}

export {ShabbatTV, PravdaTV, MosesTV}
