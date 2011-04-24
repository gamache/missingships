class PageController < ApplicationController
  def page
    @page = params[:page] || 'index'
    @page.gsub!(/\.html/,'')
    render :template => "page/#{@page}"
  end
end
