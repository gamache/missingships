class PageController < ApplicationController
  def page
    pg = params[:page] || 'index'
    logger.debug pg
    render :template => "page/#{pg.gsub(/\.html/,'')}"
  end
end
