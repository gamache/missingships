class PageController < ApplicationController
  def page
    @page = params[:page] || 'index'
    render :template => "page/#{@page}", :layout => !params[:partial]
  end
end
