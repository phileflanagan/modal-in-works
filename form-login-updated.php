<?php
$auth = SwpmAuth::get_instance();
$setting = SwpmSettings::get_instance();
$password_reset_url = $setting->get_value('reset-page-url');
$join_url = $setting->get_value('join-us-page-url');
?>
<div class="swpm-login-widget-form">
    <form id="swpm-login-form" name="swpm-login-form" method="post" action="">
        <div class="swpm-login-form-inner">
            <label for="swpm_user_name" class="swpm-label"><?php echo SwpmUtils::_('Username or Email') ?></label>
            <input type="text" class="swpm-text-field swpm-username-field" id="swpm_user_name" value="" size="25" name="swpm_user_name" />

            <label for="swpm_password" class="swpm-label"><?php echo SwpmUtils::_('Password') ?></label>
            <input type="password" class="swpm-text-field swpm-password-field" id="swpm_password" value="" size="25" name="swpm_password" />    

            <div class="swpm-before-login-submit-section"><?php echo apply_filters('swpm_before_login_form_submit_button', ''); ?></div>

            <div class="lec-login-submit">
                <input type="submit" class="swpm-login-form-submit" name="swpm-login" value="<?php echo SwpmUtils::_('Login') ?>"/>
                <div class="lec-remember-me">
                  <span class="swpm-remember-checkbox"><input type="checkbox" name="rememberme" value="checked='checked'"></span>
                  <span class="swpm-rember-label"> <?php echo SwpmUtils::_('Remember Me') ?></span>
		            </div>
                <div class="swpm-login-action-msg">
                  <span class="swpm-login-widget-action-msg"><?php echo $auth->get_message(); ?></span>
                </div>
          </div>
    </form>
</div>
