class ApplicationController < ActionController::Base
  before_action :http_basic
  
  def http_basic(realm: nil)
      http_basic_authenticate_or_request_with name: 'theuser', password: 'todo', realm: realm
  end
end
