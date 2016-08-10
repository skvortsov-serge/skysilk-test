$(document).ready(function() {

    $('.bs-example-modal-sm').on('show.bs.modal', function(event) {
        var button = $(event.relatedTarget)
        var recipient = button.data('whatever')
        var modal = $(this)
        modal.find('.modal-title').text('Sign In')
        modal.find('.modal-body input').val(recipient)
    });

    $(function() {
        $('#sign-in-modal, #register-id').on('hidden.bs.modal', function() {
            $('.email-parent').removeClass('has-error');
            $('.email-parent-reg').removeClass('has-error');
            $('.email-parent').removeClass('has-success');
            $('.email-parent-reg').removeClass('has-success');
            $('.password-parent').removeClass('has-error');
            $('.password-parent-reg').removeClass('has-error');
            $('.password-parent').removeClass('has-success');
            $('.password-parent-reg').removeClass('has-success');
            $('.confirm-parent').removeClass('has-success');
            $('.confirm-parent-reg').removeClass('has-success');
            $('.confirm-parent').removeClass('has-error');
            $('.invalid').remove();
            $('#contactForm')[0].reset();
            $('#contactForm-reg')[0].reset();
        });

        $('#email, #password, #email-reg, #password-reg, #confirm-password').on('focus', function() {
            $(this).closest('.form-group').find('.invalid').remove();
        });

        function validationEmail() {
            var emailInput = $('#email-reg');
            var emailVal = emailInput.val();
            var emailErrorRequired = $('<div class="invalid" style="display: none">Please, type here your email</div>');
            var emailErrorInvalid = $('<div class="invalid" style="display: none">Your email is not valid</div>');
            if (emailVal == '') {
                $('.email-parent-reg').addClass('has-error');
                if ($('.email-reg .invalid').length == 0) {
                    $('.email-reg').append(emailErrorRequired);
                    emailErrorRequired.fadeIn();
                }
            } else {
                $('.email-parent-reg').removeClass('has-error');
                if (validateEmail(emailVal)) {
                    $('.email-parent-reg').addClass('has-success');
                } else {
                    $('.email-parent-reg').addClass('has-error');
                    if ($('.email-reg .invalid').length == 0) {
                        $('.email-reg').append(emailErrorInvalid);
                        emailErrorInvalid.fadeIn();
                    }
                }
            }
        }

        function validatePassword() {
            var passwordInput = $('#password-reg');
            var passwordVal = passwordInput.val();
            var passwordErrorRequired = $('<div class="invalid" style="display: none">Please, type here your password</div>');
            var passwordErrorShort = $('<div class="invalid" style="display: none"> Your password is too short, please type more than 6 charecters</div>');
            if (passwordInput.val() == '') {
                $('.password-parent-reg').addClass('has-error');
                if ($('.password-reg .invalid').length == 0) {
                    $('.password-reg').append(passwordErrorRequired);
                    passwordErrorRequired.fadeIn();

                }
            } else {
                $('.password-parent-reg').removeClass('has-error');
                if (passwordVal.length < 6) {
                    $('.password-parent-reg').addClass('has-error');
                    if ($('.password-reg .invalid').length == 0) {
                        $('.password-reg').append('<div class="invalid"> Your password is too short, please type at least 6 charecters</div>');
                    }
                } else {
                    $('.password-parent-reg').removeClass('has-error');
                    $('.password-parent-reg').addClass('has-success');
                }
            }

        }

        $('#reg').click(function() {
            validationEmail();
            validatePassword();
            var passwordInput = $('#password-reg');
            var confirmInput = $('#confirm-password');
            var passwordVal = passwordInput.val();
            var confirmVal = confirmInput.val();
             if (confirmVal == '') {
                $('.confirm-parent').addClass('has-error');
                if ($('.confirm .invalid').length == 0) {
                    $('.confirm').append('<div class="invalid">Please, type here your password</div>');
                }
            }
            if (passwordVal == confirmVal) {
                if (confirmVal.length < 6) {
                    $('.confirm-parent').addClass('has-error');
                    if ($('.confirm .invalid').length == 0) {
                        $('.confirm').append('<div class="invalid"> Your password is too short, please type at least 6 charecters</div>');
                    }
                } else {
                    $('.confirm-parent').addClass('has-success');
                }
            } else {
                $('.confirm-parent').removeClass('has-success');
                $('.confirm-parent').addClass('has-error');
                if ($('.confirm .invalid').length == 0) {
                    $('.confirm').append('<div class="invalid">Confirmation is failed</div>');

                }
            }
        });

        //при нажатии на кнопку с id="save"
        $('#save').click(function() {
            var emailInput = $('#email');
            var passwordInput = $('#password');
            var emailVal = emailInput.val();
            var passwordVal = passwordInput.val();
            var emailErrorRequired = $('<div class="invalid" style="display: block">Please, type here your email</div>');
            var emailErrorInvalid = $('<div class="invalid" style="display: block">Your email is not valid</div>');
            var passwordErrorRequired = $('<div class="invalid" style="display: block">Please, type here your password</div>');
            var passwordErrorShort = $('<div class="invalid" style="display: block"> Your password is too short, please type more than 6 charecters</div>');
            if (emailVal == '') {
                $('.email-parent').addClass('has-error');
                if ($('.email .invalid').length == 0) {
                    $('.email').append(emailErrorRequired);
                    emailErrorRequired.fadeIn();
                }
            } else {
                $('.email-parent').removeClass('has-error');
                if (validateEmail(emailVal)) {
                    $('.email-parent').addClass('has-success');
                } else {
                    $('.email-parent').addClass('has-error');
                    if ($('.email .invalid').length == 0) {
                        $('.email').append('<div class="invalid">Your email is not valid</div>');
                    }
                }
            }
            if (passwordInput.val() == '') {
                $('.password-parent').addClass('has-error');
                if ($('.password .invalid').length == 0) {
                    $('.password').append(passwordErrorRequired);
                    passwordErrorRequired.fadeIn();

                }
            } else {
                $('.password-parent').removeClass('has-error');
                if (passwordVal.length < 6) {
                    $('.password-parent').addClass('has-error');
                    if ($('.password .invalid').length == 0) {
                        $('.password').append('<div class="invalid"> Your password is too short, please type at least 6 charecters</div>');
                    }
                } else {
                    $('.password-parent').removeClass('has-error');
                    $('.password-parent').addClass('has-success');
                }
            }
        });

    });


    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    $(function() {
        $('[data-toggle="tooltip"]').tooltip();
    });


});
