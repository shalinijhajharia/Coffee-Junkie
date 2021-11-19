eventListener();
function eventListener()
{
    document.querySelector('.navBtn').addEventListener('click',function()
{
    document.querySelector('.nav').classList.toggle('nav--show') //toggle is used to select alternative option
})
}
