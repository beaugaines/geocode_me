# Geocode Me

## Installation

1. Install ruby 2.3.4 (or change the ruby version in the Gemfile)
2. Run `bundle install`
3. Create a new Google api project and enable the Google Maps Geocoding API
3. Create a `.env` file in the root directory and add your api key (e.g.
`GOOGLE_API_KEY=sieojioi33399s_sjioj`)
4. In terminal, run `padrino s` and visit the app at `localhost:3000`

## Todo
- handle error response from api
- fa spinner while waiting for response from api
- fix sequel deprecation warning
- refactor js
