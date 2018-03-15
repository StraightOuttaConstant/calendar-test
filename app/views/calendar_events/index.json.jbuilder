json.array! @calendar_events.each do |calendar_event|
  json.id calendar_event.id
  json.name calendar_event.name
  json.event_date calendar_event.event_date
  json.event_time calendar_event.event_time
  json.home calendar_event.home
  json.location calendar_event.location
end