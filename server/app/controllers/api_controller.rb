class ApiController < ApplicationController

  def hello
    render json: { 'API Server' => 'Rails' }
  end

end
