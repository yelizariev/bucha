import * as THREE from 'three';

const CAMERA_TAKEOFF = [2.25, -1.69, -0.49];
const CAMERA_LANDING = [2, -1.59, 1.21];

const DOOR_WIDTH = 2;
const DOOR_HEIGHT = 2.1;

const BOOK_WIDTH = 4;
const BOOK_HEIGHT = 2.1;

const BOTTOM_WIDTH = 4;
const BOTTOM_HEIGHT = 10;

const DOORS = [
    // bottom
    {
        "id": 0,
        "width": BOTTOM_WIDTH,
        "height": BOTTOM_HEIGHT,
        "position": [0, -3.11, 0],
        "rotation": {
            "x": Math.PI / 2,
            "y": 0,
            "z": Math.PI / 2,
        },
    },

    // front
    {
        "id": 1,
        "width": DOOR_WIDTH,
        "height": DOOR_HEIGHT,
        "position": [1.5, -1.535, 2.79],
        "rotation": {
            "x": 0,
            "y": 0,
        },
    },
    {
        "id": 2,
        "width": DOOR_WIDTH,
        "height": DOOR_HEIGHT,
        "position": [-1.485, -1.535, 2.79],
        "rotation": {
            "x": 0,
            "y": 0,
        },
    },
    {
        "id": 3,
        "width": DOOR_WIDTH,
        "height": DOOR_HEIGHT,
        "position": [-4.47, -1.535, 2.79],
        "rotation": {
            "x": 0,
            "y": 0,
        },
    },
    // right side
    {
        "id": 4,
        "width": DOOR_WIDTH,
        "height": DOOR_HEIGHT,
        "position": [-6.11, -1.535, 0.95],
        "rotation": {
            "x": 0,
            "y": Math.PI / 2,
        },
    },
    {
        "id": 5,
        "width": DOOR_WIDTH,
        "height": DOOR_HEIGHT,
        "position": [-6.11, -1.535, -1.0],
        "rotation": {
            "x": 0,
            "y": Math.PI / 2,
        },
    },
    // back
    {
        "id": 6,
        "width": DOOR_WIDTH,
        "height": DOOR_HEIGHT,
        "position": [-4.47, -1.535, -2.79],
        "rotation": {
            "x": 0,
            "y": 0,
        },
    },
    {
        "id": 7,
        "width": DOOR_WIDTH,
        "height": DOOR_HEIGHT,
        "position": [-1.485, -1.535, -2.79],
        "rotation": {
            "x": 0,
            "y": 0,
        },
    },
    {
        "id": 8,
        "width": DOOR_WIDTH,
        "height": DOOR_HEIGHT,
        "position": [1.5, -1.535, -2.79],
        "rotation": {
            "x": 0,
            "y": 0,
        },
    },
    {
        "id": 9,
        "width": DOOR_WIDTH,
        "height": DOOR_HEIGHT,
        "position": [4.48, -1.535, -2.79],
        "rotation": {
            "x": 0,
            "y": 0,
        },
    },
    // left side
    {
        "id": 10,
        "width": DOOR_WIDTH,
        "height": DOOR_HEIGHT,
        "position": [6.116, -1.535, 0.95],
        "rotation": {
            "x": 0,
            "y": Math.PI / 2,
        },
    },
    {
        "id": 11,
        "width": DOOR_WIDTH,
        "height": DOOR_HEIGHT,
        "position": [6.116, -1.535, -1.0],
        "rotation": {
            "x": 0,
            "y": Math.PI / 2,
        },
    },
    // front
    {
        "id": 12,
        "width": DOOR_WIDTH,
        "height": DOOR_HEIGHT,
        "position": [4.48, -1.535, 2.79],
        "rotation": {
            "x": 0,
            "y": 0,
        },
    },
];
const BOOKS = [
    {
        "id": 1,
        "width": BOOK_WIDTH,
        "height": BOOK_HEIGHT,
        "position": [-6.105, -1.535, 0],
        "rotation": {
            "x": 0,
            "y": Math.PI / 2,
        },
    },
    {
        "id": 2,
        "width": BOOK_WIDTH,
        "height": BOOK_HEIGHT,
        "position": [6.115, -1.535, 0],
        "rotation": {
            "x": 0,
            "y": Math.PI / 2,
        },
    },
];

function ShabbatTV(scene, i, url) {
    const bible = BOOKS[i];
    const source = document.getElementById("bible" + bible.id);
    source.src = url;

    const video = document.getElementById("exodus" + bible.id);
    video.load();
    video.play();

    function setup() {
        // Calculate aspect ratio of the video
        const aspectRatio = video.videoWidth / video.videoHeight;

        // Set the height to fit the container height
        let heightToFit = bible.height;

        // Calculate the width to fit the height without empty areas
        let widthToFit = heightToFit * aspectRatio;

        const texture = new THREE.VideoTexture(video);
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        //texture.format = THREE.RGBAFormat;

        const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
        const geometry = new THREE.PlaneGeometry(widthToFit, heightToFit);

        const screen = new THREE.Mesh(geometry, material);
        screen.rotation.x = bible.rotation.x;
        screen.rotation.y = bible.rotation.y;
        screen.position.set(...bible.position);

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


async function PravdaTV(scene, i, image_url) {
    const door = DOORS[i];
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

export {ShabbatTV, PravdaTV}
