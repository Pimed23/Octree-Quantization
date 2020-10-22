let img_input = document.getElementById('input_image');
let file_input = document.getElementById('file_input');
let canvas = document.getElementById('output_image');
let ctx = canvas.getContext('2d');
let octree = new Octree();

file_input.addEventListener('change', (event) => {
    img_input.src = URL.createObjectURL(event.target.files[0]);
}, false);

class Color {
    constructor( red, green, blue ) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }
};

img_input.onload = function() {
    let mat = cv.imread(img_input);
    let img_width = img_input.naturalWidth;
    let img_height = img_input.naturalHeight;
    ctx.rect(0, 0, img_width, img_height);
    cv.imshow('output_image', mat);

    let data = ctx.getImageData(0, 0, img_width, img_height).data;
    let matrix_image = [];

    for(let i = 0; i < data.length; i = i + 4) {
        matrix_image.push(new Color(data[i], data[i+1], data[i+2]));  
    }

    octree.fill(matrix_image);
    console.log(octree);
    
    octree.reduction(octree.head);
    octree.reduction(octree.head);
    octree.reduction(octree.head);
    octree.reduction(octree.head);
    octree.reduction(octree.head);
    octree.reduction(octree.head);
    octree.reduction(octree.head);

    console.log(matrix_image);
    octree.reconstruction(matrix_image);
    console.log(octree);

    let count = 0;
    for(let i = 0; i < img_height; i++) {
        for(let j = 0; j < img_width; j++) {
            mat.ucharPtr(i, j)[0] = matrix_image[count].red;
            mat.ucharPtr(i, j)[1] = matrix_image[count].green;
            mat.ucharPtr(i, j)[2] = matrix_image[count].blue;
            count++;
        }
    }
    cv.imshow('output_image', mat);

    mat.delete();
}