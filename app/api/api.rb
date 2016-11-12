require 'grape-swagger'

class API < Grape::API
  rescue_from Grape::Exceptions::ValidationErrors do |e|
    error! e.message, 404
  end

  use Rack::Cors do
    allow do
      origins '*'
      resource '*', headers: :any, methods: [:get, :post, :options]
    end
  end

  mount V1::Questions

  add_swagger_documentation(
    hide_documentation_path: true,
    base_path: '/',
    api_version: 'v1',
    add_base_path: true
  )

  route :any, '*path' do
    error!('Resource not found.', 404)
  end
end
