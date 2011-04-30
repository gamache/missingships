class PageController < ApplicationController
  def page
    @page = params[:page] || 'index'

    if params[:email]
      @email = params[:email]
      @name = params[:name]
      addr = EmailAddress.new(:email => @email, :name => @name)
      flash[:email_signup_message] = addr.save ?
        "#{@email} has been added to the Missing Ships mailing list." :
        "Please enter a valid email to sign up for the Missing Ships mailing list."
    end

    render :template => "page/#{@page}", :layout => !params[:partial]
  end
end
