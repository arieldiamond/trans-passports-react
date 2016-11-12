module V1
  class Questions < Grape::API
    include V1::Defaults

    resource :questions do
      desc 'Return questions and associated'

      get '/' do
        QuestionGroup.all
      end

    end
  end
end
