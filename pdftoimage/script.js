function onUpload(files) {
  if (files.length !== 1) return;
  const file = files[0];
  let reader = new FileReader();
  reader.onload = e => {
    const data = atob(e.target.result.replace(/.*base64,/, ''));
    renderPDF(data);    
  }
  
  reader.readAsDataURL(file);
}
 

async function renderPDF(data) {
  const pdf = await pdfjsLib.getDocument({data}).promise;
  
  for (let i = 1; i <= pdf.numPages; i++) {
    const image = document.querySelector('img');
    // document.body.appendChild(image);
    
    const page = await pdf.getPage(i);
    const viewport = page.getViewport({scale: 2});
    const canvas = document.createElement('canvas');
    const canvasContext = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    await page.render({canvasContext, viewport}).promise;
    const data = canvas.toDataURL('image/jpeg');
    image.src = data;
    image.style.width = '100%';
  }
}


let bd=document.querySelector('button');
let img=document.querySelector('img');
bd.addEventListener('click',()=>{
    let impath=img.getAttribute('src');
    let fn="download";
    saveAs(impath,fn);
});
function getFileName(str){
    return str.substring(str.lastIndexOf('/')+1);
}

