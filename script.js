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


// make a local storage  on your browser to save data 
function SaveData() {
  localStorage.setItem("data", list.innerHTML);
}


list = document.querySelector("#showList");


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

    const Delete = document.createElement("h4");
    Delete.classList.add("badge");
    Delete.classList.add("text-bg-danger");
    Delete.innerHTML = "Delete";
    DivBody.appendChild(Delete);

    const EditBtn = document.createElement("h4");
    EditBtn.classList.add("badge");
    EditBtn.classList.add("text-bg-info");
    EditBtn.innerHTML = "Edit";
    DivBody.appendChild(EditBtn);


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


    list.appendChild(DIV);
    console.log(list.innerHTML);

    SaveData();

    console.log(list);
    ReceName.value = "";
    ReceText.value = "";
    uploadImg.value = "";

    SaveData();

  } else {
    alert("Please Fill Out This Field.");
  }
  Num++;

});


document.querySelector('#loaderbtn').addEventListener('click', () => {
  function ShowList() {
    list.innerHTML = localStorage.getItem('data');
  }
  ShowList();
})



// make a local storage  on your browser to save data
// function SaveData() {
//   localStorage.setItem("data", list.innerHTML);
// }
// function ShowList() {
//   list.innerHTML = localStorage.getItem('data');
// }
// ShowList();




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