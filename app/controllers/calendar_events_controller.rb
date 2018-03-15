class CalendarEventsController < ApplicationController
  def index
    @calendar_events = CalendarEvent.all
    render 'index.json.jbuilder'
  end
end
