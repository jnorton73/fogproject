$(function() {
    checkboxToggleSearchListPages();
    validateInputs('.username-input',/^[a-zA-Z0-9_-]{3,40}$/);
    validateInputs('.password-input1',/^.{4,255}$/);
    $('.password-input2').on('change blur keyup',function() {
        $('.password-input1,.password-input2').prev('.pmatch').remove();
        if ($(this).val() !== $('.password-input1').val()) $('.password-input1,.password-input2').addClass('error').before('<p class="pmatch">Passwords Do Not Match</p>');
        else $('.password-input1,.password-input2').removeClass('error');
    }).parents('form').submit(function (e) {
        $('.password-input1,.password-input2').prev('.pmatch').remove();
        if ($('.password-input2').val() !== $('.password-input1').val()) {
            $('.password-input1,.password-input2').addClass('error').before('<p class="pmatch">Passwords Do Not Match</p>');
            return false;
        } else {
            $('.password-input1,.password-input2').removeClass('error');
            return true;
        }
    });
});
