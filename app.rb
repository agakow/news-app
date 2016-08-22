require 'sinatra'
require 'aylien_text_api'
require 'rest-client'
require 'json'
require 'dotenv'
Dotenv.load

class KiwiNews < Sinatra::Base

  before do
     headers 'Access-Control-Allow-Origin' => '*'
    #  textapi = AylienTextApi::Client.new(app_id: ENV['APP_ID'], app_key: ENV['APP_KEY'])
  end

  get '/headlines' do
    headlines = RestClient.get('http://content.guardianapis.com/uk?show-editors-picks=true&show-fields=thumbnail,body&api-key=' + ENV['API_KEY'])
    return headlines
  end

  get '/section' do
    section = RestClient.get('http://content.guardianapis.com/search?section=' + params[:section] + '&show-fields=thumbnail,body&api-key=' + ENV['API_KEY'])
    return section
  end

  run! if app_file == $0

end
