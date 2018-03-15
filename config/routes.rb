Rails.application.routes.draw do
  get '/calendar_events' => 'calendar_events#index'
end
