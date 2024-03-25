import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';
import sha256 from 'https://cdn.skypack.dev/js-sha256';

const NARNIA_OPACITY = 0.2;
const SETTINGS = {
    "Skazka": {
        "video_id": "teremok",
        "source_id": "skazka",
        "height": 1.6,
        "width": 1.35,
        "position": [0, 1.87, -2.30],
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
        "width": 2.4,
        "position": [1.6, 0.42, 0],
        "rotation": {
            "x": Math.PI / 2,
            "y": 0,
            "z": -Math.PI / 2,
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
            "img_id": "Narnia",
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
        {
            "img_id": "Narnia0",
            "width": 1.1,
            "height": 2.0,
            "position": [-1.3, 1.1, 2.2],
            "rotation": {
                "x": 0,
                "y": Math.PI / 2,
            },
            "material": function(texture){
                return new THREE.MeshBasicMaterial({
                    color: 0xffdcd9,
                    transparent: true,
                    opacity: 0.5,
                    map: texture,
                    side: THREE.FrontSide,
                });
            },
        },
        {
            "img_id": "Narnia1",
            "width": 0.82,
            "height": 0.59,
            "position": [-0.9, 0.44, 0.99],
            "rotation": {
                "x": 0,
                "y": Math.PI / 2,
            },
            "material": function(texture){
                return new THREE.MeshBasicMaterial({
                    color: 0xffdcd9,
                    transparent: true,
                    opacity: NARNIA_OPACITY,
                    map: texture,
                    side: THREE.FrontSide,
                });

            },
        },
        {
            "img_id": "Narnia2",
            "width": 0.82,
            "height": 0.59,
            "position": [-0.9, 0.44, 0.1],
            "rotation": {
                "x": 0,
                "y": Math.PI / 2,
            },
            "material": function(texture){
                return new THREE.MeshBasicMaterial({
                    color: 0xffdcd9,
                    transparent: true,
                    opacity: NARNIA_OPACITY,
                    map: texture,
                    side: THREE.FrontSide,
                });
            },
        },
        {
            "img_id": "Narnia4",
            "width": 0.82,
            "height": 0.59,
            "position": [-0.9, 0.44, -0.785],
            "rotation": {
                "x": 0,
                "y": Math.PI / 2,
            },
            "material": function(texture){
                return new THREE.MeshBasicMaterial({
                    color: 0xffdcd9,
                    transparent: true,
                    opacity: NARNIA_OPACITY,
                    map: texture,
                    side: THREE.FrontSide,
                });
            },
        },
    ],
    "Reminiscence": [
        {
            "img_id": "Reminiscence0",
            "width": 0.82,
            "height": 0.58,
            "position": [1.6, 2.04, -1.51],
            "rotation": {},
            "material": function(texture){
                return new THREE.MeshBasicMaterial({
                    color: 0x6e563c,
                    map: texture,
                    side: THREE.FrontSide,
                });
            },
        },
        {
            "img_id": "Reminiscence1",
            "width": 0.45,
            "height": 0.46,
            "position": [2.333, 1.695, -0.68],
            "rotation": {
                "x": 0,
                "y": -Math.PI / 2,
            },
            "material": function(texture){
                return new THREE.MeshBasicMaterial({
                    color: 0xa68d6f,
                    map: texture,
                    side: THREE.FrontSide,
                });
            },
        },
        {
            "img_id": "Reminiscence2",
            "width": 0.7,
            "height": 0.56,
            "position": [2.333, 1.89, 0.55],
            "rotation": {
                "x": 0,
                "y": -Math.PI / 2,
            },
            "material": function(texture){
                return new THREE.MeshBasicMaterial({
                    color: 0x82715e,
                    map: texture,
                    side: THREE.FrontSide,
                });
            },
        },
        {
            "img_id": "Reminiscence3",
            "width": 0.4,
            "height": 0.6,
            "position": [1.9, 1.855, 3.005],
            "rotation": {
                "x": 0,
                "y": Math.PI,
            },
            "material": function(texture){
                return new THREE.MeshBasicMaterial({
                    color: 0x5d615b,
                    map: texture,
                    side: THREE.FrontSide,
                });
            },
        },
        {
            "img_id": "Reminiscence4",
            "width": 0.4,
            "height": 0.62,
            "position": [1.27, 1.57, 3.005],
            "rotation": {
                "x": 0,
                "y": Math.PI,
            },
            "material": function(texture){
                return new THREE.MeshBasicMaterial({
                    color: 0x5d615b,
                    map: texture,
                    side: THREE.FrontSide,
                });
            },
        },
    ],
};

function ShabbatTV(scene, id, url, start) {
    const book = SETTINGS[id];

    const source = document.getElementById(book.source_id);
    source.src = url;

    const video = document.getElementById(book.video_id);
    video.load();
    video.addEventListener('loadedmetadata', function() {
        video.currentTime = start || 0;
        video.play();
    });


    function setup() {
        // Calculate aspect ratio of the video
        const aspectRatio = video.videoWidth / video.videoHeight;

        // Set the height to fit the container height
        let heightToFit = book.height;

        // Calculate the width to fit the height without empty areas
        let widthToFit = book.width;

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
    scene.background = new THREE.Color( 0xf6eedc );

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

// Function to set a cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()}`;
}

// Function to get a cookie value
function getCookie(name) {
    const cookieName = `${name}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return '';
}

function PortalTV(PortalCODE, server, name) {
    // TODO: refactor code, including hardcoded parts
    const videoElement = document.getElementById("teremok");
    videoElement.muted = true;

    // Room Name
    const roomName = sha256("PortalCODE-" + PortalCODE);

    // User Name
    function randomName() {
        return "Agent" + Math.floor(Math.random() * 100);
    }
    const userName = name || getCookie('MagicCOOKIE') || randomName();
    if (userName != getCookie('MagicCOOKIE')) {
        setCookie('MagicCOOKIE', userName, 100);
    }

    // Jitsi
    const domain = server || 'meet.jit.si';
    const options = {
        "domain": domain,
        "roomName": roomName,
        "userInfo": {
            "displayName": userName,
        },
        "parentNode": document.querySelector('#jitsi-container'),
        "configOverwrite": {
            startAudioOnly: true,
            //startWithAudioMuted: true,
            toolbarButtons: [
               'hangup',
               'microphone',
               'noisesuppression',
               'participants-pane',
               'profile',
            ],


        },
        interfaceConfigOverwrite: {
            DISABLE_DOMINANT_SPEAKER_INDICATOR: true,
        },

    };
    const api = new JitsiMeetExternalAPI(domain, options);

    const controlPanel = document.getElementById("control-panel");
    const toggleButton = document.getElementById("toggle-button");

    toggleButton.addEventListener("click", toggleControlPanel);

    function toggleControlPanel() {
        controlPanel.classList.toggle("hidden");
    }
    // Make visible first time
    toggleControlPanel();
}

export {ShabbatTV, PravdaTV, MosesTV, PortalTV}
