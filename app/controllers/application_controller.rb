class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in? 

    def login(user)
        session[:session_token] = user.reset_session_token! 
    end

    def current_user 
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logout
        current_user.reset_session_token!
        session[:session_token] = nil
    end

    def logged_in?
        !!current_user
    end

    def ensure_logged_in!
        redirect_to api_users_url unless logged_in?
    end

end
