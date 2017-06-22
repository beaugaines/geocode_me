module GeocodeMe
  class App < Padrino::Application
    register SassInitializer
    register Padrino::Helpers
    enable :sessions

    get '/' do
      @locations = Location.all.reverse
      @location = Location.new
      @api_key = ENV['GOOGLE_API_KEY']
      render :index
    end

    post '/locations' do
      location_params = params[:location]
      l = Location.new(
        lat: location_params['lat'],
        lng: location_params['lng'],
        formatted_address: location_params['formatted_address']
      )

      if l.save
        redirect('/', notice: 'Location added')
      end

    end
  end
end
