source 'https://rubygems.org'

gem 'rails', '~> 5.0.0', '>= 5.0.0.1'
gem 'pg'
gem 'jbuilder'
gem 'httparty'
gem 'figaro'
gem 'passenger'
gem 'dotenv-rails'

# API
gem 'grape'
gem 'grape-swagger'
gem 'grape-swagger-rails'
gem 'hashie-forbidden_attributes'
gem 'grape-active_model_serializers'
gem 'rack-cors', require: 'rack/cors'

# For beautiful rails consoles
gem 'hirb'

group :development, :test do
  gem 'awesome_print'
  gem 'rubocop', require: false
  gem 'rspec-rails'
  gem 'simplecov'
  gem 'shoulda-matchers'
  gem 'factory_girl_rails'
  gem 'guard-rspec', require: false
  gem 'rb-fsevent' if `uname` =~ /Darwin/
  gem 'faker'
  gem 'pry-byebug'
end
