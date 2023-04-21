let input = document.querySelector(".input");
let btn = document.querySelector(".btn-convert");
let result0 = document.querySelector("#myInput0");
let result1 = document.querySelector("#myInput1");
let result2 = document.querySelector("#myInput2");
let btnGroup = document.querySelectorAll('.btn_copy')

btn.onclick = () => {

  result0.value = input?.value.replace(/\s+/g,' ').trim().toLowerCase();
  result1.value = input?.value.replace(/\s+/g,' ').trim().toLowerCase();
  result2.value = input?.value.replace(/\s+/g,' ').trim().toLowerCase();
};

btnGroup.forEach((btn,index) => {
  btn.addEventListener('click',function myFunction() {
      var copyText = document.getElementById(`myInput${index}`);
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand('copy');
      var tooltip = document.getElementById(`myTooltip${index}`);
      tooltip.innerHTML = "Copied success!"
    })
  btn.addEventListener('mouseout',function outFunc() {
    var tooltip = document.getElementById(`myTooltip${index}`);
    tooltip.innerHTML = "Copy to clipboard";
  })
})
