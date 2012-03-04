module ApplicationHelper
  def navbar
    { '/' => 'News',
      '/bio' => 'Bio',
      '/audio' => 'Audio',
      '/pics' => 'Pics',
      '/shows' => 'Shows',
      '/contact' => 'Contact'
    }.map{|url,name|
      pg = @page.gsub(/index/, '')
      active = pg==url[1..-1]
      %Q{<li><a href="#{url}" id="nav_#{name}" #{' class="active"' if active}>#{name}</a></li>}
    }.join(" ")
  end
end
