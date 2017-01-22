<?php
$auth = SwpmAuth::get_instance();
$setting = SwpmSettings::get_instance();
$password_reset_url = $setting->get_value('reset-page-url');
$join_url = $setting->get_value('join-us-page-url');
?>
<div class="lec-form">
    <form id="swpm-login-form" name="swpm-login-form" method="post" action="">
        <div class="swpm-login-form-inner">
            <label for="swpm_user_name" class="swpm-label"><?php echo SwpmUtils::_('Username or Email') ?></label>
            <input type="text" class="swpm-text-field swpm-username-field" id="swpm_user_name" value="" size="25" name="swpm_user_name" />

            <label for="swpm_password" class="swpm-label"><?php echo SwpmUtils::_('Password') ?></label>
            <input type="password" class="swpm-text-field swpm-password-field" id="swpm_password" value="" size="25" name="swpm_password" />

            <div class="swpm-before-login-submit-section"><?php echo apply_filters('swpm_before_login_form_submit_button', ''); ?></div>

            <div class="lec-login-submit">
                <input type="submit" class="form-button-gray" name="swpm-login" value="<?php echo SwpmUtils::_('Login') ?>"/>
                <div class="lec-remember-me">
                  <span class="swpm-remember-checkbox"><input type="checkbox" name="rememberme" value="checked='checked'"></span>
                  <span class="swpm-rember-label"> <?php echo SwpmUtils::_('Remember Me') ?></span>
		            </div>
                <div class="swpm-login-action-msg">
                  <span class="swpm-login-widget-action-msg"><?php echo $auth->get_message(); ?></span>
                </div>
          </div>

          <div class="lec-forgot-pass-link">
              <a id="forgot_pass" class="swpm-login-form-pw-reset-link"  href="<?php echo $password_reset_url; ?>"><?php echo SwpmUtils::_('Lost your password') ?>?</a>
          </div>
    </form>
</div>
