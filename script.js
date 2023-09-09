const addBtn = document.querySelector("#ReceAdd");

var axs = [];
var Num = 0;

const uploadImg = document.querySelector("#imageUrl");
let showUpload = "";

uploadImg.addEventListener("change", function () {
  // console.log(uploadImg.value);
  let pic = new FileReader();
  pic.addEventListener("load", () => {
    showUpload = pic.result;
    axs[Num] = showUpload;
  });
  pic.readAsDataURL(this.files[0]);
});


// make a full function for create recipes ...
addBtn.addEventListener("click", () => {

  // console.log(axali);
  const ReceName = document.querySelector("#recepieName");
  const ReceText = document.querySelector("#recepieTxt");
  // const uploadImg = document.querySelector('#imageUrl');

  if (ReceName.value != "") {
    // console.log(ReceName.value);
    // console.log(ReceText.value);

    const DIV = document.createElement("div");
    DIV.classList.add("card");

    const DivBody = document.createElement("div");
    DivBody.classList.add("card-body");

    const H5 = document.createElement("h5");
    H5.classList.add("card-title");
    H5.innerHTML = ReceName.value;
    DivBody.appendChild(H5);


    const Para = document.createElement("ul");
    Para.classList.add("list-group");
    DivBody.appendChild(Para);


    function addrain() {
      let ReceTextMems = ReceText.value.split(" ");
      for (var i = 0; i < ReceTextMems.length; i++) {
        // Create DOM element
        let childNode = document.createElement('li');
        childNode.classList.add("list-group-item");
        // Set content to current element
        childNode.innerHTML = ReceTextMems[i];
        // Add DOM Node to list
        Para.appendChild(childNode);
      }
    }
    addrain();

    const Image = document.createElement("img");
    Image.classList.add("card-img-top");
    Image.id = "ImageCraeted";
    Image.src = axs[Num];


    DIV.appendChild(Image);

    // console.log(DIV);
    DIV.appendChild(DivBody);

    const list = document.querySelector("#showList");
    list.appendChild(DIV);


    ReceName.value = "";
    ReceText.value = "";
    uploadImg.value = "";
  } else {
    alert("Please Fill Out This Field.");
  }
  Num++;
});

console.log(list);




// Image uploader source Code Start....

// const uploadImg = document.querySelector('#imageUrl');
// let showUpload = "";

// uploadImg.addEventListener("change" , function() {
//   // console.log(uploadImg.value);
//   let pic = new FileReader();
//   pic.addEventListener("load" , () => {
//     showUpload = pic.result ;
//     document.querySelector('#uploadedImage').setAttribute( 'src' , event.target.result);
//   })
//   pic.readAsDataURL(this.files[0]);
// })

// Image uploader source Code End ...