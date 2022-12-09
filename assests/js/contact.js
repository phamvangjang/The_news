// Validate Contact Form
function ValidateEmail(mail) {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail));
}
const formContact = document.querySelector('#formContact');
const btnSubmit = document.querySelector('.contact-form__submit');
btnSubmit.onclick = function (e) {
    e.preventDefault();
    const name = document.querySelector('input[name="username"]');
    const email = document.querySelector('input[name="email"]');
    const title = document.querySelector('input[name="title"]');
    const content = document.querySelector('textarea[name="content"]');

    if (!name.value)
        name.nextElementSibling.classList.remove('hiden');
    else
        name.nextElementSibling.classList.add('hiden');
    if (!email.value || !ValidateEmail(email.value))
        email.nextElementSibling.classList.remove('hiden');
    else
        email.nextElementSibling.classList.add('hiden');
    if (!title.value)
        title.nextElementSibling.classList.remove('hiden');
    else
        title.nextElementSibling.classList.add('hiden');
    if (!content.value)
        content.nextElementSibling.classList.remove('hiden');
    else
        content.nextElementSibling.classList.add('hiden');

    if (name.value && ValidateEmail(email.value) && title.value && content.value)
        alert("Hoàn thành phần liên hệ");
}