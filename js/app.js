const popUp = document.getElementById('popUP');
const close = document.getElementById('close');

//close the modal
close.addEventListener('click', function() {
    document.getElementById('modalPopUP').style.display="none";
    document.getElementById('bodyblack').style.display="none";
    document.getElementsByTagName('html').style.overflow="scroll";
    document.getElementsByTagName('body').style.overflow="scroll";
});


