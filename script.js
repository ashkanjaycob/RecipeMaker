const addBtn = document.querySelector("#ReceAdd");

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

    const Para = document.createElement("p");
    Para.classList.add("card-text");
    Para.innerHTML = ReceText.value;

    const Image = document.createElement("img");
    Image.classList.add("card-img-top");
    Image.id = "ImageCraeted";
    Image.src = axs[Num];

    DivBody.appendChild(H5);
    DivBody.appendChild(Para);
    DIV.appendChild(Image);

    console.log(DIV);
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
